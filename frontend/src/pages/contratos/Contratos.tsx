import { useEffect, useState } from 'react';
import { listarContratos } from '../../services/contratoService';
import { Link } from 'react-router-dom';
import './Contratos.css';

export function Contratos() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contratos, setContratos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    carregar();
  }, []);

  async function carregar() {
    setLoading(true);
    await listarContratos('/contratos', setContratos);
    setLoading(false);
  }

  const filtrados = contratos.filter((c) =>
    (c.nomeParc || '').toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Contratos</h1>

      {/* 🔍 BUSCA */}
      <div className="grid-toolbar">
        <input
          placeholder="Pesquisar contrato..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="grid-container">
          <table className="grid-table">
            <thead>
              <tr>
                <th>Nº</th>
                <th>Parceiro</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {filtrados.map((c) => (
                <tr key={c.numContrato}>
                  <td>{c.numContrato}</td>
                  <td>{c.nomeParc}</td>

                  <td>
                    <span className={`badge ${c.ativo === 'S' ? 'ok' : 'off'}`}>
                      {c.ativo === 'S' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>

                  <td>
                    <Link to={`/contratos/${c.numContrato}`} className="btn">
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid-footer">Total: {filtrados.length}</div>
        </div>
      )}
    </div>
  );
}

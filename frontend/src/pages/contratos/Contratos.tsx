import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarContratos } from '../../services/contratoService';
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

  const navigate = useNavigate();

  const filtrados = contratos.filter((c) =>
    (c.nomeParc || '').toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="contratos-page">
      <aside className="left-filter">
        <div className="filter-header">
          <div className="filter-actions">
            <button className="btn green">Filtro</button>
            <button className="btn">Aplicar</button>
          </div>
          <div className="filter-toggle">Filtro personalizado</div>
        </div>

        <div className="quick-filters">
          <h4>Filtros rápidos</h4>

          <label>Parceiro</label>
          <div className="field-row">
            <input />
            <button className="icon-btn">🔍</button>
          </div>

          <label>Centro Resultado</label>
          <div className="field-row">
            <input />
            <button className="icon-btn">🔍</button>
          </div>

          <label>Natureza</label>
          <div className="field-row">
            <input />
            <button className="icon-btn">🔍</button>
          </div>

          <label>Projeto</label>
          <div className="field-row">
            <input />
            <button className="icon-btn">🔍</button>
          </div>

          <label>Situação</label>
          <select defaultValue="Ativo">
            <option>Ativo</option>
            <option>Inativo</option>
          </select>

          <label>Número do contrato</label>
          <input />
        </div>
      </aside>

      <section className="list-area">
        <div className="list-header">
          <h1>Contratos</h1>
          <div className="list-toolbar">
            <button className="btn green">+</button>
            <button className="btn">⟵</button>
            <button className="btn">⟶</button>
            <div className="spacer" />
            <input
              placeholder="Pesquisar contrato..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* GRID */}
        {loading ? (
          <div className="loading">Carregando...</div>
        ) : (
          <div className="grid-container">
            <table className="grid-table">
              <thead>
                <tr>
                  <th>Ativo</th>
                  <th>Empresa</th>
                  <th>Número do contrato</th>
                  <th>Categoria dos Clientes</th>
                  <th>Parceiro</th>
                  <th>Nome Parceiro (Parceiro)</th>
                  <th>Descrição (Natureza)</th>
                </tr>
              </thead>

              <tbody>
                {filtrados.map((c) => (
                  <tr
                    key={c.numContrato}
                    onDoubleClick={() => navigate(`/contratos/${c.numContrato}`)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') navigate(`/contratos/${c.numContrato}`);
                    }}
                  >
                    <td>{c.ativo === 'S' ? 'S' : 'N'}</td>
                    <td>{c.empresa || ''}</td>
                    <td>{c.numContrato}</td>
                    <td>{c.categoriaClientes || ''}</td>
                    <td>{c.codParc}</td>
                    <td>{c.nomeParc}</td>
                    <td>{c.descricao || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="grid-footer">Total: {filtrados.length}</div>
          </div>
        )}
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarContratos } from '../../services/contratoService';
import { FilterSidebar } from '../../components/filter-sidebar/FilterSidebar';
import type Contrato from '../../models/Contrato';
import './Contratos.css';

export function Contratos() {
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [filteredContratos, setFilteredContratos] = useState<Contrato[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});

  async function carregar() {
    setLoading(true);
    try {
      await listarContratos('/contratos', setContratos);
    } catch (error) {
      console.error('Erro ao carregar contratos:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  useEffect(() => {
    let result = contratos;

    // Filtrar por pesquisa
    if (searchTerm) {
      result = result.filter(
        (c) =>
          c.numContrato?.toString().includes(searchTerm) ||
          c.nomeParc?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.codParc?.toString().includes(searchTerm),
      );
    }

    // Filtrar por status
    if (filters.situacao) {
      result = result.filter((c) =>
        filters.situacao === 'Ativo' ? c.ativo === 'S' : c.ativo === 'N',
      );
    }

    // Filtrar por parceiro
    if (filters.parceiro) {
      result = result.filter((c) =>
        c.nomeParc?.toLowerCase().includes(filters.parceiro.toLowerCase()),
      );
    }

    setFilteredContratos(result);
  }, [contratos, searchTerm, filters]);

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
  };

  return (
    <div className="contratos-page">
      <div className="contratos-header">
        <h1>Contratos</h1>
        <button className="btn-novo">+ Novo Contrato</button>
      </div>

      <div className="contratos-body">
        <FilterSidebar onFiltersChange={handleFilterChange} />

        <div className="contratos-main">
          <div className="contratos-search">
            <input
              type="text"
              placeholder="🔍 Pesquisar contratos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {loading ? (
            <div className="loading">Carregando contratos...</div>
          ) : filteredContratos.length === 0 ? (
            <div className="no-data">Nenhum contrato encontrado</div>
          ) : (
            <div className="table-container">
              <table className="contratos-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>Ativo</th>
                    <th style={{ width: '100px' }}>Nº Contrato</th>
                    <th style={{ width: '100px' }}>Empresa</th>
                    <th>Categoria dos Clientes</th>
                    <th>Parceiro</th>
                    <th>Nome Parceiro (Parceiro)</th>
                    <th>Descrição (Natureza)</th>
                    <th>Nome (Usuário última alteração)</th>
                    <th style={{ width: '100px' }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContratos.map((c) => (
                    <tr key={c.numContrato} className="contrato-row">
                      <td>
                        <span
                          className={`status-badge ${c.ativo === 'S' ? 'ativo' : 'inativo'}`}
                        >
                          {c.ativo === 'S' ? 'Sim' : 'Não'}
                        </span>
                      </td>
                      <td>
                        <strong>{c.numContrato}</strong>
                      </td>
                      <td>{c.empresa || '-'}</td>
                      <td>{c.categoriaClientes || '-'}</td>
                      <td>{c.codParc}</td>
                      <td>{c.nomeParc || '-'}</td>
                      <td>{c.descricao || '-'}</td>
                      <td>{c.natureza || '-'}</td>
                      <td>
                        <Link
                          to={`/contratos/${c.numContrato}`}
                          className="btn-view"
                        >
                          Ver →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="table-footer">
                <p>Total de contratos: {filteredContratos.length}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

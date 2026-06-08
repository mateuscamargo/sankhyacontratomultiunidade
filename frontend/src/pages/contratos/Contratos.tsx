import { useEffect, useState } from 'react';
import { Tabs, TabItem } from '../../components/tabs/Tabs';
import { listarContratos } from '../../services/contratoService';
import { listarUnidades } from '../../services/contratoUnidadeService';
import './Contratos.css';
import type Contrato from '../../models/Contrato';
import type ContratoUnidade from '../../models/ContratoUnidade';

export function Contratos() {
  const [contratos, setContratos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [selectedContrato, setSelectedContrato] = useState<Contrato | null>(
    null,
  );
  const [selectedUnidades, setSelectedUnidades] = useState<ContratoUnidade[]>(
    [],
  );
  const [detailLoading, setDetailLoading] = useState(false);

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

  const handleRowDoubleClick = async (contrato: any) => {
    setDetailLoading(true);
    try {
      // Montar objeto Contrato com os dados disponíveis
      const contratoData: Contrato = {
        id: contrato.numContrato,
        numContrato: contrato.numContrato,
        codParc: contrato.codParc,
        nomeParc: contrato.nomeParc,
        nomeParcParc: contrato.nomeParcParc || '',
        empresa: contrato.empresa || '1',
        categoriaClientes: contrato.categoriaClientes || 'Privado',
        descricao: contrato.descricao || '',
        natureza: contrato.natureza || '',
        ativo: contrato.ativo || 'S',
        dataContrato: contrato.dataContrato || '',
        localUtilizacao: contrato.localUtilizacao || '',
        tipoContrato: contrato.tipoContrato || 'Mensal',
        ambiente: contrato.ambiente || '',
        inscricaoEstadual: contrato.inscricaoEstadual || '',
        ultimaFaturamento: contrato.ultimaFaturamento || '',
      };

      setSelectedContrato(contratoData);

      // Carregar unidades do contrato
      await listarUnidades(
        `/contrato-unidades/contrato/${contrato.numContrato}`,
        setSelectedUnidades,
      );

      setViewMode('detail');
    } catch (error) {
      console.error('Erro ao carregar detalhes do contrato:', error);
    } finally {
      setDetailLoading(false);
    }
  };

  const handleBackToGrid = () => {
    setViewMode('grid');
    setSelectedContrato(null);
    setSelectedUnidades([]);
  };

  const tabs: TabItem[] = selectedContrato
    ? [
        {
          id: 'geral',
          label: 'Geral',
          content: (
            <div className="tab-content">
              <div className="form-group-row">
                <div className="form-group">
                  <label>Número do contrato</label>
                  <input
                    type="text"
                    value={selectedContrato.numContrato}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Parceiro</label>
                  <div className="input-group">
                    <input
                      type="text"
                      value={selectedContrato.codParc}
                      disabled
                    />
                    <span className="badge">{selectedContrato.nomeParc}</span>
                  </div>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label>Local de Utilização</label>
                  <input value={selectedContrato.localUtilizacao} disabled />
                </div>

                <div className="form-group">
                  <label>Ativo</label>
                  <span>{selectedContrato.ativo === 'S' ? 'Sim' : 'Não'}</span>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label>Data do Contrato</label>
                  <input
                    type="text"
                    value={selectedContrato.dataContrato}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Tipo de Contrato</label>
                  <input
                    type="text"
                    value={selectedContrato.tipoContrato}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label>Inscrição Estadual</label>
                  <input
                    type="text"
                    value={selectedContrato.inscricaoEstadual}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Último Faturamento</label>
                  <input
                    type="text"
                    value={selectedContrato.ultimaFaturamento}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label>Descrição</label>
                  <input
                    type="text"
                    value={selectedContrato.descricao}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Categoria dos Clientes</label>
                  <input
                    type="text"
                    value={selectedContrato.categoriaClientes}
                    disabled
                  />
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'unidades',
          label: 'Contrato-Unidades',
          content: (
            <div className="tab-content">
              {selectedUnidades.length === 0 ? (
                <div>Nenhuma unidade encontrada</div>
              ) : (
                <table className="unidades-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Centro de Custo</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUnidades.map((u) => (
                      <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.codCencus}</td>
                        <td>{u.ativo === 'S' ? 'Ativo' : 'Inativo'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ),
        },
      ]
    : [];

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

        {/* GRID VIEW */}
        {viewMode === 'grid' ? (
          loading ? (
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
                      onDoubleClick={() => handleRowDoubleClick(c)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleRowDoubleClick(c);
                      }}
                      style={{ cursor: 'pointer' }}
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
          )
        ) : (
          /* DETAIL VIEW */
          <div className="detail-view">
            <div className="detail-header">
              <button
                className="btn back-btn"
                onClick={handleBackToGrid}
                title="Voltar à grade"
              >
                ⟵ Voltar
              </button>

              {detailLoading ? (
                <div className="loading">Carregando detalhes...</div>
              ) : selectedContrato ? (
                <div className="contract-info">
                  <span className="contract-badge">ECO</span>
                  <span className="contract-number">
                    {selectedContrato.numContrato}
                  </span>
                  <span className="contract-partner">
                    - {selectedContrato.nomeParc}
                  </span>
                </div>
              ) : null}
            </div>

            {!detailLoading && selectedContrato && (
              <Tabs tabs={tabs} defaultTab="geral" />
            )}
          </div>
        )}
      </section>
    </div>
  );
}

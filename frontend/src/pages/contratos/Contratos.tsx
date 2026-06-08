import { useEffect, useState } from 'react';
import { Tabs } from '../../components/tabs/Tabs';
import type { TabItem } from '../../components/tabs/Tabs';
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
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    setLoading(true);
    await listarContratos('/contratos', setContratos);
    setLoading(false);
  }

  // Atalho F6: alterna entre Modo Grade e Modo Formulário
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== 'F6') return;
      e.preventDefault();
      if (viewMode === 'grid') {
        if (selectedRow !== null) {
          const c = contratos.find((x: any) => x.numContrato === selectedRow);
          if (c) void handleRowDoubleClick(c);
        }
      } else {
        handleBackToGrid();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [viewMode, selectedRow, contratos]);

  const filtrados = contratos.filter((c) =>
    (c.nomeParc || c.numContrato?.toString() || '')
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const handleRowDoubleClick = async (contrato: any) => {
    setDetailLoading(true);
    try {
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

  // Abreviação do nome do parceiro para o badge (primeiras 3 letras)
  const badgeText = selectedContrato?.nomeParc
    ? selectedContrato.nomeParc.substring(0, 3).toUpperCase()
    : 'CON';

  const tabs: TabItem[] = selectedContrato
    ? [
        {
          id: 'geral',
          label: 'Geral',
          content: (
            <div className="tab-content">
              {/* Linha 1: Inscrição Estadual + Ref. Último Faturamento */}
              <div className="form-row">
                <div className="form-field">
                  <label>Inscrição Estadual:</label>
                  <input
                    type="text"
                    value={selectedContrato.inscricaoEstadual || ''}
                    disabled
                  />
                </div>
                <div className="form-field">
                  <label>Referência último faturamento:</label>
                  <input
                    type="text"
                    value={selectedContrato.ultimaFaturamento || ''}
                    disabled
                  />
                </div>
              </div>

              {/* Linha 2: Ambiente */}
              <div className="form-row">
                <div className="form-field">
                  <label>Ambiente:</label>
                  <input
                    type="text"
                    value={selectedContrato.ambiente || ''}
                    disabled
                  />
                </div>
                <div className="form-field">
                  <label>Ativo:</label>
                  <div className="toggle-field">
                    <span
                      className={`toggle ${selectedContrato.ativo === 'S' ? 'on' : 'off'}`}
                    >
                      {selectedContrato.ativo === 'S' ? '✔' : '✖'}
                    </span>
                    <span className="toggle-label">
                      {selectedContrato.ativo === 'S' ? 'Sim' : 'Não'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Linha 3: Data do Contrato */}
              <div className="form-row">
                <div className="form-field">
                  <label>Data do contrato: *</label>
                  <input
                    type="text"
                    value={selectedContrato.dataContrato || ''}
                    disabled
                  />
                </div>
                <div className="form-field">
                  <label>Empresa: *</label>
                  <div className="lookup-field">
                    <input
                      type="text"
                      value={selectedContrato.empresa || ''}
                      disabled
                      className="lookup-id"
                    />
                    <span className="lookup-icon">🔍</span>
                    <input
                      type="text"
                      value=""
                      disabled
                      className="lookup-desc"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
              </div>

              {/* Linha 4: Contato + Tipo de Contrato */}
              <div className="form-row">
                <div className="form-field">
                  <label>Contato: *</label>
                  <div className="lookup-field">
                    <input
                      type="text"
                      value=""
                      disabled
                      className="lookup-id"
                    />
                    <span className="lookup-icon">🔍</span>
                    <input
                      type="text"
                      value=""
                      disabled
                      className="lookup-desc"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Tipo de Contrato:</label>
                  <select
                    disabled
                    value={selectedContrato.tipoContrato || 'Mensal'}
                  >
                    <option>Mensal</option>
                    <option>Anual</option>
                    <option>Avulso</option>
                  </select>
                </div>
              </div>

              {/* Linha 5: Categoria dos Clientes */}
              <div className="form-row">
                <div className="form-field">
                  <label>Observação Contrato:</label>
                  <input type="text" value="" disabled />
                </div>
                <div className="form-field">
                  <label>Categoria dos Clientes: *</label>
                  <select
                    disabled
                    value={selectedContrato.categoriaClientes || 'Privado'}
                  >
                    <option>Privado</option>
                    <option>Público</option>
                  </select>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'propriedades',
          label: 'Propriedades',
          content: (
            <div className="tab-content">
              <div className="empty-tab">Nenhuma propriedade disponível</div>
            </div>
          ),
        },
        {
          id: 'execucao',
          label: 'Execução',
          content: (
            <div className="tab-content">
              <div className="empty-tab">
                Nenhum dado de execução disponível
              </div>
            </div>
          ),
        },
        {
          id: 'observacoes',
          label: 'Observações',
          content: (
            <div className="tab-content">
              <div className="empty-tab">Sem observações</div>
            </div>
          ),
        },
        {
          id: 'unidades',
          label: 'Contrato-Unidades',
          content: (
            <div className="tab-content">
              <div className="unidades-toolbar">
                <button className="un-btn green">+</button>
                <button className="un-btn">Filtrar</button>
              </div>
              {selectedUnidades.length === 0 ? (
                <div className="empty-tab">
                  Nenhuma unidade vinculada a este contrato
                </div>
              ) : (
                <table className="unidades-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Contrato</th>
                      <th>Empresa (Cód.)</th>
                      <th>Centro de Custo</th>
                      <th>Data Inclusão</th>
                      <th>Ativo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUnidades.map((u) => (
                      <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.numContrato}</td>
                        <td>—</td>
                        <td>{u.codCencus}</td>
                        <td>—</td>
                        <td>
                          <span
                            className={`status-badge ${u.ativo === 'S' ? 'ativo' : 'inativo'}`}
                          >
                            {u.ativo === 'S' ? 'Ativo' : 'Inativo'}
                          </span>
                        </td>
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
      {/* ── SIDEBAR DE FILTROS ─────────────────────────────── */}
      <aside className="filter-sidebar">
        <div className="filter-sidebar-header">
          <button className="fsb-btn green">+ Filtro</button>
          <button className="fsb-btn">Aplicar</button>
        </div>

        <div className="filter-sidebar-toggle">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <span>Filtro personalizado</span>
          <span className="filter-badge">0</span>
          <button className="filter-expand-btn">▼</button>
        </div>

        <div className="filter-section-title">Filtros rápidos</div>

        <div className="filter-group">
          <label>Parceiro</label>
          <div className="filter-input-row">
            <input type="text" />
            <button className="flookup-btn">🔍</button>
            <input type="text" className="filter-desc" />
          </div>
        </div>

        <div className="filter-group">
          <label>Centro Resultado</label>
          <div className="filter-input-row">
            <input type="text" />
            <button className="flookup-btn">🔍</button>
            <input type="text" className="filter-desc" />
          </div>
        </div>

        <div className="filter-group">
          <label>Natureza</label>
          <div className="filter-input-row">
            <input type="text" />
            <button className="flookup-btn">🔍</button>
            <input type="text" className="filter-desc" />
          </div>
        </div>

        <div className="filter-group">
          <label>Projeto</label>
          <div className="filter-input-row">
            <input type="text" />
            <button className="flookup-btn">🔍</button>
            <input type="text" className="filter-desc" />
          </div>
        </div>

        <div className="filter-group">
          <label>Situação</label>
          <select defaultValue="Ativo">
            <option>Ativo</option>
            <option>Inativo</option>
            <option>Todos</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Número do contrato</label>
          <input type="text" />
        </div>
      </aside>

      {/* ── ÁREA PRINCIPAL ────────────────────────────────── */}
      <section className="main-area">
        {/* ── TOOLBAR DA PÁGINA ── */}
        <div className="page-toolbar">
          <div className="toolbar-left">
            <button
              className="tb-icon-btn grid-icon"
              title={
                viewMode === 'grid' ? 'Modo formulário [F6]' : 'Modo grade [F6]'
              }
              onClick={() => {
                if (viewMode === 'grid' && selectedRow !== null) {
                  const c = contratos.find(
                    (x) => x.numContrato === selectedRow,
                  );
                  if (c) handleRowDoubleClick(c);
                } else if (viewMode === 'detail') {
                  handleBackToGrid();
                }
              }}
            >
              {viewMode === 'grid' ? '☰' : '▦'}
            </button>
            <span className="tb-divider" />
            <button className="tb-icon-btn green-btn" title="Novo">
              +
            </button>
            <button className="tb-icon-btn" title="Primeiro">
              «
            </button>
            <button
              className="tb-icon-btn"
              title={viewMode === 'detail' ? 'Anterior' : 'Anterior'}
            >
              ‹
            </button>
            <button className="tb-icon-btn" title="Próximo">
              ›
            </button>
            <button className="tb-icon-btn" title="Último">
              »
            </button>
            <button className="tb-icon-btn red-btn" title="Excluir">
              🗑
            </button>
            <button className="tb-icon-btn" title="Duplicar">
              ⧉
            </button>
            <button className="tb-icon-btn" title="Atualizar">
              ↻
            </button>
          </div>
          <div className="toolbar-right">
            {viewMode === 'detail' && selectedContrato ? (
              <div className="record-id-bar">
                <span className="record-badge">{badgeText}</span>
                <span className="record-num">
                  {selectedContrato.numContrato}
                </span>
                <span className="record-name">
                  - {selectedContrato.nomeParc}
                </span>
                <div className="tab-chip">
                  Contratos
                  <button
                    className="chip-close"
                    onClick={handleBackToGrid}
                    title="Fechar"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ) : (
              <span className="record-count">{filtrados.length}</span>
            )}
          </div>
        </div>

        {/* ── GRID VIEW ── */}
        {viewMode === 'grid' && (
          <>
            <div className="grid-search-bar">
              <input
                className="grid-search-input"
                placeholder="Pesquisar contrato..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {loading ? (
              <div className="loading-state">Carregando contratos...</div>
            ) : (
              <div className="grid-wrapper">
                <table className="data-grid">
                  <thead>
                    <tr>
                      <th>Ativo</th>
                      <th>Empresa</th>
                      <th>Nº Contrato</th>
                      <th>Categoria dos Clientes</th>
                      <th>Parceiro</th>
                      <th>Nome Parceiro</th>
                      <th>Descrição (Natureza)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtrados.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="empty-grid">
                          Nenhum registro encontrado
                        </td>
                      </tr>
                    ) : (
                      filtrados.map((c) => (
                        <tr
                          key={c.numContrato}
                          className={
                            selectedRow === c.numContrato ? 'selected' : ''
                          }
                          onClick={() => setSelectedRow(c.numContrato)}
                          onDoubleClick={() => handleRowDoubleClick(c)}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleRowDoubleClick(c);
                          }}
                        >
                          <td>
                            <span
                              className={`ativo-dot ${c.ativo === 'S' ? 'on' : 'off'}`}
                            />
                          </td>
                          <td>{c.empresa || '—'}</td>
                          <td className="num-col">{c.numContrato}</td>
                          <td>{c.categoriaClientes || '—'}</td>
                          <td className="num-col">{c.codParc}</td>
                          <td>{c.nomeParc || '—'}</td>
                          <td>{c.descricao || '—'}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                <div className="grid-footer">
                  <span>Total de registros: {filtrados.length}</span>
                  <span>Total faturado: 0,00</span>
                  <span>Total do contrato: 0,00</span>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── DETAIL VIEW ── */}
        {viewMode === 'detail' && (
          <div className="detail-area">
            {/* Campos "fora das abas" — visíveis sempre */}
            {!detailLoading && selectedContrato && (
              <>
                <div className="above-tabs-fields">
                  {/* Número do contrato */}
                  <div className="atf-field narrow">
                    <label>Número do contrato:</label>
                    <input
                      type="text"
                      value={selectedContrato.numContrato}
                      disabled
                    />
                  </div>

                  {/* Parceiro */}
                  <div className="atf-field wide">
                    <label>Parceiro: *</label>
                    <div className="lookup-field">
                      <input
                        type="text"
                        value={selectedContrato.codParc}
                        disabled
                        className="lookup-id"
                      />
                      <span className="lookup-icon">🔍</span>
                      <input
                        type="text"
                        value={selectedContrato.nomeParc}
                        disabled
                        className="lookup-desc"
                      />
                    </div>
                  </div>

                  {/* Local de Utilização */}
                  <div className="atf-field wide">
                    <label>Local de Utilização: *</label>
                    <input
                      type="text"
                      value={selectedContrato.localUtilizacao || ''}
                      disabled
                    />
                  </div>
                </div>

                {/* Abas */}
                <div className="tabs-wrapper">
                  <Tabs tabs={tabs} defaultTab="geral" />
                </div>
              </>
            )}

            {detailLoading && (
              <div className="loading-state">
                Carregando detalhes do contrato...
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

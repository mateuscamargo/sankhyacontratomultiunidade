import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tabs, type TabItem } from '../../components/tabs/Tabs';
import { listarUnidades } from '../../services/contratoUnidadeService';
import type Contrato from '../../models/Contrato';
import type ContratoUnidade from '../../models/ContratoUnidade';
import './ContratoDetail.css';

export function ContratoDetail() {
  const { id } = useParams();
  const [contrato, setContrato] = useState<Contrato | null>(null);
  const [unidades, setUnidades] = useState<ContratoUnidade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setLoading(true);
        // Simular carregamento do contrato - você pode chamar um serviço real aqui
        setContrato({
          id: 1,
          numContrato: parseInt(id || '0'),
          codParc: 210,
          nomeParc: 'ECOLAB QUIMICA LTDA',
          nomeParcParc: '483 Q',
          empresa: '1',
          categoriaClientes: 'Privado',
          descricao: 'LOCAÇÃO DE EQUIPAMENTOS',
          natureza: 'VICTORIA',
          ativo: 'S',
          dataContrato: '08/11/2021',
          localUtilizacao: 'SUZANO MUCURI - FABRICA',
          tipoContrato: 'Mensal',
          ambiente: '',
          inscricaoEstadual: '672.138.333.114',
          ultimaFaturamento: '04/12/2025',
        });

        // Carregar unidades
        await listarUnidades(`/contrato-unidades/contrato/${id}`, setUnidades);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      carregarDados();
    }
  }, [id]);

  if (loading) {
    return <div className="loading">Carregando contrato...</div>;
  }

  if (!contrato) {
    return <div className="no-data">Contrato não encontrado</div>;
  }

  const tabs: TabItem[] = [
    {
      id: 'geral',
      label: 'Geral',
      icon: '📋',
      content: (
        <div className="tab-content">
          <div className="form-group-row">
            <div className="form-group">
              <label>Número do contrato</label>
              <input type="text" value={contrato.numContrato} disabled />
            </div>
            <div className="form-group">
              <label>Parceiro</label>
              <div className="input-group">
                <input
                  type="text"
                  value={contrato.codParc}
                  disabled
                  className="small"
                />
                <span className="badge">{contrato.nomeParc}</span>
              </div>
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Local de Utilização</label>
              <input type="text" value={contrato.localUtilizacao} disabled />
            </div>
            <div className="form-group">
              <label>Ativo</label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={contrato.ativo === 'S'}
                  disabled
                />
                <span>{contrato.ativo === 'S' ? 'Sim' : 'Não'}</span>
              </div>
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Data do contrato</label>
              <input type="text" value={contrato.dataContrato} disabled />
            </div>
            <div className="form-group">
              <label>Empresa</label>
              <input type="text" value={contrato.empresa} disabled />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Contato</label>
              <input type="text" value={contrato.contato || ''} disabled />
            </div>
            <div className="form-group">
              <label>Equipamento</label>
              <input type="text" value={''} disabled />
            </div>
          </div>

          <div className="form-group">
            <label>Tipo de Contrato</label>
            <input type="text" value={contrato.tipoContrato} disabled />
          </div>

          <div className="form-group">
            <label>Ambiente</label>
            <input type="text" value={contrato.ambiente || ''} disabled />
          </div>

          <div className="form-group">
            <label>Observação Contrato</label>
            <textarea value={''} disabled rows={3}></textarea>
          </div>

          <div className="form-group">
            <label>Categoria dos Clientes</label>
            <input type="text" value={contrato.categoriaClientes} disabled />
          </div>
        </div>
      ),
    },
    {
      id: 'propriedades',
      label: 'Propriedades',
      icon: '⚙️',
      content: (
        <div className="tab-content">
          <div className="form-group-row">
            <div className="form-group">
              <label>Inscrição Estadual</label>
              <input value={contrato.inscricaoEstadual} disabled />
            </div>
            <div className="form-group">
              <label>Referência último faturamento</label>
              <input value={contrato.ultimaFaturamento} disabled />
            </div>
          </div>
          <div className="form-group">
            <label>TOP para faturamento em contratos</label>
            <input value={''} disabled />
          </div>
          <div className="form-group">
            <label>Observação padrão</label>
            <textarea disabled rows={4}></textarea>
          </div>
        </div>
      ),
    },
    {
      id: 'execucao',
      label: 'Execução',
      icon: '▶️',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Informações de execução do contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'observacoes',
      label: 'Observações',
      icon: '📝',
      content: (
        <div className="tab-content">
          <div className="form-group">
            <label>Observações</label>
            <textarea
              placeholder="Adicione observações aqui..."
              rows={6}
            ></textarea>
          </div>
        </div>
      ),
    },
    {
      id: 'clausulas',
      label: 'Cláusulas',
      icon: '📄',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Cláusulas do contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'locacoes',
      label: 'Locações',
      icon: '🏠',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Locações do contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'bens',
      label: 'Bens',
      icon: '📦',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Bens associados ao contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'remitidos',
      label: 'Remitidos',
      icon: '✉️',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Remitidos do contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'retornados',
      label: 'Retornados',
      icon: '↩️',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Retornados do contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'produtos',
      label: 'Produtos/Serviços',
      icon: '🛒',
      content: (
        <div className="tab-content">
          <div className="info-box">
            <p>Produtos/Serviços do contrato...</p>
          </div>
        </div>
      ),
    },
    {
      id: 'unidades',
      label: 'Contrato-Unidades',
      icon: '🏢',
      content: (
        <div className="tab-content">
          {unidades.length === 0 ? (
            <div className="info-box">
              <p>Nenhuma unidade encontrada para este contrato</p>
            </div>
          ) : (
            <div className="table-container">
              <table className="unidades-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Centro de Custo</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {unidades.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.codCencus}</td>
                      <td>
                        <span
                          className={`status-badge ${u.ativo === 'S' ? 'ativo' : 'inativo'}`}
                        >
                          {u.ativo === 'S' ? 'Ativo' : 'Inativo'}
                        </span>
                      </td>
                      <td>
                        <button className="btn-sm">Editar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="contrato-detail-page">
      <div className="detail-header">
        <div className="detail-title">
          <Link to="/contratos" className="btn-voltar">
            ← Voltar
          </Link>
          <div>
            <div className="header-label">
              <span className="badge-code">{contrato.codParc}</span>
              <h1>
                {contrato.numContrato} - {contrato.nomeParc}
              </h1>
            </div>
            <p className="header-subtitle">{contrato.localUtilizacao}</p>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">⬆️ Copiar</button>
          <button className="btn-action">🔄 Atualizar</button>
          <button className="btn-action btn-delete">🗑️ Deletar</button>
        </div>
      </div>

      <div className="detail-body">
        <Tabs tabs={tabs} defaultTab="geral" />
      </div>
    </div>
  );
}

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
                <input type="text" value={contrato.codParc} disabled />
                <span className="badge">{contrato.nomeParc}</span>
              </div>
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Local de Utilização</label>
              <input value={contrato.localUtilizacao} disabled />
            </div>

            <div className="form-group">
              <label>Ativo</label>
              <span>{contrato.ativo === 'S' ? 'Sim' : 'Não'}</span>
            </div>
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
                {unidades.map((u) => (
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
  ];

  return (
    <div className="contrato-detail-page">
      <div className="detail-header">
        <Link to="/contratos">← Voltar</Link>

        <h1>
          {contrato.numContrato} - {contrato.nomeParc}
        </h1>
      </div>

      <Tabs tabs={tabs} defaultTab="geral" />
    </div>
  );
}

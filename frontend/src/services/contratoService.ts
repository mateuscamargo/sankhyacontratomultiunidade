import type Contrato from '../models/Contrato';
import { api } from './api';

interface ContratoRaw {
  NUMCONTRATO: number;
  DTCONTRATO: string;
  CODEMP: number;
  CODPARC: number;
  [key: string]: any;
}

const mapearContrato = (raw: ContratoRaw): Contrato => ({
  id: raw.NUMCONTRATO,
  numContrato: raw.NUMCONTRATO,
  codParc: raw.CODPARC,
  nomeParc: '', // Será preenchido com dados adicionais se disponível
  empresa: String(raw.CODEMP || ''),
  ativo: raw.ATIVO || 'S',
  dataContrato: raw.DTCONTRATO || '',
  tipoContrato: raw.TIPOCONTRATO || '',
  categoriaClientes: '',
  descricao: '',
  natureza: '',
  nomeParcParc: '',
  ambiente: '',
  inscricaoEstadual: '',
  ultimaFaturamento: '',
  localUtilizacao: '',
});

export const listarContratos = async (
  url: string,
  setDados: (data: Contrato[]) => void,
) => {
  const resposta = await api.get(url);
  const contratosMapeados = resposta.data.map((contrato: ContratoRaw) =>
    mapearContrato(contrato),
  );
  setDados(contratosMapeados);
};

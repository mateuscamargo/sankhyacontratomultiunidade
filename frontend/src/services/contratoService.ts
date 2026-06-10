import type Contrato from '../models/Contrato';
import { api } from './api';

interface ContratoRaw {
  NUMCONTRATO: number;
  DTCONTRATO: string;
  CODEMP: number;
  CODPARC: number;
  ATIVO: string;
  LOCALUTILIZACAO: string;
  empresa?: { CODEMP: number; RAZAOABREV?: string; NOMEEMP?: string };
  parceiro?: { CODPARC: number; NOMEPARC: string; RAZAOSOCIAL?: string };
  contato?: { CODCONTATO: number; NOMECONT?: string };
  natureza?: { CODNAT: number; DESCRNAT: string };
  tipoTitulo?: { CODTIPTIT: number; DESCTIPTIT?: string };
  tipoNegociacao?: { CODTIPVENDA: number; DESCRTIPVENDA?: string };
  top?: { CODTIPOPER: number; DESCROPER?: string };
  centroCusto?: { CODCENCUS: number; DESCRCENCUS?: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const mapearContrato = (raw: ContratoRaw): Contrato => ({
  id: raw.NUMCONTRATO,
  numContrato: raw.NUMCONTRATO,
  codParc: raw.CODPARC,
  nomeParc: raw.parceiro?.NOMEPARC ?? '',
  nomeParcParc: raw.parceiro?.RAZAOSOCIAL ?? '',
  empresa: raw.empresa?.RAZAOABREV ?? String(raw.CODEMP ?? ''),
  contato: raw.contato?.NOMECONT ?? '',
  natureza: raw.natureza?.DESCRNAT ?? '',
  descricao: raw.natureza?.DESCRNAT ?? '',
  tipoContrato: raw.tipoNegociacao?.DESCRTIPVENDA ?? '',
  ativo: raw.ATIVO ?? 'S',
  dataContrato: raw.DTCONTRATO ?? '',
  localUtilizacao: raw.LOCALUTILIZACAO ?? '',
  categoriaClientes: '',
  ambiente: '',
  inscricaoEstadual: '',
  ultimaFaturamento: '',

  // objetos completos para uso no detalhe
  parceiro: raw.parceiro ?? undefined,
  contato_obj: raw.contato ?? undefined,
  empresa_obj: raw.empresa ?? undefined,
  natureza_obj: raw.natureza ?? undefined,
  tipoTitulo_obj: raw.tipoTitulo ?? undefined,
  tipoNegociacao_obj: raw.tipoNegociacao ?? undefined,
  top_obj: raw.top ?? undefined,
  centroCusto_obj: raw.centroCusto ?? undefined,
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

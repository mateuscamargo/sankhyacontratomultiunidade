import { api } from './api';
import type ContratoUnidade from '../models/ContratoUnidade';

interface ContratoUnidadeRaw {
  ID?: number;
  NUMCONTRATO?: number;
  CODCENCUS?: number; // ← typo corrigido (era CODECENCUS)
  CODEMP?: number;
  ATIVO?: string;
  DTINCLUSAO?: string;
  OBSERVACAO?: string;
  centroCusto?: { CODCENCUS: number; DESCRCENCUS: string };
  empresa?: { CODEMP: number; RAZAOABREV: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const mapearUnidade = (raw: ContratoUnidadeRaw): ContratoUnidade => ({
  id: raw.ID ?? 0,
  numContrato: raw.NUMCONTRATO ?? 0,
  codCencus: raw.CODCENCUS ?? 0, // ← typo corrigido
  codEmp: raw.CODEMP ?? 0,
  ativo: raw.ATIVO ?? 'S',
  dtInclusao: raw.DTINCLUSAO ?? '',
  observacao: raw.OBSERVACAO ?? '',
  // relações
  centroCusto_obj: raw.centroCusto ?? undefined,
  empresa_obj: raw.empresa ?? undefined,
});

export const listarUnidades = async (
  url: string,
  setDados: (data: ContratoUnidade[]) => void,
) => {
  const resposta = await api.get(url);
  const unidadesMapeadas = resposta.data.map((unidade: ContratoUnidadeRaw) =>
    mapearUnidade(unidade),
  );
  setDados(unidadesMapeadas);
};

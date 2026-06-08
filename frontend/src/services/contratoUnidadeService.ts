import { api } from './api';
import type ContratoUnidade from '../models/ContratoUnidade';

interface ContratoUnidadeRaw {
  ID?: number;
  NUMCONTRATO?: number;
  CODECENCUS?: number;
  ATIVO?: string;
  [key: string]: any;
}

const mapearUnidade = (raw: ContratoUnidadeRaw): ContratoUnidade => ({
  id: raw.ID || 0,
  numContrato: raw.NUMCONTRATO || 0,
  codCencus: raw.CODECENCUS || 0,
  ativo: raw.ATIVO || 'S',
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

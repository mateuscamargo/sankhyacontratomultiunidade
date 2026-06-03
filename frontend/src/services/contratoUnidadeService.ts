import { api } from './api';
import type ContratoUnidade from '../models/ContratoUnidade';

export const listarUnidades = async (
  url: string,
  setDados: (data: ContratoUnidade[]) => void,
) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

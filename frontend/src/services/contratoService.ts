import type Contrato from '../models/Contrato';
import { api } from './api';

export const listarContratos = async (
  url: string,
  setDados: (data: Contrato[]) => void,
) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

import { api } from './api';
import type { ContratoUnidade } from '../models/ContratoUnidade';

export async function listarUnidades(
  numcontrato: number,
): Promise<ContratoUnidade[]> {
  const response = await api.get(`/contrato-unidades/contrato/${numcontrato}`);
  return response.data;
}

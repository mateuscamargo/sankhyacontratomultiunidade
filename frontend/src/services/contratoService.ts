import type { Contrato } from '../models/Contrato';
import { api } from './api';

export async function listarContratos(): Promise<Contrato[]> {
  const response = await api.get('/contratos');
  return response.data;
}

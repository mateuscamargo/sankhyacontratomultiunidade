export default interface Contrato {
  id?: number;
  numContrato: number;
  codParc: number;
  nomeParc: string;
  nomeParcParc?: string;
  empresa?: string;
  contato?: string;
  categoriaClientes?: string;
  descricao?: string;
  natureza?: string;
  ativo: string;
  dataContrato?: string;
  localUtilizacao?: string;
  tipoContrato?: string;
  ambiente?: string;
  inscricaoEstadual?: string;
  ultimaFaturamento?: string;
}

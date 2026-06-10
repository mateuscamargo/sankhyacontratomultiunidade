export default interface ContratoUnidade {
  id: number;
  numContrato: number;
  codCencus: number;
  codEmp: number;
  ativo: string;
  dtInclusao?: string;
  observacao?: string;
  centroCusto_obj?: { CODCENCUS: number; DESCRCENCUS: string };
  empresa_obj?: { CODEMP: number; RAZAOABREV: string };
}

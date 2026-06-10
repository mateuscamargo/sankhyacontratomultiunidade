import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContratoUnidades } from '../entities/contrato-unidades.entity';
import { Empresa } from 'src/empresas/entities/empresa.entity';
import { CentroCusto } from 'src/centro-custo/entities/centro-custo.entity';

@Injectable()
export class ContratoUnidadesService {
  constructor(
    @InjectRepository(ContratoUnidades)
    private readonly repository: Repository<ContratoUnidades>,

    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,

    @InjectRepository(CentroCusto)
    private readonly centroCustoRepository: Repository<CentroCusto>,
  ) {}

  async findByContrato(numcontrato: number): Promise<any[]> {
    const unidades = await this.repository.find({
      where: { NUMCONTRATO: numcontrato, ATIVO: 'S' },
    });

    const resultado = await Promise.all(
      unidades.map(async (u) => {
        const empresa = await this.empresaRepository.findOne({
          where: { CODEMP: u.CODEMP },
        });

        const centroCusto = await this.centroCustoRepository.findOne({
          where: { CODCENCUS: u.CODCENCUS },
        });

        return {
          ...u,
          empresa: empresa ?? null,
          centroCusto: centroCusto ?? null,
        };
      }),
    );

    return resultado;
  }
}

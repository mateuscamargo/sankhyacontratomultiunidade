import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContratoUnidades } from '../entitties/contrato-unidades.entity';

@Injectable()
export class ContratoUnidadesService {
  constructor(
    @InjectRepository(ContratoUnidades)
    private repository: Repository<ContratoUnidades>,
  ) {}

  async findByContrato(numcontrato: number): Promise<ContratoUnidades[]> {
    return this.repository.find({
      where: { NUMCONTRATO: numcontrato, ATIVO: 'S' },
    });
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrato } from '../entities/contratos.entity';
import { Repository } from 'typeorm';

const RELATIONS = [
  'empresa',
  'parceiro',
  'contato',
  'centroCusto',
  'natureza',
  'tipoTitulo',
  'tipoNegociacao',
  'top',
];

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}

  async findAll(): Promise<Contrato[]> {
    return this.contratoRepository.find({ relations: RELATIONS });
  }

  async findById(id: number): Promise<Contrato> {
    const contrato = await this.contratoRepository.findOne({
      where: { NUMCONTRATO: id },
      relations: RELATIONS,
    });

    if (!contrato) {
      throw new HttpException('Contrato não encontrado', HttpStatus.NOT_FOUND);
    }

    return contrato;
  }

  async findByParceiro(codparc: number): Promise<Contrato[]> {
    return this.contratoRepository.find({
      where: { CODPARC: codparc },
      relations: RELATIONS, // ← estava faltando
    });
  }

  async create(contrato: Contrato): Promise<Contrato> {
    return this.contratoRepository.save(contrato);
  }

  async update(contrato: Contrato): Promise<Contrato> {
    await this.findById(contrato.NUMCONTRATO);
    return this.contratoRepository.save(contrato);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.contratoRepository.delete({ NUMCONTRATO: id });
  }
}

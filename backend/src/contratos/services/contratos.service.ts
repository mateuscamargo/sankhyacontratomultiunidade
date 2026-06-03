import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrato } from '../entities/contratos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}

  async findAll(): Promise<Contrato[]> {
    return await this.contratoRepository.find();
  }

  async findById(id: number): Promise<Contrato> {
    const contrato = await this.contratoRepository.findOne({
      where: { NUMCONTRATO: id },
    });

    if (!contrato) {
      throw new HttpException('Contrato não encontrado', HttpStatus.NOT_FOUND);
    }

    return contrato;
  }

  async findByParceiro(codparc: number): Promise<Contrato[]> {
    return await this.contratoRepository.find({
      where: { CODPARC: codparc },
    });
  }

  async create(contrato: Contrato): Promise<Contrato> {
    return await this.contratoRepository.save(contrato);
  }

  async update(contrato: Contrato): Promise<Contrato> {
    await this.findById(contrato.NUMCONTRATO);

    return await this.contratoRepository.save(contrato);
  }

  async delete(id: number): Promise<void> {
    const contrato = await this.findById(id);

    await this.contratoRepository.delete(contrato);
  }
}

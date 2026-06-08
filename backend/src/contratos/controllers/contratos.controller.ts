import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

import { ContratosService } from '../services/contratos.service';
import { Contrato } from '../entities/contratos.entity';

@Controller('/contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Get()
  async getAll(): Promise<Contrato[]> {
    return this.contratosService.findAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Contrato> {
    return this.contratosService.findById(id);
  }

  @Get('/parceiro/:codparc')
  async getByParceiro(
    @Param('codparc', ParseIntPipe) codparc: number,
  ): Promise<Contrato[]> {
    return this.contratosService.findByParceiro(codparc);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() contrato: Contrato): Promise<Contrato> {
    return this.contratosService.create(contrato);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() contrato: Contrato): Promise<Contrato> {
    return this.contratosService.update(contrato);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.contratosService.delete(id);
  }
}

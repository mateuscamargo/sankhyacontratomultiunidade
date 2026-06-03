import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ContratoUnidadesService } from '../services/contrato-unidades.service';
import { ContratoUnidades } from '../entitties/contrato-unidades.entity';

@Controller('/contrato-unidades')
export class ContratoUnidadesController {
  constructor(private readonly service: ContratoUnidadesService) {}

  @Get('/contrato/:numcontrato')
  async findByContrato(
    @Param('numcontrato', ParseIntPipe) numcontrato: number,
  ): Promise<ContratoUnidades[]> {
    return await this.service.findByContrato(numcontrato);
  }
}

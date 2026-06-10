import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ContratoUnidadesService } from '../services/contrato-unidades.service';
import { ContratoUnidades } from '../entities/contrato-unidades.entity';

@Controller('/contrato-unidades')
export class ContratoUnidadesController {
  constructor(private readonly service: ContratoUnidadesService) {}

  @Get('/contrato/:numcontrato')
  async findByContrato(
    @Param('numcontrato', ParseIntPipe) numcontrato: number,
  ): Promise<ContratoUnidades[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.service.findByContrato(numcontrato);
  }
}

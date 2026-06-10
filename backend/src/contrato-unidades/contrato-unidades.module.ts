import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoUnidades } from './entities/contrato-unidades.entity';
import { Empresa } from 'src/empresas/entities/empresa.entity';
import { CentroCusto } from 'src/centro-custo/entities/centro-custo.entity';
import { ContratoUnidadesService } from './services/contrato-unidades.service';
import { ContratoUnidadesController } from './controllers/contrato-unidades.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContratoUnidades, Empresa, CentroCusto])],
  controllers: [ContratoUnidadesController],
  providers: [ContratoUnidadesService],
})
export class ContratoUnidadesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoUnidadesService } from './services/contrato-unidades.service';
import { ContratoUnidadesController } from './controllers/contrato-unidades.controller';
import { ContratoUnidades } from './entitties/contrato-unidades.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContratoUnidades])],
  controllers: [ContratoUnidadesController],
  providers: [ContratoUnidadesService],
})
export class ContratoUnidadesModule {}

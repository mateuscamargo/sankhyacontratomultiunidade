import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contratos.entity';
import { ContratosController } from './controllers/contratos.controller';
import { ContratosService } from './services/contratos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato])],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}

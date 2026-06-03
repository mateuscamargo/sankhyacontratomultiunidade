import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contratos.entity';
import { ContratosService } from './services/contratos.service';
import { ContratosController } from './controllers/contratos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato])],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoNegociacao } from './entities/tipo-negociacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoNegociacao])],
  exports: [TypeOrmModule],
})
export class TipoNegociacaoModule {}

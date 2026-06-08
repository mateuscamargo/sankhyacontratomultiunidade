import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parceiro } from './entities/parceiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parceiro])],
  exports: [TypeOrmModule],
})
export class ParceirosModule {}

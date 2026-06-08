import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoTitulo } from './entities/tipo-titulo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoTitulo])],
  exports: [TypeOrmModule],
})
export class TipoTituloModule {}

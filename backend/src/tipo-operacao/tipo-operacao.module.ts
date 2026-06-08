import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Top } from './entities/tipo-operacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Top])],
  exports: [TypeOrmModule],
})
export class TopModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Natureza } from './entities/natureza.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Natureza])],
  exports: [TypeOrmModule],
})
export class NaturezasModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroCusto } from './entities/centro-custo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CentroCusto])],
  exports: [TypeOrmModule],
})
export class CentroCustoModule {}

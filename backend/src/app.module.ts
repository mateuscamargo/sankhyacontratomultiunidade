import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosModule } from './contratos/contratos.module';
import { ContratoUnidadesModule } from './contrato-unidades/contrato-unidades.module';
import { ContratoUnidadesService } from './contrato-unidades/services/contrato-unidades.service';
import { ContratosService } from './contratos/services/contratos.service';
import { ContratoUnidadesController } from './contrato-unidades/controllers/contrato-unidades.controller';
import { ContratosController } from './contratos/controllers/contratos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_contratomultiunidades',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContratosModule,
    ContratoUnidadesModule,
  ],

  controllers: [ContratosController, ContratoUnidadesController],
  providers: [ContratosService, ContratoUnidadesService],
})
export class AppModule {}

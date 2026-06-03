import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosModule } from './contratos/contratos.module';
import { ContratoUnidadesModule } from './contrato-unidades/contrato-unidades.module';

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
      synchronize: false,
    }),
    ContratosModule,
    ContratoUnidadesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contratos.entity';
import { ContratosController } from './controllers/contratos.controller';
import { ContratosService } from './services/contratos.service';
import { TopModule } from '../tipo-operacao/tipo-operacao.module';
import { TipoNegociacaoModule } from '../tipo-negociacao/tipo-negociacao.module';
import { TipoTituloModule } from '../tipo-titulo/tipo-titulo.module';
import { NaturezasModule } from '../naturezas/natureza.module';
import { CentroCustoModule } from '../centro-custo/centro-custo.module';
import { ContatosModule } from '../contatos/contato.module';
import { ParceirosModule } from '../parceiros/parceiro.module';
import { EmpresasModule } from '../empresas/empresa.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contrato]),
    EmpresasModule,
    ParceirosModule,
    ContatosModule,
    CentroCustoModule,
    NaturezasModule,
    TipoTituloModule,
    TipoNegociacaoModule,
    TopModule,
  ],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}

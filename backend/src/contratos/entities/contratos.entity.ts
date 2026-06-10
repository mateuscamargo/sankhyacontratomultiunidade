import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Parceiro } from 'src/parceiros/entities/parceiro.entity';
import { Contato } from 'src/contatos/entities/contato.entity';
import { CentroCusto } from 'src/centro-custo/entities/centro-custo.entity';
import { Natureza } from 'src/naturezas/entities/natureza.entity';
import { TipoTitulo } from 'src/tipo-titulo/entities/tipo-titulo.entity';
import { TipoNegociacao } from 'src/tipo-negociacao/entities/tipo-negociacao.entity';
import { Top } from 'src/tipo-operacao/entities/tipo-operacao.entity';
import { ContratoUnidades } from 'src/contrato-unidades/entities/contrato-unidades.entity';

@Entity({ name: 'TCSCON' })
export class Contrato {
  @PrimaryGeneratedColumn()
  NUCONTRATO!: number;

  @Column()
  NUMCONTRATO!: number;

  @Column()
  CODEMP!: number;

  @Column()
  CODPARC!: number;

  @Column({ nullable: true })
  CODCONTATO!: number;

  @Column({ length: 100 })
  LOCALUTILIZACAO!: string;

  @Column({ type: 'date' })
  DTCONTRATO!: Date;

  @Column({ length: 1, default: 'S' })
  ATIVO!: string;

  @Column()
  CODCENCUS!: number;

  @Column()
  CODNAT!: number;

  @Column()
  CODTIPTIT!: number;

  @Column()
  CODTIPVENDA!: number;

  @Column()
  CODTIPOPER!: number;

  @Column({ type: 'date' })
  DTBASE!: Date;

  @Column({ type: 'date' })
  DTTERMINO!: Date;

  @Column()
  FREQUENCIA!: number;

  @Column()
  DIAVENCIMENTO!: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  VLRMENSAL!: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  VLRCONTRATO?: number;

  @Column({ length: 500, nullable: true })
  OBSERVACAO?: string;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'CODEMP' })
  empresa!: Empresa;

  @ManyToOne(() => Parceiro)
  @JoinColumn({ name: 'CODPARC' })
  parceiro!: Parceiro;

  @ManyToOne(() => Contato)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'CODPARC' },
    { name: 'CODCONTATO', referencedColumnName: 'CODCONTATO' },
  ])
  contato!: Contato;

  @ManyToOne(() => CentroCusto)
  @JoinColumn({ name: 'CODCENCUS' })
  centroCusto!: CentroCusto;

  @ManyToOne(() => Natureza)
  @JoinColumn({ name: 'CODNAT' })
  natureza!: Natureza;

  @ManyToOne(() => TipoTitulo)
  @JoinColumn({ name: 'CODTIPTIT' })
  tipoTitulo!: TipoTitulo;

  @ManyToOne(() => TipoNegociacao)
  @JoinColumn({ name: 'CODTIPVENDA' })
  tipoNegociacao!: TipoNegociacao;

  @ManyToOne(() => Top)
  @JoinColumn({ name: 'CODTIPOPER' })
  top!: Top;

  @OneToMany(() => ContratoUnidades, (unidade) => unidade.contrato)
  unidades!: ContratoUnidades[];
}

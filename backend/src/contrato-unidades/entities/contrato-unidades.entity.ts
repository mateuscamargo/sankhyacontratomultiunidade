import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Contrato } from 'src/contratos/entities/contratos.entity';
import { CentroCusto } from 'src/centro-custo/entities/centro-custo.entity';
import { Empresa } from 'src/empresas/entities/empresa.entity';

@Entity({ name: 'AD_TCSCONUNIDADES' })
export class ContratoUnidades {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  NUMCONTRATO!: number;

  @Column()
  CODEMP!: number;

  @Column()
  CODCENCUS!: number;

  @Column({ type: 'date' })
  DTINCLUSAO!: Date;

  @Column({ length: 1, default: 'S' })
  ATIVO!: string;

  @Column({ nullable: true })
  CODUSU_INC?: number;

  @Column({ type: 'date', nullable: true })
  DTINATIVACAO?: Date;

  @Column({ length: 500, nullable: true })
  OBSERVACAO?: string;

  @ManyToOne(() => Contrato, (contrato) => contrato.unidades)
  @JoinColumn({ name: 'NUMCONTRATO', referencedColumnName: 'NUMCONTRATO' })
  contrato!: Contrato;

  @ManyToOne(() => CentroCusto)
  @JoinColumn({ name: 'CODCENCUS' })
  centroCusto!: CentroCusto;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'CODEMP' })
  empresa!: Empresa;
}

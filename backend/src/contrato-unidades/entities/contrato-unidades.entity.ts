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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'AD_TCSCONUNIDADES' })
export class ContratoUnidades {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  ID!: number;

  @Column()
  @ApiProperty()
  NUMCONTRATO!: number;

  @Column()
  @ApiProperty()
  CODEMP!: number;

  @Column()
  @ApiProperty()
  CODCENCUS!: number;

  @Column({ type: 'date' })
  @ApiProperty()
  DTINCLUSAO!: Date;

  @Column({ length: 1, default: 'S' })
  @ApiProperty()
  ATIVO!: string;

  @Column({ nullable: true })
  @ApiProperty()
  CODUSU_INC?: number;

  @Column({ type: 'date', nullable: true })
  @ApiProperty()
  DTINATIVACAO?: Date;

  @Column({ length: 500, nullable: true })
  @ApiProperty()
  OBSERVACAO?: string;

  @ManyToOne(() => Contrato, (contrato) => contrato.unidades)
  @JoinColumn({ name: 'NUMCONTRATO', referencedColumnName: 'NUMCONTRATO' })
  @ApiProperty()
  contrato!: Contrato;

  @ManyToOne(() => CentroCusto)
  @JoinColumn({ name: 'CODCENCUS' })
  @ApiProperty()
  centroCusto!: CentroCusto;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'CODEMP' })
  @ApiProperty()
  empresa!: Empresa;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}

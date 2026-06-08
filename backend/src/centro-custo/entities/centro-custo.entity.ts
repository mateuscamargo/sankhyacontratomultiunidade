import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TSICUS' })
export class CentroCusto {
  @PrimaryColumn()
  CODCENCUS!: number;

  @Column({ length: 50 })
  DESCRCENCUS!: string;

  @Column()
  CODCENCUSPAI!: number;

  @Column({ length: 1 })
  ATIVO!: string;

  @Column({ length: 1 })
  ANALITICO!: string;

  @Column()
  GRAU!: number;

  @Column()
  CODUSURESP!: number;

  @Column()
  CODPARC!: number;

  @Column()
  CODTAB!: number;

  @Column({ type: 'date' })
  DTINCLUSAO!: Date;

  @Column({ nullable: true })
  CODUNN?: number;

  @Column({ nullable: true })
  CODUNG?: number;

  @Column({ length: 1 })
  VEICULO!: string;

  @Column({ nullable: true })
  CODPARCRESP?: number;
}

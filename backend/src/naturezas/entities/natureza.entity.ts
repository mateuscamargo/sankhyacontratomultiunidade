import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFNAT' })
export class Natureza {
  @PrimaryColumn()
  CODNAT!: number;

  @Column({ length: 40 })
  DESCRNAT!: string;

  @Column({ length: 1, default: 'S' })
  INCRESULT!: string;

  @Column({ nullable: true })
  CODCTACTB?: number;

  @Column({ nullable: true })
  CODCENCUS?: number;

  @Column({ nullable: true })
  CODNATPAI?: number;

  @Column()
  GRAU!: number;

  @Column({ length: 1, default: 'S' })
  ATIVA!: string;

  @Column({ length: 1, default: 'S' })
  ANALITICA!: string;

  @Column({ nullable: true })
  CODCTACTB2?: number;

  @Column({ nullable: true })
  CODHISTCTB?: number;

  @Column({ nullable: true })
  CODHISTCTB2?: number;

  @Column({ length: 1, nullable: true })
  TIPNAT?: string;

  @Column({ type: 'timestamp', nullable: true })
  DHALTER?: Date;
}

import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFNAT' })
export class Natureza {
  @PrimaryColumn()
  CODNAT!: number;

  @Column({ length: 40 })
  DESCRNAT!: string;

  @Column({ length: 1 })
  INCRESULT!: string; // S ou N

  @Column({ nullable: true })
  CODCTACTB?: number;

  @Column({ nullable: true })
  CODCENCUS?: number;

  @Column({ nullable: true })
  CODNATPAI?: number;

  @Column()
  GRAU!: number;

  @Column({ length: 1 })
  ATIVA!: string; // S ou N

  @Column({ length: 1 })
  ANALITICA!: string; // S ou N

  @Column({ nullable: true })
  CODCTACTB2?: number;

  @Column({ nullable: true })
  CODHISTCTB?: number;

  @Column({ nullable: true })
  CODHISTCTB2?: number;

  @Column({ length: 1, nullable: true })
  TIPNAT?: string; // R (receita) ou D (despesa)

  @Column({ type: 'timestamp', nullable: true })
  DHALTER?: Date;
}

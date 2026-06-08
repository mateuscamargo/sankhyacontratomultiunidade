import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFTIT' })
export class TipoTitulo {
  @PrimaryColumn()
  CODTIPTIT!: number;

  @Column({ length: 30 })
  DESCRTIPTIT!: string;

  @Column({ length: 2, nullable: true })
  ESPDOC?: string;

  @Column({ nullable: true })
  CARENCIA?: number;

  @Column({ length: 1 })
  EXPTES!: string;

  @Column()
  EXPGRS!: number;

  @Column({ length: 1 })
  VALIDAQTDMAXTITVENCIDOS!: string;

  @Column({ length: 1 })
  EXIGBAIXAACERTO!: string;

  @Column({ length: 1 })
  TRANSFDIF!: string;

  @Column()
  INDTIT!: number;

  @Column({ length: 1 })
  BAIXACERTO!: string;

  @Column({ length: 1 })
  INFCMC7!: string;

  @Column({ length: 1 })
  FASTUSA!: string;

  @Column({ length: 1 })
  FASTBAIXA!: string;

  @Column()
  PRAZO!: number;

  @Column()
  CODGRUPOTIPTIT!: number;

  @Column({ length: 1 })
  IMPBOLRENEG!: string;

  @Column({ length: 2 })
  SUBTIPOVENDA!: string;

  @Column({ length: 1 })
  CONFERENCIA!: string;

  @Column({ length: 1 })
  ATIVO!: string;

  @Column()
  CODPARCTEF!: number;

  @Column({ length: 1 })
  IMPCOMPROVANTE!: string;

  @Column({ length: 1 })
  AJUSTAVP!: string;

  @Column()
  NROPARCELAS!: number;

  @Column({ length: 1 })
  INTEGRAECONECT!: string;

  @Column({ length: 1 })
  CONVENIOECONECT!: string;
}

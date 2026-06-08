import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TSIEMP' })
export class Empresa {
  @PrimaryColumn()
  CODEMP!: number;

  @Column({ length: 40, nullable: true })
  NOMEFANTASIA?: string;

  @Column({ length: 40, nullable: true })
  RAZAOSOCIAL?: string;

  @Column({ length: 15 })
  RAZAOABREV!: string;

  @Column({ nullable: true })
  CODEMPMATRIZ?: number;

  @Column({ nullable: true })
  CODEND?: number;

  @Column({ length: 6, nullable: true })
  NUMEND?: string;

  @Column({ length: 10, nullable: true })
  COMPLEMENTO?: string;

  @Column({ default: 0 })
  CODBAI!: number;

  @Column({ nullable: true })
  CODCID?: number;

  @Column({ length: 8, nullable: true })
  CEP?: string;

  @Column({ length: 13, nullable: true })
  TELEFONE?: string;

  @Column({ length: 80, nullable: true })
  EMAIL?: string;

  @Column({ length: 14, nullable: true })
  CGC?: string;

  @Column({ length: 16, nullable: true })
  INSCESTAD?: string;

  @Column({ nullable: true })
  CODPARC?: number;

  @Column({ length: 1, default: 'N' })
  FINANCEIRO!: string;

  @Column({ length: 1, default: 'N' })
  ESTOQUE!: string;

  @Column({ length: 1, default: 'N' })
  CARGAS!: string;

  @Column({ length: 1, default: 'N' })
  COMISSOES!: string;

  @Column({ length: 1, default: 'N' })
  PRODUCAO!: string;

  @Column({ length: 1, default: 'N' })
  SUPDECISAO!: string;

  @Column({ length: 1, default: 'N' })
  LIVROSFISCAIS!: string;

  @Column({ length: 1, default: 'N' })
  FOLHAPAGTO!: string;

  @Column({ length: 1, default: 'N' })
  SIMPLES!: string;

  @Column({ type: 'date', nullable: true })
  DHALTER?: Date;
}

import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFTPV' })
export class TipoNegociacao {
  @PrimaryColumn()
  CODTIPVENDA!: number;

  @Column({ type: 'date' })
  DHALTER!: Date;

  @Column({ length: 36 })
  DESCRTIPVENDA!: string;

  @Column({ length: 1 })
  SUBTIPOVENDA!: string;

  @Column({ nullable: true })
  CODTAB?: number;

  @Column({ length: 1 })
  ATIVO!: string;

  @Column({ nullable: true })
  VENDAMIN?: number;

  @Column({ nullable: true })
  VENDAMAX?: number;

  @Column({ nullable: true })
  TAXAJURO?: number;

  @Column({ length: 1 })
  TIPTAXA!: string;

  @Column({ length: 1 })
  TIPJURO!: string;

  @Column({ length: 1 })
  VALPRAZOCLIENTE!: string;

  @Column({ nullable: true })
  BASEPRAZO?: number;

  @Column({ nullable: true })
  PRAZOMAX?: number;

  @Column({ nullable: true })
  PRAZOMEDMAX?: number;

  @Column({ nullable: true })
  NROPARCELAS?: number;

  @Column({ nullable: true })
  PRAZOMIN?: number;

  @Column({ nullable: true })
  PRAZOMAXPRIPARC?: number;

  @Column({ length: 1 })
  FIXAVENC!: string;

  @Column({ length: 1 })
  EMITEBOLETA!: string;

  @Column({ length: 1 })
  EMITEDUPL!: string;

  @Column({ length: 1 })
  SOMAPRAZOCLIENTE!: string;

  @Column({ length: 1 })
  PODECONSUMIDOR!: string;
}

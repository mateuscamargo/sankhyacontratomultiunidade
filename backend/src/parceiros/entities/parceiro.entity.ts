import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFPAR' })
export class Parceiro {
  @PrimaryColumn()
  CODPARC!: number;

  @Column({ default: 0 })
  CODVEND!: number;

  @Column({ length: 80 })
  NOMEPARC!: string;

  @Column({ length: 80, nullable: true })
  RAZAOSOCIAL?: string;

  @Column({ length: 1 })
  TIPPESSOA!: string;

  @Column({ nullable: true })
  CODPARCMATRIZ?: number;

  @Column({ default: 0 })
  CODEND!: number;

  @Column({ default: 0 })
  CODBAI!: number;

  @Column({ default: 0 })
  CODCID!: number;

  @Column({ default: 0 })
  CODREG!: number;

  @Column({ length: 8, nullable: true })
  CEP?: string;

  @Column({ length: 13, nullable: true })
  TELEFONE?: string;

  @Column({ length: 80, nullable: true })
  EMAIL?: string;

  @Column({ type: 'date' })
  DTCAD!: Date;

  @Column({ type: 'date' })
  DTALTER!: Date;

  @Column({ length: 14, nullable: true })
  CGC_CPF?: string;

  @Column({ length: 1, default: 'N' })
  CLIENTE!: string;

  @Column({ length: 1, default: 'N' })
  FORNECEDOR!: string;

  @Column({ length: 1, default: 'N' })
  TRANSPORTADORA!: string;

  @Column({ length: 1, default: 'N' })
  VENDEDOR!: string;

  @Column({ length: 1, default: 'N' })
  AGENCIA!: string;

  @Column({ default: 0 })
  CODTIPPARC!: number;

  @Column({ default: 0 })
  CODBCO!: number;

  @Column({ length: 1, default: 'N' })
  TARE!: string;

  @Column({ length: 1, default: 'N' })
  IPIINCICMS!: string;

  @Column({ length: 1, default: 'N' })
  RETEMISS!: string;

  @Column({ length: 1, default: 'N' })
  RETEMINSS!: string;

  @Column({ length: 1 })
  ATIVO!: string;

  @Column({ length: 1, default: 'N' })
  BLOQUEAR!: string;

  @Column({ length: 1, default: 'N' })
  EVENDA!: string;

  @Column({ length: 1, default: 'N' })
  ECOMPRA!: string;

  @Column({ length: 1, default: 'N' })
  CTAADIANT!: string;

  @Column({ default: 0 })
  CODASSESSOR!: number;

  @Column({ length: 1, default: 'N' })
  CALCINSS!: string;

  @Column({ default: 0 })
  CODUSU!: number;

  @Column({ length: 1, default: 'N' })
  RETEMPIS!: string;

  @Column({ length: 1, default: 'N' })
  RETEMCOFINS!: string;

  @Column({ length: 1, default: 'N' })
  RETEMCSL!: string;

  @Column({ length: 1, default: 'N' })
  TEMIPI!: string;

  @Column({ length: 1, default: 'N' })
  DESCBONIF!: string;

  @Column({ length: 1, default: 'N' })
  IMPLAUDOLOTE!: string;

  @Column({ length: 1, default: 'N' })
  MEDICO!: string;

  @Column({ length: 1, default: 'N' })
  TIPOFATUR!: string;

  @Column({ length: 1, default: 'N' })
  MOTORISTA!: string;

  @Column({ length: 1, default: 'N' })
  DESCSTIVA!: string;

  @Column({ length: 1, default: 'N' })
  OPERLOGIST!: string;

  @Column({ length: 1, default: 'N' })
  AGRONOMO!: string;

  @Column({ length: 1, default: 'N' })
  PRODUTORTEMNF!: string;

  @Column({ length: 1, default: 'N' })
  TIPANEXONFE!: string;

  @Column({ length: 1, default: 'S' })
  FLEX!: string;

  @Column({ length: 1, default: 'N' })
  SIMPLES!: string;

  @Column({ default: 0 })
  CODUSUCOBR!: number;

  @Column({ length: 1, default: 'N' })
  EMAILDANFE!: string;

  @Column({ length: 1, default: 'N' })
  PERMITECORTE!: string;
}

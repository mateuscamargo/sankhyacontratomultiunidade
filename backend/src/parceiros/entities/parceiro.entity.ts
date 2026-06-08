import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFPAR' })
export class Parceiro {
  @PrimaryColumn()
  CODPARC!: number;

  @Column()
  CODVEND!: number;

  @Column({ length: 80 })
  NOMEPARC!: string;

  @Column({ length: 80, nullable: true })
  RAZAOSOCIAL?: string;

  @Column({ length: 1 })
  TIPPESSOA!: string; // F ou J

  @Column({ nullable: true })
  CODPARCMATRIZ?: number;

  @Column()
  CODEND!: number;

  @Column()
  CODBAI!: number;

  @Column()
  CODCID!: number;

  @Column()
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

  @Column({ length: 1 })
  CLIENTE!: string;

  @Column({ length: 1 })
  FORNECEDOR!: string;

  @Column({ length: 1 })
  TRANSPORTADORA!: string;

  @Column({ length: 1 })
  VENDEDOR!: string;

  @Column({ length: 1 })
  AGENCIA!: string;

  @Column()
  CODTIPPARC!: number;

  @Column()
  CODBCO!: number;

  @Column({ length: 1 })
  TARE!: string;

  @Column({ length: 1 })
  IPIINCICMS!: string;

  @Column({ length: 1 })
  RETEMISS!: string;

  @Column({ length: 1 })
  RETEMINSS!: string;

  @Column({ length: 1 })
  ATIVO!: string;

  @Column({ length: 1 })
  BLOQUEAR!: string;

  @Column({ length: 1 })
  EVENDA!: string;

  @Column({ length: 1 })
  ECOMPRA!: string;

  @Column({ length: 1 })
  CTAADIANT!: string;

  @Column()
  CODASSESSOR!: number;

  @Column({ length: 1 })
  CALCINSS!: string;

  @Column()
  CODUSU!: number;

  @Column({ length: 1 })
  RETEMPIS!: string;

  @Column({ length: 1 })
  RETEMCOFINS!: string;

  @Column({ length: 1 })
  RETEMCSL!: string;

  @Column({ length: 1 })
  TEMIPI!: string;

  @Column({ length: 1 })
  DESCBONIF!: string;

  @Column({ length: 1 })
  IMPLAUDOLOTE!: string;

  @Column({ length: 1 })
  MEDICO!: string;

  @Column({ length: 1 })
  TIPOFATUR!: string;

  @Column({ length: 1 })
  MOTORISTA!: string;

  @Column({ length: 1 })
  DESCSTIVA!: string;

  @Column({ length: 1 })
  OPERLOGIST!: string;

  @Column({ length: 1 })
  AGRONOMO!: string;

  @Column({ length: 1 })
  PRODUTORTEMNF!: string;

  @Column({ length: 1 })
  TIPANEXONFE!: string;

  @Column({ length: 1 })
  FLEX!: string;

  @Column({ length: 1 })
  SIMPLES!: string;

  @Column()
  CODUSUCOBR!: number;

  @Column({ length: 1 })
  EMAILDANFE!: string;

  @Column({ length: 1 })
  PERMITECORTE!: string;
}

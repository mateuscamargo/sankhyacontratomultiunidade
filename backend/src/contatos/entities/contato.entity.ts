import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TGFCTT' })
export class Contato {
  @PrimaryColumn()
  CODPARC!: number;

  @PrimaryColumn()
  CODCONTATO!: number;

  @Column({ length: 40, nullable: true })
  NOMECONTATO?: string;

  @Column({ length: 15, nullable: true })
  APELIDO?: string;

  @Column({ length: 20, nullable: true })
  CARGO?: string;

  @Column({ length: 13, nullable: true })
  TELEFONE?: string;

  @Column({ length: 13, nullable: true })
  CELULAR?: string;

  @Column({ length: 80, nullable: true })
  EMAIL?: string;

  @Column({ type: 'date', nullable: true })
  DTNASC?: Date;

  @Column({ length: 11, nullable: true })
  CPF?: string;

  @Column({ length: 1 })
  ATIVO!: string; // S ou N

  @Column({ type: 'date', nullable: true })
  DTCAD?: Date;

  @Column({ length: 1 })
  RECEBEBOLETOEMAIL!: string;

  @Column({ length: 1 })
  RECEBENOTAEMAIL!: string;

  @Column({ length: 1 })
  SOCIO!: string;
}

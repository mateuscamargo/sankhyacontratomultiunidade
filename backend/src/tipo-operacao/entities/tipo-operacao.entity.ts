import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'TGFTOP' })
export class Top {
  @PrimaryColumn()
  CODTIPOPER!: number;

  @Column({ type: 'date' })
  DHALTER!: Date;

  @Column({ length: 40 })
  DESCROPER!: string;

  @Column({ length: 1 })
  TIPMOV!: string;

  @Column({ default: 0 })
  ATUALFIN!: number;

  @Column({ length: 1 })
  TIPATUALFIN!: string;

  @Column({ length: 1 })
  ATUALCOM!: string;

  @Column({ length: 1 })
  ATUALEST!: string;

  @Column({ length: 1 })
  EMITENOTA!: string;

  @Column({ length: 1 })
  ATIVO!: string;

  @Column({ length: 1 })
  EMITEBOLETA!: string;

  @Column({ length: 1 })
  EXIGETRANSP!: string;

  @Column({ length: 1 })
  EXIGECONF!: string;

  @Column({ length: 1 })
  TEMIPI!: string;

  @Column({ length: 1 })
  TEMICMS!: string;

  @Column({ length: 1 })
  TEMPIS!: string;

  @Column({ length: 1 })
  TEMCOFINS!: string;

  @Column({ length: 1 })
  TEMISS!: string;

  @Column({ length: 1 })
  TEMIRF!: string;

  @Column({ length: 1 })
  INFCONTRATO!: string;
}

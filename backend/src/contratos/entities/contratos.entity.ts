import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TCSCON' })
export class Contrato {
  @PrimaryColumn()
  NUMCONTRATO: number;

  @Column({ type: 'date' })
  DTCONTRATO: Date;

  @Column()
  CODEMP: number;

  @Column()
  CODPARC: number;

  @Column()
  CODCONTAIO: number;

  @Column()
  CODUSU: number;

  @Column({ type: 'date' })
  DTBASEREAJ: Date;

  @Column()
  FREQREAJ: number;

  @Column({ length: 1 })
  TIPPAG: string;

  @Column()
  DIAPAG: number;

  @Column({ length: 1 })
  IMPPRECINDIV: string;

  @Column({ length: 1 })
  GERARNF: string;

  @Column({ length: 1 })
  IMPRIME: string;

  @Column()
  GATILHO: number;

  @Column()
  RECDESP: number;

  @Column()
  TIPOTITULO: number;

  @Column({ length: 1 })
  TIPOCONTRATO: string;

  @Column()
  CODPROJ: number;

  @Column({ length: 1, nullable: true })
  ATIVO?: string;

  @Column({ length: 1 })
  DIAUTIL: string;

  @Column({ length: 1 })
  TEMIRF: string;

  @Column({ length: 1 })
  TEMISS: string;

  @Column({ length: 1 })
  RETEMISS: string;

  @Column({ length: 1 })
  TIPOARM: string;

  @Column({ length: 1 })
  TIPO: string;

  @Column()
  CODPROJSINT: number;

  @Column({ length: 1, nullable: true })
  FERIADOMUN?: string;

  @Column({ length: 1, nullable: true })
  FERIADOEST?: string;

  @Column({ length: 1, nullable: true })
  FERIADONAC?: string;

  @Column({ length: 1 })
  ACESSAHISTSUBOS: string;

  @Column({ length: 1 })
  LOCACAOBEM: string;

  @Column({ nullable: true })
  CODGPC?: number;

  @Column({ nullable: true })
  CODCID?: number;

  @Column({ length: 1 })
  FATURPRORATA: string;

  @Column({ length: 1 })
  CONTROLOCBENS: string;

  @Column({ length: 1 })
  GERARFINNOTA: string;

  @Column({ length: 1 })
  PERCOBRA: string;

  @Column({ length: 1 })
  PERDESC: string;

  @Column({ length: 1 })
  PERDESCCON: string;

  @Column({ length: 1 })
  SITCONT: string;

  @Column({ length: 1 })
  TIPCOBR: string;

  @Column({ length: 1 })
  TIPQUEBRA: string;

  @Column({ length: 1 })
  VALDEDIN: string;

  @Column({ length: 1 })
  COBPROPORCAR: string;

  @Column({ length: 1 })
  ULTATABUMI: string;

  @Column({ length: 1 })
  PERCOBRAR: string;

  @Column({ nullable: true })
  NUMCSTC?: number;

  @Column({ length: 1 })
  REGLAUSADIA: string;

  @Column({ type: 'float' })
  QTDNEG: number;

  @Column({ length: 1 })
  MODALIDADE: string;

  @Column({ type: 'float' })
  VALNEGSC: number;

  @Column({ length: 1 })
  EXIGEPPEDIDOPC: string;

  @Column({ type: 'float' })
  PPAUTASC: number;
}

import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Livro} from './livro.model';
import {Utilizador} from './utilizador.model';

@model()
export class Emprestimo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  dataEmprestimo: string;

  @property({
    type: 'string',
    required: true,
  })
  dataDevolucao: string;

  @belongsTo(() => Livro)
  livroId: number;

  @belongsTo(() => Utilizador)
  utilizadorId: number;

  constructor(data?: Partial<Emprestimo>) {
    super(data);
  }
}

export interface EmprestimoRelations {
  livro?: Livro;
  utilizador?: Utilizador;
}

export type EmprestimoWithRelations = Emprestimo & EmprestimoRelations;

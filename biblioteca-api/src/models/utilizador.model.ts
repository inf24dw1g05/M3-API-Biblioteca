import {Entity, hasMany, model, property} from '@loopback/repository';
import {Emprestimo} from './emprestimo.model';

@model()
export class Utilizador extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  tipoUtilizador: number;

  @hasMany(() => Emprestimo)
  emprestimos?: Emprestimo[];

  constructor(data?: Partial<Utilizador>) {
    super(data);
  }
}

export interface UtilizadorRelations {
  emprestimos?: Emprestimo[];
}

export type UtilizadorWithRelations = Utilizador & UtilizadorRelations;

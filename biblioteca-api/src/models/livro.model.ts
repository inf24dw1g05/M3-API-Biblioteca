import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Categoria} from './categoria.model';
import {Emprestimo} from './emprestimo.model';

@model()
export class Livro extends Entity {
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
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'number'
  })
  anoPublicacao?: number;

  @belongsTo(() => Categoria)
  categoriaId: number;

  @hasMany(() => Emprestimo)
  emprestimos?: Emprestimo[];

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  categoria?: Categoria;
  emprestimos?: Emprestimo[];
}

export type LivroWithRelations = Livro & LivroRelations;

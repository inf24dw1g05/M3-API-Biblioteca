import {Entity, hasMany, model, property} from '@loopback/repository';
import {Livro} from './livro.model';

@model()
export class Categoria extends Entity {
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

  @hasMany(() => Livro)
  livros?: Livro[];

  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  livros?: Livro[];
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;

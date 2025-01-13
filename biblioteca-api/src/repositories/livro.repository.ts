import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Livro, LivroRelations, Categoria} from '../models';
import {CategoriaRepository} from './categoria.repository';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.titulo,
  LivroRelations
> {

  public readonly categoria: BelongsToAccessor<Categoria, typeof Livro.prototype.titulo>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>,
  ) {
    super(Livro, dataSource);
    this.categoria = this.createBelongsToAccessorFor('categoria', categoriaRepositoryGetter,);
    this.registerInclusionResolver('categoria', this.categoria.inclusionResolver);
  }
}

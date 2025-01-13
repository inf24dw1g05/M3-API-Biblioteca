import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Utilizador} from '../models';
import {UtilizadorRepository} from '../repositories';

export class UtilizadoresController {
  constructor(
    @repository(UtilizadorRepository)
    public utilizadorRepository: UtilizadorRepository,
  ) { }

  @post('/utilizadores')
  @response(200, {
    description: 'Utilizador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Utilizador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizador, {
            title: 'NewUtilizador',
            exclude: ['id'],
          }),
        },
      },
    })
    utilizador: Omit<Utilizador, 'id'>,
  ): Promise<Utilizador> {
    return this.utilizadorRepository.create(utilizador);
  }

  @get('/utilizadores/count')
  @response(200, {
    description: 'Utilizador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Utilizador) where?: Where<Utilizador>,
  ): Promise<Count> {
    return this.utilizadorRepository.count(where);
  }

  @get('/utilizadores')
  @response(200, {
    description: 'Array of Utilizador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Utilizador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Utilizador) filter?: Filter<Utilizador>,
  ): Promise<Utilizador[]> {
    return this.utilizadorRepository.find(filter);
  }

  @patch('/utilizadores')
  @response(200, {
    description: 'Utilizador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizador, {partial: true}),
        },
      },
    })
    utilizador: Utilizador,
    @param.where(Utilizador) where?: Where<Utilizador>,
  ): Promise<Count> {
    return this.utilizadorRepository.updateAll(utilizador, where);
  }

  @get('/utilizadores/{id}')
  @response(200, {
    description: 'Utilizador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Utilizador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Utilizador, {exclude: 'where'}) filter?: FilterExcludingWhere<Utilizador>
  ): Promise<Utilizador> {
    return this.utilizadorRepository.findById(id, filter);
  }

  @patch('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizador, {partial: true}),
        },
      },
    })
    utilizador: Utilizador,
  ): Promise<void> {
    await this.utilizadorRepository.updateById(id, utilizador);
  }

  @put('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilizador: Utilizador,
  ): Promise<void> {
    await this.utilizadorRepository.replaceById(id, utilizador);
  }

  @del('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilizadorRepository.deleteById(id);
  }
}

# inf24dw1g05_M3

# Sistema de Gestão de Bibliotecas

## Descrição
Este projeto foi desenvolvido no âmbito da disciplina **Desenvolvimento Web I** com o objetivo de criar uma aplicação web para a gestão de bibliotecas. A aplicação inclui:

- Uma **API RESTful** desenvolvida com **LoopBack4** para gerir os dados da biblioteca.
- Um cliente web de **backoffice** construído com **React-Admin** para gerir os recursos de forma intuitiva.
- Utilização de **MySQL** como base de dados e configuração via **Docker** para contentorização multi-container.

## Funcionalidades
A aplicação suporta a gestão de:

- **Livros** (listar, criar, editar e eliminar).
- **Utilizadores** (gestão de quem pode requisitar livros).
- **Empréstimos** (controlo das requisições realizadas).
- **Categorias** (organização dos livros por géneros/temas).

## Requisitos Implementados
- **API baseada em arquitetura REST** com suporte às operações CRUD (4 verbos HTTP).
- Relacionamento **1:N** entre **Categorias** e **Livros**.
- Relacionamento **N:M** entre **Livros** e **Utilizadores**.
- **Documentação da API** em **OpenAPI 3.0**.
- Integração com **React-Admin** para gestão do backoffice.
- **Configuração do ambiente com Docker** (multi-container).

## Tecnologias Utilizadas
- **LoopBack4**: Framework Node.js para desenvolvimento da API RESTful.
- **React-Admin**: Biblioteca React para criação do painel administrativo.
- **MySQL**: Sistema de gestão de bases de dados.
- **Docker**: Para contentorização e gestão de ambientes de desenvolvimento.

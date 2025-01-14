# Configuração do Docker e Instruções de Execução

## Estrutura do Projeto
CopyM3-Biblioteca/
├── biblioteca-api/
│   └── Dockerfile
├── biblioteca-admin/
│   └── Dockerfile
├── docker-compose.yml
└── README.md

# Arquivos de Configuração
biblioteca-api/Dockerfile
dockerfileCopyFROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start"]

biblioteca-admin/Dockerfile
dockerfileCopyFROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV PORT=3001

EXPOSE ${PORT}

CMD ["npm", "start"]
docker-compose.yml
yamlCopyversion: '3'

services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: biblioteca
      MYSQL_USER: biblioteca
      MYSQL_PASSWORD: biblioteca123
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  api:
    image: a045580/biblioteca-api-2
    depends_on:
      - mysql
    environment:
      - DB_HOST=mysql
      - DB_PORT=3306
      - DB_USER=biblioteca
      - DB_PASSWORD=biblioteca123
      - DB_DATABASE=biblioteca
    ports:
      - "3000:3000"

  admin:
    image: a045580/biblioteca-admin-2
    depends_on:
      - api
    ports:
      - "3001:3001"

volumes:
  mysql_data:
Comandos Docker
Construção das Imagens
bashCopy# Na pasta biblioteca-api
docker build -t a045580/biblioteca-api-2 .

# Na pasta biblioteca-admin
docker build -t a045580/biblioteca-admin-2 .
Push das Imagens para o Docker Hub
bashCopy# Login no Docker Hub
docker login

# Push das imagens
docker push a045580/biblioteca-api-2
docker push a045580/biblioteca-admin-2
Gerenciamento dos Containers
Iniciar todos os serviços
bashCopydocker-compose up -d
Verificar status dos containers
bashCopydocker-compose ps
Visualizar logs
bashCopy# Todos os serviços
docker-compose logs -f

# Serviço específico
docker-compose logs -f api
docker-compose logs -f admin
docker-compose logs -f mysql
Reiniciar serviços
bashCopy# Reiniciar tudo
docker-compose restart

# Reiniciar serviços específicos
docker-compose restart api
docker-compose restart admin
docker-compose restart mysql
Parar todos os serviços
bashCopydocker-compose down
Acessando as Aplicações
Após iniciar os containers, você pode acessar:

Interface Administrativa: http://localhost:3001
API REST: http://localhost:3000
Swagger/API Explorer: http://localhost:3000/explorer
MySQL: localhost:3306

Solução de Problemas
Problema 1: Erro de conexão com o MySQL
Se a API não conseguir conectar ao MySQL, você pode:
bashCopy# Verificar logs do MySQL
docker-compose logs mysql

# Reiniciar o container do MySQL
docker-compose restart mysql
Problema 2: Admin não carrega
Se a interface administrativa não carregar:
bashCopy# Verificar logs do Admin
docker-compose logs admin

# Reconstruir e reiniciar o container
docker-compose up -d --build admin
Problema 3: API não responde
Se a API não estiver respondendo:
bashCopy# Verificar logs da API
docker-compose logs api

# Reconstruir e reiniciar o container
docker-compose up -d --build api


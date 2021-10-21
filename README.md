# Student App

Um projeto para gerenciar estudantes, onde é possível incluir e buscar pelos seus respectivos campos. O requisitos era que fosse desenvolvido uma api com GraphQL e um front utilizando ReactJS.

## Rodando o projeto

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Docker](https://www.java.com/pt-BR/)

### Clonando o projeto

Clone o projeto

```bash
  git clone https://github.com/mauriciofragajr/student-application.git
```

Vá até o diretório

```bash
  cd student-application
```

Copie o arquivo .env.example e crie o seu .env

```bash
  cp .env.example .env
```
Separei os ambientes em dois docker-compose. Onde o de desenvolvimento permite um recarregamento automático em toda a alteração do código, enquanto o de produção está otimizado e pronto para levar a um ambiente produtivo.

#### Executando em produção

Inicie os serviços com o docker-compose.
Rode com o o parâmetro -d para que seja executado em segundo plano, ou sem ele para ver os logs dos containers.

```bash
  docker-compose up -d
```

Se tudo estiver correto o webapp estará rodando na porta 8080 do [localhost:8080](http://localhost:8080)

#### Executando em desenvolvimento

Executando o comando a seguir você levanta os containers utilizando o modo desenvolvimento. Você conseguirá os logs em tempo real conforme for alterando o código.

```bash
  docker-compose -f docker-compose.development.yml up
```

Se tudo estiver correto o webapp estará rodando na porta 8080 do [localhost:8080](http://localhost:8080)

## Testes automatizados

Para executar os testes unitários da api basta ir até a pasta

```bash
  cd api
```

E executar o comando

```bash
  npm run test
```

## 🛠 Tecnologias
As seguintes tecnologias foram usadas na construção do projeto:

- [Nest](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [React](https://pt-br.reactjs.org/)

## Autor
Jose Mauricio

[![Linkedin Badge](https://img.shields.io/badge/-Mauricio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/mauriciofragajr/) 
[![Gmail Badge](https://img.shields.io/badge/-mauriciofragajr@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mauriciofragajr@gmail.com)](mailto:mauriciofragajr@gmail.com)
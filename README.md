# Student App

Um projeto para gerenciar estudantes, onde é possível incluir e buscar pelos seus respectivos campos.



## Rodando localmente

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Docker](https://www.java.com/pt-BR/)

### Subindo os serviços

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

Inicie os serviços com o docker-compose

```bash
  docker-compose up -d
```

Se tudo estiver correto o webapp estará rodando na porta 8080 do [localhost:8080](http://localhost:8080).
O playground do graphql está ativado por default, então basta acessar [http://localhost:3000/graphql](http://localhost:3000/graphql)

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
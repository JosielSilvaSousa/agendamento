
## Índice
1. [Visão Geral do Projeto](#link1)
2. [Linguagens](#link2)
3. [URL Swagger](#link3)

---


## <a id="link1" />Visão Geral do Projeto

Api criada para cadastrar pacientes e agendar consultas.

## <a id="link2" />Linguagens
<p>
    <img src="https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript">
    <img src="https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript">
</p>

## <a id="link3" />Swagger
```sh 
localhost:3000/api 
```


# Comandos de execução

Para executar o servidor de desenvolvimento para seu APP, use:

# Requisitos obrigaórios
## Nodejs instalado
## docker instalado
## nestjs

```sh executando o projeto local

npm i -g @nestjs/cli
npm install 
npm run start:dev(necessario criar o BD antes usando o comando o docker-compose)


```sh docker-compose
docker compose -f "docker-compose.yaml" up -d --build 
```

```sh iniciando a aplicação
docker-compose-up 
```

Para criar um build:

```sh
npm run build
```

## Test

```sh
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

gerando documentação pelo projeto em Playgroud:

```sh
npx @compodoc/compodoc -p tsconfig.json -s
```

# Contribuintes
**[Josiel]()**



# Links

[Nestjs](https://docs.nestjs.com/)
[Typeorm](https://orkhan.gitbook.io/typeorm/docs)
[Docker](https://docs.docker.com/desktop/install/windows-install/)

Learn more:



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Curso Básico Cypress.io com Percy.io

Repositório do curso básico de testes de regressão visual com Cypress e Percy da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).

## Pré-Requisitos
Para instalar as dependências do projeto e instalar os testes automatizados é necessário que o [Node.js](https://nodejs.org/en) e o [NPM](https://www.npmjs.com) estejam instalados em seu computador

> Para este projeto as seguintes versões foram utilizadas (`node v18.12.1` e `npm 8.19.2`)

## Instalação
Após clonar o projeto, acesse o diretório do mesmo e execute o comando `npm install` para instalar as dependências de desenvolvimento.

## Exportação do Token
É necessário exportar o token do projeto criado no Percy.io como uma variável de ambiente (disponível no _dashboard_ do percy). Veja os exemplos abaixo para sistemas operacionais Windows e Unix (Mac e Linux)

```
# Windows
$ set PERCY_TOKEN=<your token here>

# Unix
$ export PERCY_TOKEN=<your token here>
```
> Fonte de apoio: https://docs.percy.io/docs/cypress

## Execução dos testes
Execute o comando `npm test` para rodar os testes em modo _headless_.


<br>

## Informações adicionais
Este projeto faz integração com   
[Github Actions](https://github.com/) possibilitando a integração contínua quando os testes forem executados   

[Slack](https://app.slack.com/) notificando o time a cada bateria de testes.

> Fonte de apoio: [Integração Percy + Github + Actions](https://dev.to/r0nunes/testes-de-regressao-visual-com-cypress-percy-ci-com-github-actions-8hm)

___

Um curso da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).

# FutureBank

## Índice

- [Descrição do projeto](#descrição)
- [Instalação do frontend](#instalação-do-frontend)
- [Instalação da API](https://github.com/guilhermeandradee/future-bank-api)
- [Rotas](#rotas)
- [Conclusão](#agradecimento)

## Descrição

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Spring Data](https://img.shields.io/badge/Spring%20Data-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-b)




É um webservice baseado na arquitetura de microsservices construído com SpringBoot e React que simula um banco virtual com operações de transferência monetária entre usuários, saque e depósito. 

Existe também o sistema de authenticação de usuários contendo campo cpf, email e senha para permissão de efetuar tais operações entre as contas.

Ao se cadastrar pela primera vez, o usuário recebe uma mensagem de boas vindas no email através do serviço de mensageria RabbitMQ.

## Como funciona

Ao criar uma conta a API principal da aplicação cadastra o cpf, senha, email e valor nulo em um banco de dados relacional. Logo em seguida envia uma requisição para a API de mensageria que enviará a mensagem ao determinado email.

## Instalação do frontend

### Começe clonando o repositório da api da seguinte maneira:

```
git clone https://github.com/guilhermeandradee/future-bank.git
```


### Execute o comando de instalação de dependências do NPM:


```
npm install
```

### Depois o comando para rodar a aplicação:

```
npm run dev
```

### Ou se estiver utilizando Gradle:

```
yarn install
```
### E depois:
```
yarn dev
```


## Rotas

A aplicação rodará na rota: `http://localhost:5173`

|Requisições GET    |Tipo |Descrição                                              |
|-------------------|-----|-------------------------------------------------------|
|`/` |[`GET`](#get-get-all)     |Retorna a página de criação de contas.|
|`/login`| [`GET`](#get-get-all) |Retorna a página para login||
|`/home`   |  [`GET`](#get-get-all)    |Retorna a página home contendo informações das contas cadastradas no sistema, mostrando cpf, email e saldo.                         |
|`/account/:cpf` |[`GET`](#get-get-all)     |Retorna a página de operações para determinado cpf.                      |
|`/deposit`   |  [`GET`](#get-get-all)   |Retorna página de depósito.|
|`/withdraw`   |  [`GET`](#get-get-all)   |Retorna página para sacar um valor.                         |
|`/transfer`   |  [`GET`](#get-get-all)   |Retorna uma página para transferir saldo de uma conta para outra.                         |




## Agradecimento

 Aproveite todas as funcionalidades e retorne um feedback para fazer um dev júnior feliz! 🌟
<h1 align="center">
  Alugue meu carro - API
</h1>

Backend da aplicação Alugue meu carro - Uma aplicação que o usuário poderá tanto ser um locador quanto locatário.

## **Endpoints**

Esta Api tem 8 endpoints, 4 para os usuários e 4 para os carros, nestes endpoints será possível cadastrar usuário, carros e etc..

A url base da Api é : https://alugue-meu-carro.herokuapp.com

<h1 align="center">
  Rotas Usuários
</h1>

## Rotas que não precisam de autorização.

<h2 align="center">
  Cadastrar Usuário
</h2>

`POST /register - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345",
  "name": "Vilson",
  "telefone": "51888941359"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /register - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345",
  "name": "Vilson",
  "telefone": "51888941359",
  "imagem": "",
  "carrosCadastrados": [],
  "carrosAlugados": []
}
```

<h2 align ='center'> Possíveis erros </h2>
Caso o usuário tente criar uma conta com um email já existente, a resposta da requisição será assim:

`POST /register - FORMATO DA RESPOSTA - STATUS 400`

```json
{
    "Email already exists"
}
```

<hr>

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "vilson@gmail.com",
  "password": "12345"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxvQGdtYWlsLmNvbSIsImlhdCI6MTY2MTk4MzE4MiwiZXhwIjoxNjYxOTg2NzgyLCJzdWIiOiIxIn0.A7baMOUZMDpzQbvHDq7ix3bUbNfOBCqIiXFa0LcOZzA",
  "user": {
    "email": "vilson@gmail.com",
    "name": "Vilson",
    "telefone": "51888941359",
    "imagem": "",
    "carrosCadastrados": [],
    "carrosAlugados": [],
    "id": 1
  }
}
```

## Rotas que precisam de autorização.


<h2 align = "center"> Atualizar Usuário </h2>

`PATCH /users/id - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "vilson@gmail.com",
  "name": "Vilson",
  "telefone": "51888941359",
  "imagem": ""
}
```

<h2 align = "center"> Deletar Usuário </h2>

`DELETE /users/id - FORMATO DA REQUISIÇÃO`

```json
Não é necessário um corpo na requisição.
```

<h1 align="center">
  Rotas Carros
</h1>

<h2 align = "center"> Listar Carros </h2>

`GET /cars - FORMATO DA REQUISIÇÃO`

```json
  Irá receber como resposta um array de objetos com os carros cadastrados.
```

## Rotas que precisam de autorização.

<hr>

<h2 align = "center"> Cadastrar Carro </h2>

`POST /cars - FORMATO DA REQUISIÇÃO`

```json
{
  "período": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renafdfdult",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "É um carro muito seguro, espaçoso, bem economico.",
  "userId": 2
}
```

`POST /cars - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "período": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renafdfdult",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "É um carro muito seguro, espaçoso, bem economico.",
  "userId": 2,
  "alugado": false,
  "id": 6
}
```

O userId se refere ao id do usuário, é necessario passar o id do usuário para poder vincular o carro a ele.

Se o userId não for passado de forma correta irá retornar este erro.

```json
{
  "Private resource creation: request body must have a reference to the owner id"
}
```

<h2 align = "center"> Atualizar Carro </h2>

`PATCH /cars/id - FORMATO DA REQUISIÇÃO`

O id passado na requisição é o id do carro.

O Usuário poderá atualizar qualquer um desses valores.

```json
{
  "período": ["31/08/2022", "09/09/2022"],
  "localizacao": "Rio de Janeiro",
  "marca": "Renafdfdult",
  "modelo": "Logan",
  "ano": 2019,
  "valor": 70,
  "imagem": "https://revistacarro.com.br/wp-content/uploads/2019/11/Renault-Logan-Iconic-CVT-1.jpg",
  "descricao": "É um carro muito seguro, espaçoso, bem economico."
}
```

<h2 align = "center"> Excluir Carro </h2>

`DELETE /cars/id - FORMATO DA REQUISIÇÃO`

O id passado na requisição é o id do carro.

```json
Não é necessário um corpo na requisição
```

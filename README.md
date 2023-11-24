# processo para rodar o projeto

1. rodar o comando `npm i`
2. certificar-se de que tenha um banco mysql vazio.
3. certificar-se de que as informações do seu banco estão condizentes com as informações do arquivo .env
4. rodar o comando `node ace migration:run` (esse comando irá criar as entidades do banco de dados)
5. rodar o comando `node ace serve --watch`
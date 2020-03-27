const express = require('express'); //importando express para dentro da variavel express
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
/*
Métodos HTTP:
GET: Buscar/listar uma informação no back-en
POST: Cirar uma informação no back-end
DELETE: Deletar um informação no back-end

*/

/*
Tipos de Parâmetro

Query Params: Parâmetros nomeados envaidos na rota após "?" (filtros, paginação)
Route Params: Parâmetros utlizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc.
*/

/* 
Duas formas de implementar o bd em Node JS
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/


app.listen(3333);
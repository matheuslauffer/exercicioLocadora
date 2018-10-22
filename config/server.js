// Arquivo de configuração da aplicação, onde são carregadas todas as dependencias.
// Dependencias utilizadas
var express = require('express');
var consign = require('consign');//Utilizado para fazer o carregamento prévio dos arquivos da aplicação
var bodyParser = require('body-parser');//utilizado para facilitar a manipulação dos dados enviados no corpo da requisição
var session = require('express-session');//utilizado para criar a sessão

var app = express();
//configuração do bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//configuração do express session
app.use(session({
    secret: 'teste4all',
    resave: false,
    saveUninitialized: false
}));

//configuração da pasta de referência da aplicação
app.use(express.static('../'));
//configuração do cabeçalho de permissões para requisições
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader("Access-Control-Allow-Credentials", true);
  
      next();
    });

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/controllers')
    .then('app/DAO')
.into(app);

module.exports = app;
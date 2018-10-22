//arquivo de configuração com o banco de dados
function dbConnection(){
  var mysql = require('mysql');

  var conMySQL = mysql.createConnection({
      host : 'localhost',
      port: '3306',
      user : 'root',
      password : 'password',
      database : 'teste4all'
  });

  return conMySQL;
}

module.exports = function(){
  return dbConnection;
}
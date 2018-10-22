//arquivo que faz o start da aplicação, importa o arquivo de configuração.

var app = require('./config/server.js');

var port = 8080;
app.listen(port, function(){
    console.log('Servidor HTTP esta escutando na porta ' + port);
});

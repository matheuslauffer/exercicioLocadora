//rotas de manipulação de usuários. Todas as rotas invocam um controller
module.exports = function(application){
//rota de cadastro de novo usuário. Recebe um JSON no formato{'nome':'nome','email':'email,'senha':'senha'}, via post e envia para o contrller de cadastro
    application.post('/cadastrar', function(req,res){
        application.app.controllers.users.cadastrarUsuario(application, req, res);
    });
//rota de login. Recebe um JSON no fomato {'email':'senha'}, via post e envia para o controller de login
    application.post('/logar', function(req,res){
        application.app.controllers.users.logar(application, req, res);
    });
//rota de logout. Não recebe parâmetros de entrada
    application.post('/logout', function(req, res){
        req.session.destroy();
        res.send(req.session);
    });
}
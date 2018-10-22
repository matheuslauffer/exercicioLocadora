module.exports = function(application){
    application.post('/cadastrar', function(req,res){
        application.app.controllers.users.cadastrarUsuario(application, req, res);
    });

    application.post('/logar', function(req,res){
        application.app.controllers.users.logar(application, req, res);
    });

    application.post('/logout', function(req, res){
        req.session.destroy();
        res.send(req.session);
    });
}
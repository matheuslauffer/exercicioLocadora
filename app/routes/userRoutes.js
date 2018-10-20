module.exports = function(application){
    application.post('/cadastrar', function(req,res){
        application.app.controllers.users.cadastrarUsuario(application, req, res);
    })
}
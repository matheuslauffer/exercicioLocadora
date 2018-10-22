module.exports = function(application){
    application.get('/disponiveis', function(req, res){
        application.app.controllers.moovies.disponiveis(application, res);
    });

    application.get('/buscaPorNome/:nome', function(req, res){
        application.app.controllers.moovies.buscaPorNome(application, req, res);
    });

    application.get('/locacao/:idFilme', function(req, res){
        application.app.controllers.moovies.locar(application, req, res);
    });

    application.get('/devolucao/:idCopia', function(req, res){
        application.app.controllers.moovies.devolver(application, req, res);
    });
}
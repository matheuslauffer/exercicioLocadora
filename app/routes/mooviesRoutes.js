//Rotas manipuladoras dos filmes. Todas elas redirecionam para o controller
module.exports = function(application){
//Rota de busca por disponíveis. Chamada via get, não recebe parâmetros
    application.get('/disponiveis', function(req, res){
        application.app.controllers.moovies.disponiveis(application, res);
    });
//Rota de busca de filme por nome. Via GET recebe uma string como parâmetro
    application.get('/buscaPorNome/:nome', function(req, res){
        application.app.controllers.moovies.buscaPorNome(application, req, res);
    });
//Rota de locação de filme. Via GET recebe o Id do filme como parâmetro
    application.get('/locacao/:idFilme', function(req, res){
        application.app.controllers.moovies.locar(application, req, res);
    });
//Rota de devoluçao de filme. Via GET recebe o Id da cópia locada como parâmetro
    application.get('/devolucao/:idCopia', function(req, res){
        application.app.controllers.moovies.devolver(application, req, res);
    });
}
//controller que aciona o método de busca por filmes disponíveis
module.exports.disponiveis = function(application, res){
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.disponiveis(res);
}
//controller que aciona o método de busca de filmes por nome
module.exports.buscaPorNome = function(application, req, res){
    var titulo = req.params.nome;
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.buscaPorNome(res, titulo);
}
//controller que aciona o método de locação de filme
module.exports.locar = function(application, req, res){
    var idFilme = req.params.idFilme;
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.locar(res, idFilme);
}
//controller que aciona o método de devolução de filme
module.exports.devolver = function(application, req, res){
    var idCopia = req.params.idCopia;
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.devolver(res, idCopia);
}
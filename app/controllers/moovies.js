module.exports.disponiveis = function(application, res){
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.disponiveis(res);
}

module.exports.buscaPorNome = function(application, req, res){
    var titulo = req.params.nome;
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.buscaPorNome(res, titulo);
}

module.exports.locar = function(application, req, res){
    var idFilme = req.params.idFilme;
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.locar(res, idFilme);
}

module.exports.devolver = function(application, req, res){
    var idCopia = req.params.idCopia;
    var connectBD = new application.config.dbConnection();
    var DAO = new application.app.DAO.MooviesDAO(connectBD);
    DAO.devolver(res, idCopia);
}
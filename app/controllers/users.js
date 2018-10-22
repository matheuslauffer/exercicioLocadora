//controller que aciona o método de criação do usuário.
module.exports.cadastrarUsuario = function(application, req, res){
    var connectBD = new application.config.dbConnection();
    var user = req.body;
    var DAO = new application.app.DAO.UserDAO(connectBD);
    DAO.createUser(user, res);
}
//controller que aciona o método de autenticação do usuário
module.exports.logar = function(application, req, res){
    var connectBD = new application.config.dbConnection();
    var user = req.body;
    var DAO = new application.app.DAO.UserDAO(connectBD);
    DAO.autenticaUsuario(user, req, res);
}
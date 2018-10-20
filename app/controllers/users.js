module.exports.cadastrarUsuario = function(application, req, res){
    var connectBD = new application.config.dbConnection();
    var user = req.body;
    var DAO = new application.app.DAO.UserDAO(connectBD);
    var insert = DAO.createUser(user, res);
}
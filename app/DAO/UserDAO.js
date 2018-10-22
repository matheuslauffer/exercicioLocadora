function UserDAO(connection){
    this._connection = connection;
}

UserDAO.prototype.createUser = function(user, res){
    var nome = this._connection.escape(user.nome);
    var email = this._connection.escape(user.email);
    var senha = this._connection.escape(user.senha);
    var sql = 'INSERT INTO cliente(Nome, Email, Senha) VALUES ('+nome+','+email+','+senha+')'; 
    this._connection.query(sql, function(err, result){
        if(err) 
            throw err;
        else{
            res.status(200).json(result);
        }
    });
}

UserDAO.prototype.autenticaUsuario = function(user, req, res){
    var email = this._connection.escape(user.email);
    var senha = this._connection.escape(user.senha);
    var sql = 'SELECT * FROM cliente WHERE email = '+email+' AND senha = '+senha; 
    this._connection.query(sql, function(err, result){
        if(err) 
            throw err;
        else{
            req.session.logado = true;
            req.session.nome = result[0].Nome;
            req.session.email = result[0].Email;
            console.log(req.session);
            res.status(200).json(result);
        }
    });
}

module.exports = function(){
    return UserDAO;
}
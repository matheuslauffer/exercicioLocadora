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

module.exports = function(){
    return UserDAO;
}
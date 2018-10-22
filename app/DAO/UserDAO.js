//Objeto de conexão do usuário com o banco de dados
function UserDAO(connection){
    this._connection = connection;
}

//método criador de usuário.
//envia como resposta o status da inserção
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

//método de login do usuário
//seta a sessão para autenticação de usuário
//envia como resposta o status da busca
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
            req.session.id = result[0].idCliente;
            console.log(req.session);
            res.status(200).json(result);
        }
    });
}

module.exports = function(){
    return UserDAO;
}
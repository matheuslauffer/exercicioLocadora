function MooviesDAO(connection){
    this._connection = connection;
}

MooviesDAO.prototype.disponiveis = function(res){
    var sql = 'SELECT filme.Titulo FROM filme INNER JOIN copia on filme.idFilme = copia.Filme WHERE copia.Disponivel = true group by Titulo';
    this._connection.query(sql, function(err, result){
        if(err) 
            console.log(err);
        else{
            var filmes = {};
            var i = 0;
            result.forEach(element => {
                filmes[i] = element.Titulo;
                i++;
            });
            res.status(200).json(filmes);
        }
    });
}

MooviesDAO.prototype.buscaPorNome = function(res, filme){
    var titulo = this._connection.escape(filme.toUpperCase());
    var sql = 'SELECT Titulo, Diretor FROM filme WHERE Titulo = ' + titulo;
    this._connection.query(sql, function(err, result){
        if(err)
            console.log(err);
        else
            res.status(200).json(result);
    });
}

MooviesDAO.prototype.locar = function(res, idFilme){
    var id = this._connection.escape(idFilme);
    var sql = 'SELECT * FROM copia WHERE Filme = ' + id + 'AND Disponivel = true LIMIT 1';
    this._connection.query(sql, function(err, result){
        if(err)
            console.log(err);
        else{
            let idCopia = this._connection.escape(result[0].idCopia);
            let sql = 'UPDATE copia SET Disponivel = false WHERE idCopia = '+idCopia;
            this._connection.query(sql, function(err, result){
                if(err)
                    console.log(err);
                else{
                    res.status(200).json(result);
                }
            });
        }
    });
}

MooviesDAO.prototype.devolver = function(res, idCopia){
    var copia = this._connection.escape(idCopia);
    var sql = 'UPDATE copia SET Disponivel = true WHERE idCopia = ' + copia;
    this._connection.query(sql, function(err, result){
        if(err)
            console.log(err);
        else
            res.status(200).json(result);
    });
}

module.exports = function(){
    return MooviesDAO;
}
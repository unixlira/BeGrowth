function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
            
            mongoclient.close();
        });
    });
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    var ObjectId = require('mongodb').ObjectId;
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.find(usuario).toArray( function(err, result){
                                
                if(result[0] != undefined){

                    req.session.autorizado = true;
                    req.session.id_user = ObjectId(result[0]._id).toString();
                    req.session.nome = result[0].nome;
                    req.session.email = result[0].email;
                    req.session.tipo = result[0].tipo;

                }

                if(req.session.autorizado && req.session.tipo == "1"){
                    res.redirect('produtos');
                } else if(req.session.autorizado && req.session.tipo == "2"){
                    res.redirect('coletas');
                }else{
                    res.render('login', {validacao: {}});
                }

                mongoclient.close();
            });
        });
    });

}


module.exports = function(){
    return UsuariosDAO;
}
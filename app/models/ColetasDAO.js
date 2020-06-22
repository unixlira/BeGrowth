function ColetasDAO(connection){
    this._connection = connection();
}

ColetasDAO.prototype.addEntrega = function(req,res,produtos, nome,id_user){
    console.log(produtos);
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("coletas", function(err, collection){
            collection.insert(produtos);
            
            mongoclient.close();
        });
    });
}

ColetasDAO.prototype.listarProdutos = function(res,req,nome,erros){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.find().toArray( function(err, result){
            
                    res.render('coletas', {nome: nome, produtos: result});

                mongoclient.close();
            });
        });
    });
}

ColetasDAO.prototype.excluirProduto = function(req,res,id){
    var ObjectId = require('mongodb').ObjectId;
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.deleteOne({ _id: ObjectId(id) });
            
            mongoclient.close();
        });
    });
}


module.exports = function(){
    return ColetasDAO;
}
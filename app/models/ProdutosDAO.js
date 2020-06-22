function ProdutosDAO(connection){
    this._connection = connection();
}

ProdutosDAO.prototype.inserirProduto = function(produto){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.insert(produto);
            
            mongoclient.close();
        });
    });
}

ProdutosDAO.prototype.listarProdutos = function(res, nome, id_user){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.find({id_user: id_user}).toArray( function(err, result){

                res.render('listagemProdutos', {nome: nome, produtos: result});

                mongoclient.close();
            });
        });
    });

}

ProdutosDAO.prototype.listaProduto = function(res,req,id,nome,erros){
    var ObjectId = require('mongodb').ObjectId;
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.find({ _id: ObjectId(id) }).toArray( function(err, result){

                res.render('atualizarProduto', {nome: nome, produto: result[0], validacao: erros});

                mongoclient.close();
            });
        });
    });
}

ProdutosDAO.prototype.atualizarProduto = function(req,res,id,produto){
    var ObjectId = require('mongodb').ObjectId;
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.update(
                { _id: ObjectId(id) },
                { $set: {nomeProduto: produto.nomeProduto, dataValidade: produto.dataValidade, localColeta: produto.localColeta}}
            );
            
            mongoclient.close();
        });
    });
}



ProdutosDAO.prototype.excluirProduto = function(req,res,id){
    var ObjectId = require('mongodb').ObjectId;
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("produtos", function(err, collection){
            collection.deleteOne({ _id: ObjectId(id) });
            
            mongoclient.close();
        });
    });
}


module.exports = function(){
    return ProdutosDAO;
}
module.exports.produtos = function(application, req, res){
    if(req.session.autorizado !== true){
        res.render('notpermission');
        return;
    }
    var ObjectId = require('mongodb').ObjectId;
    var id_user = ObjectId(req.session.id_user).toString();
    res.render('produtos',  {nome: req.session.nome, id: id_user, validacao: {}});
    
}

module.exports.sair = function(application, req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    });
}


module.exports.cadastrarProduto = function(application, req, res){
    var ObjectId = require('mongodb').ObjectId;
    var dadosForm = req.body;
    var nome = req.session.nome;
    var id_user = ObjectId(req.session.id_user).toString();
    
    req.assert('nomeProduto', 'Nome não pode ser vazio!').notEmpty();
    req.assert('dataValidade', 'Data Validade não pode ser vazio!').notEmpty();
    req.assert('localColeta', 'Local de Coleta não pode ser vazio!').notEmpty();

    var erros = req.validationErrors();
    
    if(erros){
        res.render('produtos', {validacao: erros, dadosForm: dadosForm, nome: nome, id: id_user});
        return;
    }

    var connection = application.config.dbConnection;
    var ProdutosDAO = new application.app.models.ProdutosDAO(connection);

    ProdutosDAO.inserirProduto(dadosForm);

    res.redirect('/listagem-produtos');

}

module.exports.listagem = function(application, req, res){
    var ObjectId = require('mongodb').ObjectId;
    var nome = req.session.nome;
    var id_user = ObjectId(req.session.id_user).toString();
    var connection = application.config.dbConnection;
    var ProdutosDAO = new application.app.models.ProdutosDAO(connection);

    ProdutosDAO.listarProdutos(res, nome, id_user);    
}

module.exports.editarProduto = function(application, req, res){
    
    var id  = req.params.id;
    var nome = req.session.nome;
    var erros = req.validationErrors();
    var connection = application.config.dbConnection;
    var ProdutosDAO = new application.app.models.ProdutosDAO(connection);

    ProdutosDAO.listaProduto(res,req,id,nome,erros);

}

module.exports.atualizar = function(application, req, res){

    var id  = req.params.id;
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ProdutosDAO = new application.app.models.ProdutosDAO(connection);

    ProdutosDAO.atualizarProduto(req,res,id, dadosForm);
    res.redirect('/listagem-produtos');
}

module.exports.excluir = function(application, req, res){
    
    var id  = req.params.id;
    var connection = application.config.dbConnection;
    var ProdutosDAO = new application.app.models.ProdutosDAO(connection);

    ProdutosDAO.excluirProduto(req,res,id);
    res.redirect('/listagem-produtos');
}
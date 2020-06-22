const ColetasDAO = require("../models/ColetasDAO");

module.exports.coletas = function(application, req, res){
    if(req.session.autorizado !== true){
        res.render('notpermission');
        return;
    }

    var id  = req.params.id;
    var nome = req.session.nome;
    var erros = req.validationErrors();
    var connection = application.config.dbConnection;
    var ColetasDAO = new application.app.models.ColetasDAO(connection);

    ColetasDAO.listarProdutos(res,req,nome,erros);    
}


module.exports.addEntrega = function(application, req, res, data){

    console.log(data)

}

module.exports.sair = function(application, req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    });
}
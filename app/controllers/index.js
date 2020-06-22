module.exports.index = function(application, req, res){
    res.render('login' , {validacao: {}});
}

module.exports.autenticar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('email', "Preencha o Email por favor");
    req.assert('senha', "Preencha a Senha por favor");

    var erros = req.validationErrors();

    if(erros){
        res.render('login', {validacao: erros});
        return;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, req, res);

    //res.send('Tudo ok para sessão');
}
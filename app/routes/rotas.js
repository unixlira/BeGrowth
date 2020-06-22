module.exports = function(application){
    application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.post('/autenticar', function(req, res){
		application.app.controllers.index.autenticar(application, req, res);
    });
    
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.post('/cadastrar', function(req, res){
		application.app.controllers.cadastro.cadastrar(application, req, res);
    });
    
    application.get('/coletas', function(req, res){
		application.app.controllers.coletas.coletas(application, req, res);
	});

	application.get('/sair', function(req, res){
		application.app.controllers.coletas.sair(application, req, res);
    });
    
    application.get('/produtos', function(req, res){
		application.app.controllers.produtos.produtos(application, req, res);
	});

	application.post('/cadastrar-produto', function(req, res){
		application.app.controllers.produtos.cadastrarProduto(application, req, res);
	});

	application.get('/listagem-produtos', function(req, res){
		application.app.controllers.produtos.listagem(application, req, res);
	});

	application.get('/editar-produto/:id', function(req, res){
		application.app.controllers.produtos.editarProduto(application, req, res);
	});

	application.post('/atualizar/:id', function(req, res){
		application.app.controllers.produtos.atualizar(application, req, res);
	});

	application.get('/excluir-produto/:id', function(req, res){
		application.app.controllers.produtos.excluir(application, req, res);
    });
    
    application.get('/coletas', function(req, res){
		application.app.controllers.coletas.coletas(application, req, res);
	});

	application.post('/addEntrega', function(req, res){
		application.app.controllers.coletas.addEntrega(application, req, res, data);
	});

}
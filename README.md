App Be Growth
==========

Sistem de Cadastro em NodeJS engine view ejs modelo MVC, e banco de dados Mongo DB.
O sistema tem a inteligência de cadastrar 2 tipos de usuários: empresas e entregadores.
Cadastro de Produtos.
Cadastro de Coleta.


Instalação
============
É necessário ter o node instalado no servidor.
Fazer o clone no diretório completo

```
git clone https://github.com/unixlira/BeGrowth.git
```
Rodar o comando
================

```
npm install
```
Instalação Banco de Dados

```
O banco de dados e as collections será criada automaticamente com os primeiros cadastros por conta do mongoose.
```


Como Usar
=====

Na tela de Login acesse a tela de cadastro de usuario e cadastre-se.
Após feito faça o login.
Tipo Empresa será redirecionado para a página de cadastro de produtos, depois de cadastrar produtos
irá redirecionar para página de listagem de produtos, onde poderá editar e excluir o produto.
Tipo Entregador será redirecionado para página de listagem de produtos disponiveis, e após selecionado no checkbox e coletar, 
irá redirecionar para listagem de coletas(Não terminei rs).


TODO
====

* Add new Features

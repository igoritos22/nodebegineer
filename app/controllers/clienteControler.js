var clienteModel = require('../models/clinetModel')();

module.exports.index = function(req,res){
    clienteModel.all(function(erro, resultado){
        res.render('site/home', {clientes:resultado});

        console.log(resultado);
    });
};

module.exports.store = function(){

    
};

module.exports.show = function(req, res){
    clienteModel.find(req.params.id,function(erro, resultado){

        if (resultado[0] && !erro ){
            res.render('site/detalhe', {cliente:resultado[0]});
        }
        else{
            console.log("Não existe esse cliente no banco")
            res.redirect('/');
        }
        
    });
};
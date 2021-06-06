var clienteController = require('../controllers/clienteControler');

module.exports = function(app){

    app.get('/contato', function(req,res){
        res.render('site/contato');
    });

    app.get('/', function(req,res){

        clienteController.index(req,res);

    });

    app.get('/detalhe/:id', function(req,res){

        console.log(req.params.id);
        clienteController.show(req,res);

    });

    app.get('/maps', function(req,res){
        res.render('site/maps');
    });
};
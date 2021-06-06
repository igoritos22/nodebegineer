//console.log("ola node")
//require é como o node importa funcoes, libraries, modules
var express = require('express');

var meuModulo = require('./modulo_externo');
console.log(meuModulo);

var app = express();
app.set('view engine', 'ejs');

app.get('/contato', function(req,res){
    res.render('site/contato');
});

app.get('/', function(req,res){
    res.render('site/home');
});

app.get('/maps', function(req,res){
    res.render('site/maps');
});

app.listen(3000, function(){
    console.log("localhost:3000");
});
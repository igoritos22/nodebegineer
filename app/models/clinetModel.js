var db = require('../../config/db')

module.exports = function (){

    this.all = function(){

        var conn = db();
        
        conn.query('select * from Persons',function(erro,resultado){
            console.log(resultado);
        });

        return [{
            nome: "Igor", 
            email: "igoruser@bol.com"
        }];
    };

    return this ;
};
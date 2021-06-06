var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'B8sZFG7Hn@',
    database: 'nodelab_db'
});


module.exports = function (){

    
    this.all = function(){

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
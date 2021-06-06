var db = require('../../config/db')

module.exports = function (){

    this.all = function(retorno){
        var conn = db();
        return conn.query('select * from Persons',retorno);
    };

    this.find = function(id, retorno){
        var conn = db();
        return conn.query('select * from Persons where id = ?',id, retorno);
    };

    this.save = function(dados, retorno){
        var conn = db();
        return conn.query('INSERT INTO Persons set ?',dados, retorno);
    };

    return this ;
};
var mysql = require('mysql');

var conn = function (){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'B8sZFG7Hn@',
        database: 'nodelab_db'
    });
};


module.exports = conn;
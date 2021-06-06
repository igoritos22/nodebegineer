

module.exports = function(){
    var express = require('express');

    var app = express();
    app.set('view engine', 'ejs');

    app.set('views', './app/views');

    require('../app/routes/web')(app);

    app.listen(3000, function(){
        console.log("localhost:3000");
    });
};
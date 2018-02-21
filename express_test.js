
var express = require('express');
//var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');


var app = express();
var port = 3000;

//app.use(cookieParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}) );

// using http://127.0.0.1:3000/test/a/b
app.get('/test/:p1/:p2', function (req, res) {
    var mess = "<p>Exec test</p>";
    mess += "<p>val p1 = "+req.params.p1+"</p>";
    mess += "<p>val p2 = "+req.params.p2+"</p>";
    res.send(mess);
    
});
  
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

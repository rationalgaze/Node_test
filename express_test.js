
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var readline = require('readline');
var sql = require("./mysql_functions.js");
var mysql = require('mysql');

var app = express();
var port = 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// using http://127.0.0.1:3000/test/a/b
app.get('/test/:p1/:p2', function (req, res) {
    var mess = "<p>Exec test</p>";
    mess += "<p>val p1 = "+req.params.p1+"</p>";
    mess += "<p>val p2 = "+req.params.p2+"</p>";
    res.send(mess);    
});

var file = './myauth.log';
var output = "";

app.get('/write_log/', function (req, res) {

  var rl = readline.createInterface({
    input: fs.createReadStream(file),
  });
  output += "<h1>Écrire dans BD</h1>"; 

  rl.on('line', (line) => {
    var ip = line.substr(0,9);
    var date = line.substr(10,28);
    var stat = line.substr(39, 6);
    output += "<p>" + ip + " " + date + " " + stat + "</p>";
    sql.insert(ip,date,stat);
    console.log('Line : %s \n', output);
  });
  
  res.send(output);
});

app.get('/show_log/', function (req, res) {
  output += "<table border='1'><thead><th>id</th><th>ip</th><th>date</th><th>info</th></thead><tr>";

  var connection = null;
  
  connection = mysql.createConnection({
      host: "localhost",
      user: "username",
      password: "password",
      database: 'log_users'
  });

  connection.query("select * from log", (err, lst) => {
      connection.end();
      if (err) {
        throw err;
      }
      else {
        for (var i=0 ; i<lst.length ; i++) {
          output += "<td>"+lst[i].num+"</td><td>"+lst[i].ip+" </td><td>"+lst[i].date +" </td><td>"+lst[i].info+"</td></tr>";
        }
      }
  });

  res.send(output);
});

app.get('/add_log/', function (req, res) {
  var form = "<form method='post' action='/add_log/val'>";
  form += "<input type='text' placeholder='ip' name='ip'/>";
  form += "<input type='text' placeholder='date' name='date'/>";
  form += "<input type='text' placeholder='status' name='status'/>";
  form += "<input type='submit' value='Envoyer'/>";
  form += "</form>";
  res.send(form); 
});

app.get('/add_log/val:val', function (req, res) {
  var user_id = req.param('id');
  var ip = req.param('ip');
  var date = req.param('date');
  res.send(form); 
});

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

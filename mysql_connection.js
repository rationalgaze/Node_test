
var util = require('util');
var mysql = require('mysql');

module.exports = {
  exec,
}

function exec(sql,next) {
    var connection = null;
    
    connection = mysql.createConnection({
        host: "localhost",
        user: "username",
        password: "password",
        database: 'log_users'
    });

    connection.query(sql, function (err, res) {
        connection.end();
        if (err) {
          throw err;
        }
        else {
          next(res);
        }
    });
}




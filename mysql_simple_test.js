
var util = require('util');
var sql = require("./mysql_simple.js");

sql.exec("select * from essai",afficher);

function afficher(lst) {
    console.log("afficher");
    if (lst == null) {
        console.log("Erreur mysql");
    }
    else {
        for (var i=0 ; i<lst.length ; i++) {
            console.log("id = "+lst[i].id+" v1 = "+lst[i].v1+" v2 = "+lst[i].v2);
        }
    }
}


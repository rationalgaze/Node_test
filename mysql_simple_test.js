
var util = require('util');
var sql = require("./mysql_simple.js");

sql.exec("select * from t_livre",afficher);

function afficher(lst) {
    console.log("afficher");
    if (lst == null) {
        console.log("Erreur mysql");
    }
    else {
        for (var i=0 ; i<lst.length ; i++) {
            console.log("id = "+lst[i].idLivre+" v1 = "+lst[i].titre+" v2 = "+lst[i].auteur);
        }
    }
}


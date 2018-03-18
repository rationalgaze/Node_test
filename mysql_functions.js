
var util = require('util');
var sql = require("./mysql_connection.js");

module.exports = {
  afficher, insert,
}

function afficher() {
  return sql.exec("select * from log",afficher_res_select);
}

function insert(ip, date, status) {
  sql.exec("INSERT INTO log (ip, date, info) VALUES ('"+ip+"','"+date+"','"+status+"');", afficher_res);
}

function find_error(lst) {
  
}

// affichage de resultats des requetes SELECT
function afficher_res_select(lst) {
  console.log("afficher resultat de requete");

  if (lst == null) {
    console.log("Erreur mysql");
  }
  else {
    var res ='';
    for (var i=0 ; i<lst.length ; i++) {
      console.log("num_ligne = "+lst[i].num+" ip = "+lst[i].ip+" date = "+lst[i].date +" status = "+lst[i].info);
      res += lst[i].num + " " + lst[i].ip;
    }
    return res;
  }
}

// affichage de resultats des requetes INSERT
function afficher_res(lst) {
  console.log("afficher resultat de requete");
  if (lst == null) {
    console.log("Erreur mysql");
  }
  else {
    console.log("lignes inseré = ", lst.affectedRows);
  }
}
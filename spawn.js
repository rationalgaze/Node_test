

var spawn = require('child_process').spawn;     // lancement des processus
var proc = null;                                // processus en cours

var cmd = "/bin/echo" ;
var args = ["eee", "rrrr"];

proc = spawn(cmd,args);
proc.stdout.on( 'data', data => {
    console.log(data.toString());
});
proc.stderr.on( 'data', data => {
    console.log(data.toString());
});

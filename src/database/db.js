// importar a dependencia do mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    // host     : process.env.HOSTDB ,  
    // user     : process.env.USERDB ,  
    // password : process.env.PASSDB ,  
    // database : process.env.SCHEDB , 
    host     : '127.0.0.1' ,  
    user     : 'db_user',  
    password : 'db_pass' ,  
    database : 'library' , 
  });

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;
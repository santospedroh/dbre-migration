var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  // host     : process.env.HOSTDB ,
  // user     : process.env.USERDB ,
  // password : process.env.PASSDB ,
  // database : process.env.SCHEDB ,
  host     : '127.0.0.1' ,
  user     : 'db_user' ,
  password : 'db_pass' ,
  database : 'library'
});

migration.init(connection, __dirname + '/migrations', function() {
  console.log("finished running migrations");
});
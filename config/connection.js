var mysql= require("mysql");

//sets up connetion with my sql
var mysql = require("mysql");
var jawsDB = process.env.JAWSDB_URL;
var connection;

if(jawsDB){
  connection = mysql.createConnection(jawsDB);
}else{
// Set up our connection information
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(function(err){
    if (err){
        console.error("error connecting to mysql server" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;
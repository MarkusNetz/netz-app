const mysql = require('mysql');
const config = require('./config')
const conn = mysql.createConnection( config.db ); 
/*
const conn = mysql.createConnection({
	host: config.db.host,
	user: cofig.db.user,
	password: config.db.password,
	database: config.db.database,
	port: 3306
});
*/

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;

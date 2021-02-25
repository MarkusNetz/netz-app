const mysql = require('mysql');
const config = require('./config')
const conn = mysql.createConnection( config.db ); 

conn.connect(function(err) {
  if (err) throw err;
});

module.exports = conn;

// https://www.npmjs.com/package/mysql

// TODO: Establish database connection

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ShopDB'
});

connection.connect((err) => {
  if (err) {
    console.log('failed to connect to database');
  } else {
    console.log('successfully connected to database');
  }
});

module.exports = connection;
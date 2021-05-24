var connection = require('./index.js')

/* create dbHelper functions
implement the following CRUD functionality:

  - create a new record
  - read all records
  - read one record by id
  - update one record
  - delete one record

*/
var dbHelpers = {
  // read all records
  getAll: (callback) => {
    var queryStr = `SELECT * FROM groceries`;
    connection.query(queryStr, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  },
  // get one record by id
  getOne: (req, callback) =>{
    var id = parseInt(req.params.id)
    var queryStr = `SELECT * FROM groceries WHERE id = ${id}`;
    connection.query(queryStr, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  },
  // create new record (cannot figure out how to pust new record using postman)
  create: (req, callback) => {
    console.log(req.body);
    var { name, price, quantity} = req.body;
    var queryStr = `INSERT INTO groceries (name, price, quantity) values ("${name}", ${price}, ${quantity})`;
    connection.query(queryStr, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    })
  },
  // delete item by id
  delete: (req, callback) => {
    var id = parseInt(req.params.id);
    var queryStr = `DELETE FROM groceries WHERE id = ${id}`;
    connection.query(queryStr, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  //update row by id
  updateOne: (req, callback) => {
    var id = req.params.id;
    var { name, price, quantity} = req.body;
    var queryStr = `UPDATE groceries SET name="${name}", price=${price}, quantity=${quantity} WHERE id = ${id}`;
    connection.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }

}

module.exports = dbHelpers;
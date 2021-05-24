// TODO: create controller functions
var dbHelpers = require('../database/dbHelpers.js')

var controllers = {
  getAll: (req, res) => {
    dbHelpers.getAll((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },
  getOne: (req, res) => {
    dbHelpers.getOne(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },
  create: (req, res) => {
    dbHelpers.create(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(`${req.body.name} has been added to inventory!!`);
      }
    })
  },
  delete: (req, res) => {
    dbHelpers.delete(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(`item at ${req.params.id} has been removed`);
      }
    })
  },
  updateOne: (req, res) => {
    dbHelpers.updateOne(req, (err, results) => {
      if (err) {
        res.status(400).send('this is error',err);
      } else {
        res.status(200).send(`item at ${req.params.id} has been updated`)
      }
    })
  }

}

module.exports = controllers;
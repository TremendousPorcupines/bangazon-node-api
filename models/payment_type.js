'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Payment_Type = {
  // method for getting one payment type
  getOne: (payment_type_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM payment_types WHERE payment_type_id = ${payment_type_id}`, (err, payment_type) => {
        if (err) return reject(err);
        resolve(payment_type);
      });
    });
  },
  // method for getting all payment types
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM payment_types`, (err, payment_types) => {
        if(err) return reject(err);
        resolve(payment_types);
      });
    });
  }

};

module.exports = Payment_Type;

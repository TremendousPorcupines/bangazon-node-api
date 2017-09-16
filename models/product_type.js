'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Product_Type = {
  // method for getting one user
  getOne: (product_type_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM product_types WHERE product_type_id = ${product_type_id}`, (err, product_type) => {
        if (err) return reject(err);
        resolve(product_type);
      });
    });
  },
  // method for getting all users
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM product_types`, (err, product_types) => {
        if(err) return reject(err);
        resolve(product_types);
      });
    });
  }

};

module.exports = Product_Type;

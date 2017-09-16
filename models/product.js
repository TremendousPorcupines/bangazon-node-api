'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Product = {
  // method for getting one product
  getOne: (product_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM products WHERE product_id = ${product_id}`, (err, product) => {
        if (err) return reject(err);
        resolve(product);
      });
    });
  },
  // method for getting all products
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM products`, (err, products) => {
        if(err) return reject(err);
        resolve(products);
      });
    });
  }

};

module.exports = Product;

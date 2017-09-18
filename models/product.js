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
  },
  // method for adding a product
  addOne: (product) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO products VALUES(null, "${product.name}", "${product.price}", "${product.user_id}", "${product.product_type_id}")`, (err) => {
        if(err) return reject(err);
        resolve();
      });
    })
  },
  // method for updating a product's info
  edit: (product) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE products SET
        first_name = "${product.name}",
        last_name = "${product.price}",
        address = "${product.user_id}",
        city = "${product.product_type_id}"`, 
        (err) => {
          if(err) return reject(err);
          resolve();
        });
    })
  },
  // method for deleting a specifed product
  delete: (product_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`DELETE * FROM products WHERE product_id = ${product_id}`, (err, product) => {
        if (err) return reject(err);
        resolve(product);
      });
    });
  }
};

module.exports = Product;

'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateProducts } = require('../faker/products');

generateProducts()
.then((products) => {
  const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
    console.log('Connected products');
    products.forEach((product) => {
      db.run(`INSERT INTO products VALUES(
        NULL,
        "${product.name}",
        "${product.price}",
        "${product.user_id}",
        "${product.product_type_id}")`
      )
    })
  });
})
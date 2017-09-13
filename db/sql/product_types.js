'use strict';

const sqlite3 = require('sqlite3').verbose();

const populateProductTypes = () => {
  const { product_types } = require('../populate-faker-data');
  return new Promise( (resolve, reject) => {
    const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
      console.log('Connected product_type');
      product_types.forEach((type) => {
        db.run(`INSERT INTO product_type VALUES(
          NULL,
          "${type.name}")`
        )
      })
      resolve();
    });
  })
};

module.exports = { populateProductTypes }
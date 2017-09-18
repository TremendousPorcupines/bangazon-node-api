'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Order = {
  // method for getting one order
  getOne: (order_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM orders WHERE order_id = ${order_id}`, (err, order) => {
        if (err) return reject(err);
        resolve(order);
      });
    });
  },
  // method for getting all orders
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM orders`, (err, orders) => {
        if(err) return reject(err);
        resolve(orders);
      });
    });
  }

};

module.exports = Order;

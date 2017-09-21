'use strict';

const faker = require('faker');

module.exports.generateOrders = () => {
  const User = require('../../models/user');
  const Payment_Type = require('../../models/payment_type');

  return new Promise((resolve, reject) => {

    Promise.all([User.getAll(), Payment_Type.getAll()])
    .then((data) => {
      let users = data[0];
      let types = data[1];
      let orders = [];
      let count = 0;

      for (let i = 0; i < 200; i++) {
        let user_id = Math.floor(Math.random() * users.length) + 1;
        let payment_type_id;

        types.forEach((type) => {
          if (user_id === type.user_id && count++ % 6 != 0) {
            if (count++ % 6 != 0) {
              payment_type_id = type.payment_type_id;
            } else {
              payment_type_id = null;
            }
          }
        })

        orders.push({
          user_id,
          payment_type_id
        });
      }
      resolve(orders);
    })
  });
};
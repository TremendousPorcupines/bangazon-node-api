'use strict';

const faker = require('faker');

module.exports.generatePaymentTypes = (usersLen) => {
  let payment_types = [];

  for (let i = 0; i < usersLen+50; i++) {
    let user_id;
    if (i+1 > usersLen) {
      user_id = Math.floor(Math.random() * usersLen) + 1;
    } else {
      user_id = i+1;
    }
    let name = faker.finance.accountName();
    let accountNumber = faker.finance.account();

    payment_types.push({
      user_id,
      name,
      accountNumber
    });
  }
  return payment_types;
};
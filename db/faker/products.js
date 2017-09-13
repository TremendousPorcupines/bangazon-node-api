'use strict';

const faker = require('faker');

module.exports.generateProducts = (typesLen, customersLen) => {
  let products = [];

  for (let i = 0; i < 100; i++) {
    let type_id = Math.floor(Math.random() * typesLen) + 1;
    let user_id = Math.floor(Math.random() * customersLen) + 1;
    let name = faker.commerce.productName();
    let price = faker.commerce.price();

    products.push({
      type_id,
      user_id,
      name,
      price
    });
  }
  return products;
};
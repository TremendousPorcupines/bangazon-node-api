'use strict';

const { productTypes } = require('./faker/product_types');
const { generateUsers } = require('./faker/users');


let users = generateUsers();
let product_types = productTypes;


module.exports = { users, product_types }
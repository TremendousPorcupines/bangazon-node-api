'use strict';

const { populateUsers, getAllUsers } = require('./sql/users');
const { populateProductTypes } = require('./sql/product_types')

let users = [];
let product_types = [];

// const createDatabase = () => {
//   return new Promise((resolve, reject) => {
//     require('./bangazon-db');
//     resolve();
//   })
// }

Promise.all([
  // createDatabase(),
  populateUsers(),
  getAllUsers(users),
  populateProductTypes()
  ])
.then((data) => users = data)
.catch((err) => console.log(err))

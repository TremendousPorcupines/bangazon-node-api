'use strict';

const { generateUsers } = require('./faker/users');

let users = generateUsers();

module.exports = { users };
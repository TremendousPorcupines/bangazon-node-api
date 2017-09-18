'use strict';

const faker = require('faker');
const {db} = require('../db-table-sizes.json')

let empLen = db.find(x => x.employees).employees;
let depLen = db.find(x => x.departments).departments;

module.exports.generateEmployees = () => {
  let employees = [];

  for (let i = 0; i < empLen; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let department_id = Math.floor(Math.random() * depLen) + 1;

    employees.push({
      first_name,
      last_name,
      department_id
    });
  }
  return employees;
};

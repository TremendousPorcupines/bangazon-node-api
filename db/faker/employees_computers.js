'use strict';

const faker = require('faker');
const {db} = require('../db-table-sizes.json')

let empLen = db.find(x => x.employees).employees;
let comLen = db.find(x => x.computers).computers;
let comArr = [];

for (let i = 0; i < comLen; i++){
  comArr.push(i+1)
}

const shuffle = (arr) => arr.sort(() => (Math.random() - 0.5));

module.exports.generateEmployeesComputers = () => {
  let employees_computers = [];
  let com_id = shuffle(comArr).slice(0, empLen);

  for (let i = 0; i < empLen; i++) {
    let start_date = faker.date.past();
    let end_date = null;
    let employee_id = i+1
    let computer_id = com_id[i];

    employees_computers.push({
      start_date,
      end_date,
      employee_id,
      computer_id
    });
  }
  return employees_computers;
};

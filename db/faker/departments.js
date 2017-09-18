'use strict';

const faker = require('faker');
const {db} = require('../db-table-sizes.json')

let depLen = db.find(x => x.departments).departments;
let empLen = db.find(x => x.employees).employees;
let empArr = [];

for (let i = 0; i < empLen; i++){
  empArr.push(i+1)
}

module.exports.generateDepartments = () => {
  let departments = [];
  let shuffledEmpArr = empArr.slice(0, depLen).map();
  console.log(shuffledEmpArr);

  for (let i = 0; i < depLen; i++) {
    let supervisor_id = null;
    let name = faker.name.jobArea();
    let budget = faker.finance.amount();

    departments.push({
      supervisor_id,
      name,
      budget
    });
  }
  return departments;
};

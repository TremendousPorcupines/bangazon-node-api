'use strict';

const faker = require('faker');
const {db} = require('../db-table-sizes.json')

let depLen = db.find(x => x.departments).departments;
let empLen = db.find(x => x.employees).employees;
let empArr = [];

for (let i = 0; i < empLen; i++){
  empArr.push(i+1)
}

const shuffle = (arr) => arr.sort(() => (Math.random() - 0.5));

module.exports.generateDepartments = () => {
  let departments = [];
  let sup_id = shuffle(empArr).slice(0, depLen);

  for (let i = 0; i < depLen; i++) {
    let name = faker.name.jobArea();
    let supervisor_id = sup_id[i];

    departments.push({
      name,
      supervisor_id
    });
  }
  return departments;
};

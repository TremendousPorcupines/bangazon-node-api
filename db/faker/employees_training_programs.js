'use strict';

const faker = require('faker');
const {db} = require('../db-table-sizes.json')

let empLen = db.find(x => x.employees).employees;
let progLen = db.find(x => x.training_programs).training_programs;
let empArr = [];

const shuffle = (arr) => arr.sort(() => (Math.random() - 0.5));

for (let i = 0; i < empLen; i++){
  empArr.push(i+1)
}


module.exports.generateEmployeesTrainingPrograms = () => {
  let employee_training_programs = [];

  for (let i = 0; i < progLen; i++) {
    let training_program_id = i+1;
    let empCount = shuffle(empArr).slice(0, Math.floor(Math.random() * empLen) + 1);

    empCount.forEach((emp, index) => {
      let employee_id = empCount[index];
      employee_training_programs.push({
        employee_id,
        training_program_id
      });
    });
  }
  return employee_training_programs;
}

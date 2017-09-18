'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateEmployeesTrainingPrograms } = require('../faker/employees_training_programs');

let employees_training_programs = generateEmployeesTrainingPrograms();

const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
  console.log(`Populating ${employees_training_programs.length} employees training programs...`);
  employees_training_programs.forEach((employees_training_program) => {
    db.run(`INSERT INTO employees_training_programs VALUES(
      NULL,
      "${employees_training_program.employee_id}",
      "${employees_training_program.training_program_id}")`
    )
  })
});
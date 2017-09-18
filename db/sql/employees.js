'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateEmployees } = require('../faker/employees');

let employees = generateEmployees();

const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
  console.log(`Populating ${employees.length} employees...`);
  employees.forEach((employee) => {
    db.run(`INSERT INTO employees VALUES(
      NULL,
      "${employee.first_name}",
      "${employee.last_name}",
      "${employee.department_id}")`
    )
  })
});
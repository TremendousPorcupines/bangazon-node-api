'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateEmployeesComputers } = require('../faker/employees_computers');

let employees_computers = generateEmployeesComputers();

const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
  console.log(`Populating ${employees_computers.length} employees_computers...`);
  employees_computers.forEach((employees_computer) => {
    db.run(`INSERT INTO employees_computers VALUES(
      NULL,
      "${employees_computer.start_date}",
      ${employees_computer.end_date},
      "${employees_computer.employee_id}",
      "${employees_computer.computer_id}")`
    )
  })
});
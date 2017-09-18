'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateDepartments } = require('../faker/departments');

let departments = generateDepartments();

const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
  console.log(`Populating ${departments.length} departments...`);
  departments.forEach((department) => {
    db.run(`INSERT INTO departments VALUES(
      NULL,
      "${department.supervisor_id}",
      "${department.name}",
      "${department.budget}")`
    )
  })
});

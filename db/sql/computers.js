'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateComputers } = require('../faker/computers');

let computers = generateComputers();

const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
  console.log(`Populating ${computers.length} computers...`);
  computers.forEach((computer) => {
    db.run(`INSERT INTO computers VALUES(
      NULL,
      "${computer.begin_service_date}",
      "${computer.end_service_date}")`
    )
  })
});
'use strict';

const sqlite3 = require('sqlite3').verbose();
const { generateTrainingPrograms } = require('../faker/training_programs');

let training_programs = generateTrainingPrograms();

const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
  console.log('Connected training_programs');
  training_programs.forEach((program) => {
    db.run(`INSERT INTO training_programs VALUES(
      NULL,
      "${program.name}",
      "${program.start_date}",
      "${program.end_date}",
      "${program.number_enrolled}")`
    )
  })
});
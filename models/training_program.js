'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const TrainingProgram = {
  // method for getting one training program
  getOne: (training_program_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM training_programs WHERE training_program_id = ${training_program_id}`, (err, training_program) => {
        if (err) return reject(err);
        resolve(training_program);
      });
    });
  },
  // method for getting all training programs
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM training_programs`, (err, training_programs) => {
        if(err) return reject(err);
        resolve(training_programs);
      });
    });
  },
  // method for adding a training program
  addOne: (training_program) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO training_programs VALUES(null, "${training_program.name}",
        "${training_program.start_date}",
        "${training_program.end_date}",
        "${training_program.number_enrolled}")`, (err) => {
        if(err) return reject(err);
        resolve();
      });
    })
  },
  // method for updating a training program's info
  edit: (training_program) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE training_programs SET
        name = "${training_program.name}",
        start_date = "${training_program.start_date}",
        end_date = "${training_program.end_date}",
        number_enrolled = "${training_program.number_enrolled}"
        WHERE training_program_id = ${training_program.training_program_id}`,
        (err) => {
          if(err) return reject(err);
          resolve();
        });
    })
  },

  // method for deleting a specifed training program
  delete: (product_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`DELETE FROM products WHERE product_id = ${product_id}`, (err, product) => {
        if (err) return reject(err);
        resolve(product);
      });
    });
  }

};

module.exports = TrainingProgram;
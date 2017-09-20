'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Computer = {
  // method for getting one computer
  getOne: (computer_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM computers WHERE computer_id = ${computer_id}`, (err, computer) => {
        if (err) return reject(err);
        resolve(computer);
      });
    });
  },
  // method for getting all computers
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM computers`, (err, computers) => {
        if(err) return reject(err);
        resolve(computers);
      });
    });
  },
  // method for adding a computer
  addOne: (computer) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO computers VALUES(null, "${computer.begin_service_date}", "${computer.end_service_date}")`, (err) => {
        if(err) return reject(err);
        resolve();
      });
    })
  },
  // method for updating a computer's info
  edit: (computer) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE computers SET
        begin_service_date = "${computer.begin_service_date}",
        end_service_date = "${computer.end_service_date}"
        WHERE computer_id = '${computer.computer_id}'`,
        (err) => {
          if(err) return reject(err);
          resolve();
        });
    })
  },
  // method for deleting a specifed computer
  delete: (computer_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`DELETE FROM computers WHERE computer_id = ${computer_id}`, (err, computer) => {
        if (err) return reject(err);
        resolve(computer);
      });
    });
  }
};

module.exports = Computer;

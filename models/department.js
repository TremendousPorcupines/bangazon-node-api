'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Department = {
  // method for getting one department
  getOne: (department_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM departments WHERE department_id = ${department_id}`, (err, department) => {
        if (err) return reject(err);
        resolve(department);
      });
    });
  },
  // method for getting all departments
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM departments`, (err, departments) => {
        if(err) return reject(err);
        resolve(departments);
      });
    });
  },
  // method for adding a department
  addOne: (department) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO departments VALUES(null, "${department.name}",
        "${department.supervisor_id}")`, (err) => {
        if(err) return reject(err);
        resolve();
      });
    })
  },
  // method for updating a department's info
  edit: (department) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE departments SET
        name = "${department.name}",
        last_name = "${department.supervisor_id}"
        WHERE department_id = ${department.department_id}`,
        (err) => {
          if(err) return reject(err);
          resolve();
        });
    })
  }
};

module.exports = Department;
'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const Employee = {
  // method for getting one employee
  getOne: (employee_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM employees WHERE employee_id = ${employee_id}`, (err, employee) => {
        if (err) return reject(err);
        resolve(employee);
      });
    });
  },
  // method for getting all employees
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM employees`, (err, employees) => {
        if(err) return reject(err);
        resolve(employees); 
      });
    });
  },
  // method for adding a employee
  addOne: (employee) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO employees VALUES(null, "${employee.firstName}", "${employee.lastName}", "${employee.department_id}")`, (err) => {
        if(err) return reject(err);
        resolve();
      });
    })
  },
  // method for updating a employee's info
  edit: (employee) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE employees SET
        first_name = "${employee.firstName}",
        last_name = "${employee.lastName}",
        address = "${employee.address}",
        city = "${employee.city}",
        zip_code = "${employee.zipcode}",
        phone = "${employee.phone}",
        date_created = "${employee.dateCreated}",
        last_login ="${employee.lastLogin}"
        WHERE employee_id = ${employee.employee_id}`, 
        (err) => {
          if(err) return reject(err);
          resolve();
        });
    })
  }
};

module.exports = Employee;
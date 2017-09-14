'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const User = {
  // method for getting one user
  getOne: (user_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT ${user_id} FROM users`, (err, user) => {
        if (err) return reject(err);
        resolve(user);
      });
    });
  },
  // method for getting all users
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM users`, (err, users) => {
        if(err) return reject(err);
        resolve(users); 
      });
    });
  },
  // method for adding a user
  addOne: () => {
    
  },
  // method for updating a user's info
  edit: () => {
    
  }
};

module.exports = User;
'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');

const User = {
  // method for getting one user
  getOne: (user_id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT * FROM users WHERE user_id = ${user_id}`, (err, user) => {
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
  addOne: (user) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO users (null, '${user.firstName}', '${user.lastName}', '${user.address}', '${user.city}', '${user.zipcode}', '${user.phone}', '${user.dateCreated}', '${user.lastLogin}')`), (err, user) => {
        if(err) return reject(err);
        resolve(users);
      };
    })
  },
  // method for updating a user's info
  edit: (user) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE users (null, '${user.firstName}', '${user.lastName}', '${user.address}', '${user.city}', '${user.zipcode}', '${user.phone}', '${user.dateCreated}', '${user.lastLogin}')`), (err, user) => {
        if(err) return reject(err);
        resolve(users);
      };
    })
  }
};

module.exports = User;
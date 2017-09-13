'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/bangazon.sqlite');

const populateUsers = () => {
  const { users } = require('../populate-faker-data');
  return new Promise( (resolve, reject) => {
    const db = new sqlite3.Database('db/bangazon.sqlite', (err) => {
    console.log('Connected users');
      users.forEach((user) => {
        db.run(`INSERT INTO users VALUES(
          NULL,
          "${user.first_name}",
          "${user.last_name}",
          "${user.address}",
          "${user.city}",
          "${user.state}",
          "${user.zip_code}",
          "${user.phone}",
          "${user.date_created}",
          "${user.last_login}")`
        )
      })
      resolve();
    })
  });
};

const getAllUsers = () => {
  return new Promise( (resolve, reject) => {
    db.all('SELECT * FROM users', (err, users) => {
      if (err) {
        return console.log('err', err.toString());
      }
      resolve(users);
    });
  })
};

module.exports = { populateUsers, getAllUsers }

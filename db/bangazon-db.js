'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite', (err) => console.log('Connected'));

// create users table
db.run('CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, address TEXT, city TEXT, zip_code TEXT, phone TEXT, date_created TEXT, last_login TEXT)')

// create payment_types table
db.run('CREATE TABLE IF NOT EXISTS payment_types (payment_type_id INTEGER PRIMARY KEY, name TEXT, account_number TEXT, FOREIGN KEY (user_id) REFERENCES users(user_id))')


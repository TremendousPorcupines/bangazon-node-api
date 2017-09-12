'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite', (err) => console.log('Connected'));

// functions to drop tables if they exist to reset db
const dropUsersTable = () => {
  db.run(`DROP TABLE IF EXISTS users`);
};
const dropPaymentTypesTable = () => {
  db.run(`DROP TABLE IF EXISTS payment_types`);
};
const dropOrdersTable = () => {
  db.run(`DROP TABLE IF EXISTS orders`);
};
const dropProductTypesTable = () => {
  db.run(`DROP TABLE IF EXISTS product_types`);
};
const dropProductsTable = () => {
  db.run(`DROP TABLE IF EXISTS products`);
};
const dropOrdersProductsTable = () => {
  db.run(`DROP TABLE IF EXISTS order_products`);
};
const dropDepartmentsTable = () => {
  db.run(`DROP TABLE IF EXISTS departments`);
};
const dropEmployeesTable = () => {
  db.run(`DROP TABLE IF EXISTS employees`);
};
const dropTrainingProgramsTable = () => {
  db.run(`DROP TABLE IF EXISTS training_programs`);
};
const dropEmployeesTrainingProgramsTable = () => {
  db.run(`DROP TABLE IF EXISTS employees_training_programs`);
};
const dropComputersTable = () => {
  db.run(`DROP TABLE IF EXISTS computers`);
};
const dropEmployeesComputersTable = () => {
  db.run(`DROP TABLE IF EXISTS employees_computers`);
};
// invoke table drop functions for db reset
dropUsersTable();
dropPaymentTypesTable();
dropOrdersTable();
dropProductTypesTable();
dropProductsTable();
dropOrdersProductsTable();
dropDepartmentsTable();
dropEmployeesTable();
dropTrainingProgramsTable();
dropEmployeesTrainingProgramsTable();
dropComputersTable();
dropEmployeesComputersTable();


// business side

// create users table
db.run('CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, address TEXT, city TEXT, zip_code TEXT, phone TEXT, date_created TEXT, last_login TEXT)');

// create payment_types table
db.run('CREATE TABLE IF NOT EXISTS payment_types (payment_type_id INTEGER PRIMARY KEY, name TEXT, account_number TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(user_id))');

// create orders table
db.run('CREATE TABLE IF NOT EXISTS orders (order_id INTEGER PRIMARY KEY, FOREIGN KEY (user_id) REFERENCES users(user_id), FOREIGN KEY (payment_type_id) REFERENCES payment_types(payment_type_id))');

// create product_types table
db.run('CREATE TABLE IF NOT EXISTS product_types (product_type_id INTEGER PRIMARY KEY, name TEXT)');

// create products table
db.run('CREATE TABLE IF NOT EXISTS products (product_id INTEGER PRIMARY KEY, name TEXT, price TEXT, FOREIGN KEY (user_id) REFERENCES users(user_id), FOREIGN KEY (product_type_id) REFERENCES product_types(product_type_id))');

// create orders_products table
db.run('CREATE TABLE IF NOT EXISTS orders_products (order_product_id INTEGER PRIMARY KEY, FOREIGN KEY (order_id) REFERENCES orders(order_id), FOREIGN KEY (product_id) REFERENCES products(product_id))');


// hr side

// create departments table
db.run('CREATE TABLE IF NOT EXISTS departments (department_id INTEGER PRIMARY KEY, name TEXT, supervisor_id TEXT)');

// create employees table
db.run('CREATE TABLE IF NOT EXISTS employees (employee_id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, FOREIGN KEY (department_id) REFERENCES departments(department_id))');

// create training_programs table
db.run('CREATE TABLE IF NOT EXISTS training_programs (training_program_id INTEGER PRIMARY KEY, name TEXT, start_date TEXT, end_date TEXT, number_enrolled INTEGER)');

// create employees_training_programs table
db.run('CREATE TABLE IF NOT EXISTS employees_training_programs (employee_training_program_id INTEGER PRIMARY KEY, FOREIGN KEY (employee_id) REFERENCES employees(employee_id), FOREIGN KEY (training_program_id) REFERENCES training_programs(training_program_id))');

// create computers table
db.run('CREATE TABLE IF NOT EXISTS computers (computer_id INTEGER PRIMARY KEY, begin_service_date TEXT, end_service_date TEXT)');

// create employees_computers table
db.run('CREATE TABLE IF NOT EXISTS employees_computers (employee_computer_id INTEGER PRIMARY KEY, FOREIGN KEY (employee_id) REFERENCES employees(employee_id), FOREIGN KEY (computer_id) REFERENCES computers(computer_id))');
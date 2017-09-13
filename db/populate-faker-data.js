'use strict';

const { productTypes } = require('./faker/product_types');
const { generateUsers } = require('./faker/users');
const { generateProducts } = require('./faker/products');
const { generatePaymentTypes } = require('./faker/payment_types');
// const { generateDepartments } = require('./departments');
// const { generateComputers } = require('./computers');
// const { generateTrainingPrograms } = require('./training_programs');
// const { generateOrders } = require('./orders');

let users = generateUsers();
let product_types = productTypes;
let products = generateProducts(productTypes.length, users.length);
let payment_types = generatePaymentTypes(users.length);
// let orders = generateOrders(users.length, paymentTypes.length);
// let order_products(orders.length, products.length);
// let computers = generateComputers();
// let employees = generateEmployees(department.length);
// let programs = generateTrainingPrograms(employees.length);
// let departments = generateDepartments(employees.length);
// let employee_training_programs(employees.length, programs.length);
// let employee_computers(employees.length, computers.length);

module.exports = { users, product_types, products, payment_types }
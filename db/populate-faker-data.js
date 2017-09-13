'use strict';

const { productTypes } = require('./faker/product_types');
const { generateUsers } = require('./faker/users');
// const { generateProducts } = require('./products');
// const { generateDepartments } = require('./departments');
// const { generateComputers } = require('./computers');
// const { generateTrainingPrograms } = require('./training_programs');
// const { generateOrders } = require('./orders');
// const { generatePaymentTypes } = require('./payment_types');

module.exports.users = generateUsers();
// let products = generateProducts(productTypes.length, users.length);
// let computers = generateComputers();
// let payment_types = generatePaymentTypes(users.length);
// let employees = generateEmployees(department.length);
// let programs = generateTrainingPrograms(employees.length);
// let departments = generateDepartments(employees.length);
// let orders = generateOrders(users.length, paymentTypes.length);
// let order_products(orders.length, products.length);
// let employee_training_programs(employees.length, programs.length);
// let employee_computers(employees.length, computers.length);
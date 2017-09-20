`use strict`;

const {Router} = require('express');
const router = Router();

router.use( require('./users-route'));
router.use( require('./orders-route'));
router.use( require('./products-route'));
router.use( require('./departments-route'));
router.use( require('./employees-route'));
router.use( require('./training-programs-route'));
router.use( require('./payment-types-route'));
router.use( require('./product-types-route'));

router.get('/', (req, res) => {
  res.json({
    "getUserById": "/api/v1/users/:<user_id>",
    "getAllUsers": "/api/v1/users",
    "addUser": "/api/v1/users/new",
    "editUser": "/api/v1/users/edit",
    "getProductById": "/api/v1/products/:<product_id>",
    "getAllProducts": "/api/v1/products",
    "addProduct": "/api/v1/products/new",
    "editProduct": "/api/v1/products/edit",
    "deleteProduct": "/app/v1/products/delete/:<product_id>",
    "getDepartmentById": "/api/v1/departments/:<department_id>",
    "getAllDepartments": "/api/v1/departments",
    "addDepartment": "/api/v1/departments/new",
    "editDepartment": "/api/v1/departments/edit",
    "getOrderById": "/api/v1/orders/:<order_id>",
    "getAllOrders": "/api/v1/orders",
    "addOrder": "/api/v1/orders/new",
    "editOrder": "/api/v1/orders/edit",
    "deleteOrder": "/api/v1/orders/delete/:<order_id>",
    "getEmployeeById": "/api/v1/employees/:<employee_id>",
    "getAllEmployees": "/api/v1/employees",
    "addEmployee": "/api/v1/employees/new",
    "editEmployee": "/api/v1/employees/edit",
    "getTrainingProgramById": "/api/v1/training_programs/:<training_program_id>",
    "getAllTrainingProgram": "/api/v1/training_programs",
    "addTrainingProgram": "/api/v1/training_programs/new",
    "editTrainingProgram": "/api/v1/training_programs/edit",
    "deleteTrainingProgram": "/api/v1/training_programs/delete/:<training_program_id>",
    "getPaymentTypeById": "/api/v1/payment_types/:<payment_type_id>",
    "getAllPaymentTypes": "/api/v1/payment_types",
    "addPaymentType": "/api/v1/payment_types/new",
    "editPaymentType": "/api/v1/payment_types/edit",
    "deletePaymentType": "/api/v1/payment_types/delete/:<payment_type_id>",
    "getProductTypeById": "/api/v1/product_types/:<product_type_id>",
    "getAllProductTypes": "/api/v1/product_types",
    "addProductType": "/api/v1/product_types/new",
    "editProductType": "/api/v1/product_types/edit",
    "deleteProductType": "/api/v1/product_types/delete/:<product_type_id>"
  });
});

module.exports = router;
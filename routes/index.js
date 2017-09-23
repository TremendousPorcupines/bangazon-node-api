`use strict`;

const {Router} = require('express');
const router = Router();

router.use( require('./users-route'));
router.use( require('./orders-route'));
router.use( require('./products-route'));
router.use( require('./departments-route'));
router.use( require('./training-programs-route'));
router.use( require('./payment-types-route'));
router.use( require('./product-types-route'));
router.use( require('./computers-route'));

router.get('/', (req, res) => {
  res.json({
    "getUserById": "/api/v1/user/:<user_id>",
    "getAllUsers": "/api/v1/users",
    "addUser": "/api/v1/user/new",
    "editUser": "/api/v1/user/edit",
    "getProductById": "/api/v1/product/:<product_id>",
    "getAllProducts": "/api/v1/products",
    "addProduct": "/api/v1/product/new",
    "editProduct": "/api/v1/product/edit",
    "deleteProduct": "/app/v1/product/delete/:<product_id>",
    "getDepartmentById": "/api/v1/departments/:<department_id>",
    "getAllDepartments": "/api/v1/departments",
    "addDepartment": "/api/v1/departments/new",
    "editDepartment": "/api/v1/departments/edit",
    "getOrderById": "/api/v1/order/:<order_id>",
    "getAllOrders": "/api/v1/orders",
    "addOrder": "/api/v1/order/new",
    "editOrder": "/api/v1/order/edit",
    "deleteOrder": "/api/v1/order/delete/:<order_id>",
    "getTrainingProgramById": "/api/v1/training_program/:<training_program_id>",
    "getAllTrainingProgram": "/api/v1/training_programs",
    "addTrainingProgram": "/api/v1/training_program/new",
    "editTrainingProgram": "/api/v1/training_program/edit",
    "deleteTrainingProgram": "/api/v1/training_program/delete/:<training_program_id>",
    "getPaymentTypeById": "/api/v1/payment_typse/:<payment_type_id>",
    "getAllPaymentTypes": "/api/v1/payment_types",
    "addPaymentType": "/api/v1/payment_types/new",
    "editPaymentType": "/api/v1/payment_types/edit",
    "deletePaymentType": "/api/v1/payment_types/delete/:<payment_type_id>",
    "getProductTypeById": "/api/v1/product_type/:<product_type_id>",
    "getAllProductTypes": "/api/v1/product_types",
    "addProductType": "/api/v1/product_type/new",
    "editProductType": "/api/v1/product_type/edit",
    "deleteProductType": "/api/v1/product_type/delete/:<product_type_id>",
    "getComputerById": "/api/v1/computers/:<computer_id>",
    "getAllComputers": "/api/v1/computers",
    "addComputers": "/api/v1/computers/new",
    "editComputers": "/api/v1/computers/edit",
    "deleteComputers": "/api/v1/computers/delete/:<computere_id>"
  });
});

module.exports = router;
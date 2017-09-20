'use strict';

const {Router} = require('express');
const router = Router();
const {getOneEmployee, getAllEmployees, addNewEmployee, editEmployee} = require('../controllers/employeesCtrl');

router.get('/employees/:employee_id', getOneEmployee);
router.get('/employees', getAllEmployees);
router.post('/employees/new', addNewEmployee);
router.put('/employees/edit', editEmployee);

module.exports = router;
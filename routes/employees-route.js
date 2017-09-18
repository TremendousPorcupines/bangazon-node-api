'use strict';

const {Router} = require('express');
const router = Router();
const {getOneEmployee, getAllEmployees, addNewEmployee, editEmployee} = require('../controllers/employeesCtrl');

router.get('/employee/:employee_id', getOneEmployee);
router.get('/employees', getAllEmployees);
router.post('/employee/new', addNewEmployee);
router.put('/employee/edit', editEmployee);

module.exports = router;
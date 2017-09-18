'use strict';

const {Router} = require('express');
const router = Router();
const {getOneDepartment, getAllDepartments, addNewDepartment, editDepartment} = require('../controllers/departmentsCtrl');

router.get('/department/:department_id', getOneDepartment);
router.get('/departments', getAllDepartments);
router.post('/department/new', addNewDepartment);
router.put('/department/edit', editDepartment);

module.exports = router;
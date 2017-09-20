'use strict';

const {Router} = require('express');
const router = Router();
const {getOneDepartment, getAllDepartments, addNewDepartment, editDepartment} = require('../controllers/departmentsCtrl');

router.get('/departments/:department_id', getOneDepartment);
router.get('/departments', getAllDepartments);
router.post('/departments/new', addNewDepartment);
router.put('/departments/edit', editDepartment);

module.exports = router;
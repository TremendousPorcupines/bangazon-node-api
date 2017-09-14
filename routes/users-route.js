'use strict';

const {Router} = require('express');
const Router = Router();
const {getOneUser, getAllUsers, addNewUser, editUser} = require('../controllers/usersCtrl');

router.get('/user', getOneUser);
router.get('/users', getAllUsers);
router.get('/user/new', addNewUser;
router.get('/user/edit', editUser);

module.exports = router
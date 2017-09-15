'use strict';

const {Router} = require('express');
const router = Router();
const {getOneUser, getAllUsers, addNewUser, editUser} = require('../controllers/usersCtrl');

router.get('/user/:user_id', getOneUser);
router.get('/users', getAllUsers);
router.get('/user/new', addNewUser);
router.get('/user/edit', editUser);

module.exports = router;
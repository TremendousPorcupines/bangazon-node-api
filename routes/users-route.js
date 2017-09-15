'use strict';

const {Router} = require('express');
const router = Router();
const {getOneUser, getAllUsers, addNewUser, editUser} = require('../controllers/usersCtrl');

router.get('/user/:user_id', getOneUser);
router.get('/users', getAllUsers);
router.post('/user/new', addNewUser);
router.put('/user/edit/:user_id', editUser);

module.exports = router;
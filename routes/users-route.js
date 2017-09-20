'use strict';

const {Router} = require('express');
const router = Router();
const {getOneUser, getAllUsers, addNewUser, editUser} = require('../controllers/usersCtrl');

router.get('/users/:user_id', getOneUser);
router.get('/users', getAllUsers);
router.post('/users/new', addNewUser);
router.put('/users/edit', editUser);

module.exports = router;
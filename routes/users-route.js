'use strict';

const {Router} = require('express');
const Router = Router();
const {getOneUser, getAllUsers} = require('../controllers/usersCtrl');

router.get('/user', getOneUser);
router.get('/users', getAllUsers)

module.exports = router
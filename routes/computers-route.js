'use strict';

const {Router} = require('express');
const router = Router();
const {getOneComputer, getAllComputers, addNewComputer, editComputer, deleteComputer} = require('../controllers/computersCtrl');

router.get('/computers/:computer_id', getOneComputer);
router.get('/computers', getAllComputers);
router.post('/computers/new', addNewComputer);
router.put('/computers/edit', editComputer);
router.delete('/computers/delete/:computer_id', deleteComputer);

module.exports = router;
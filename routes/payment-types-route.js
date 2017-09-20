'use strict';

const {Router} = require('express');
const router = Router();
const {getOnePaymentType, getAllPaymentTypes, addNewPaymentType, editPaymentType, deletePaymentType} = require('../controllers/paymentTypesCtrl');

router.get('/payment_type/:payment_type_id', getOnePaymentType);
router.get('/payment_types', getAllPaymentTypes);
router.post('/payment_type/new', addNewPaymentType);
router.put('/payment_type/edit', editPaymentType);
router.delete('/payment_type/delete/:payment_type_id', deletePaymentType);

module.exports = router;
'use strict';

const {Router} = require('express');
const router = Router();
const {getOnePaymentType, getAllPaymentTypes, addNewPaymentType, editPaymentType, deletePaymentType} = require('../controllers/paymentTypesCtrl');

router.get('/payment_types/:payment_type_id', getOnePaymentType);
router.get('/payment_types', getAllPaymentTypes);
router.post('/payment_types/new', addNewPaymentType);
router.put('/payment_types/edit', editPaymentType);
router.delete('/payment_types/delete/:payment_type_id', deletePaymentType);

module.exports = router;
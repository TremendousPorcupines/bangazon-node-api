'use strict';

const {Router} = require('express');
const router = Router();
const {getOneOrder, getAllOrders, postToOrder, editOrder, deleteOrder} = require('../controllers/ordersCtrl');

router.get('/orders/:order_id', getOneOrder);
router.get('/orders', getAllOrders);
router.post('/orders', postToOrder);
router.put('/orders/edit/:order_id', editOrder);
router.delete('/orders/delete/:order_id', deleteOrder);

module.exports = router;

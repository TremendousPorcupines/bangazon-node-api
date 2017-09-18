'use strict';

const {Router} = require('express');
const router = Router();
const {getOneOrder, getAllOrders, addNewOrder, editOrder, deleteOrder} = require('../controllers/ordersCtrl');

router.get('/order/:order_id', getOneOrder);
router.get('/orders', getAllOrders);
router.post('/order/new', addNewOrder);
router.put('/order/edit', editOrder);
router.delete('/order/delete/:order_id', deleteOrder);

module.exports = router;
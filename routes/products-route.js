'use strict';

const {Router} = require('express');
const router = Router();
const {getOneProduct, getAllProducts, addNewProduct, editProduct, deleteProduct} = require('../controllers/usersCtrl');

router.get('/product/:product_id', getOneProduct);
router.get('/products', getAllProducts);
router.post('/product/new', addNewProduct);
router.put('/product/edit', editProduct);
router.delete('/product/delete/:product_id', deleteProduct);

module.exports = router;
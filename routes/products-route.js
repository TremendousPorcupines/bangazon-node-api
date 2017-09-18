'use strict';

const {Router} = require('express');
const router = Router();
const {getOneProduct, getAllProducts, addNewProduct, editProduct} = require('../controllers/usersCtrl');

router.get('/product/:product_id', getOneProduct);
router.get('/products', getAllProducts);
router.get('/product/new', addNewProduct);
router.get('/product/edit', editProduct);

module.exports = router;
'use strict';

const {Router} = require('express');
const router = Router();
const {getOneProduct, getAllProducts, addNewProduct, editProduct, deleteProduct} = require('../controllers/productsCtrl');

router.get('/products/:product_id', getOneProduct);
router.get('/products', getAllProducts);
router.post('/products/new', addNewProduct);
router.put('/products/edit', editProduct);
router.delete('/products/delete/:product_id', deleteProduct);

module.exports = router;
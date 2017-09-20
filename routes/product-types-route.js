'use strict';

const {Router} = require('express');
const router = Router();
const {getOneProductType, getAllProductTypes, addNewProductType, editProductType, deleteProductType} = require('../controllers/productTypesCtrl');

router.get('/product_type/:product_type_id', getOneProductType);
router.get('/product_types', getAllProductTypes);
router.post('/product_type/new', addNewProductType);
router.put('/product_type/edit', editProductType);
router.delete('/product_type/delete/:product_type_id', deleteProductType);

module.exports = router;
'use strict';

const {Router} = require('express');
const router = Router();
const {getOneProductType, getAllProductTypes, addNewProductType, editProductType, deleteProductType} = require('../controllers/productTypesCtrl');

router.get('/product_types/:product_type_id', getOneProductType);
router.get('/product_types', getAllProductTypes);
router.post('/product_types/new', addNewProductType);
router.put('/product_types/edit', editProductType);
router.delete('/product_types/delete/:product_type_id', deleteProductType);

module.exports = router;
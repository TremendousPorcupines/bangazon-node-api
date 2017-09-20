'use strict';

const Product_Type = require('../models/product_type');

module.exports.getOneProductType = ({params: {product_type_id}}, res, next) => {
  Product_Type.getOne(product_type_id)
  .then((product_type) => {
    res.status(200).json(product_type);
  });
};

module.exports.getAllProductTypes = (req, res, next) => {
  Product_Type.getAll()
  .then((product_types) => {
    res.status(200).json(product_types);
  });
};

module.exports.addNewProductType = ({body}, res, next) => {
  Product_Type.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editProductType = ({body}, res, next) => {
  Product_Type.edit(body)
  .then((product_type) => {
    res.status(200).json(product_type);
  });
};

module.exports.deleteProductType = ({params: {product_type_id}}, res, next) => {
  Product_Type.delete(product_type_id)
  .then((product_type) => {
    res.status(200).json(product_type);
  });
};
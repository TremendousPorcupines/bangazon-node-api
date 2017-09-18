'use strict';

const Product = require('../models/product');

module.exports.getOneProduct = ({params: {product_id}}, res, next) => {
  Product.getOne(product_id)
  .then((product) => {
    res.status(200).json(product);
  });
};

module.exports.getAllProducts = (req, res, next) => {
  Product.getAll()
  .then((products) => {
    res.status(200).json(products);
  });
};

module.exports.addNewProduct = ({body}, res, next) => {
  Product.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editProduct = ({body}, res, next) => {
  Product.edit(body)
  .then((product) => {
    res.status(200).json(product);
  });
};
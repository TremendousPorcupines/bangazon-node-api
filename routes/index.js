`use strict`;

const {Router} = require('express');
const router = Router();

router.use( require('./users-route'));

router.get('/', (req, res) => {
  res.json({
    "getUserById": "/api/v1/user/:<user_id>",
    "getAllUsers": "/api/v1/users",
    "addUser": "/api/v1/user/new",
    "editUser": "/api/v1/user/edit",
    "getProductById": "/api/v1/product/:<product_id>",
    "getAllProducts": "/api/v1/products",
    "addProduct": "/api/v1/product/new",
    "editProduct": "/api/v1/product/edit"
  });
});

module.exports = router;
`use strict`;

const {Router} = require('express');
const router = Router();

router.use( require('./users-route'));
router.use(require('./orders-route'));

router.get('/', (req, res) => {
  res.json({
    "getUserById": "/api/v1/user/:<user_id>",
    "getAllUsers": "/api/v1/users",
    "addUser": "/api/v1/user/new",
    "editUser": "/api/v1/user/edit",
    "getOrderById": "/api/v1/order/:<order_id>",
    "getAllOrders": "/api/v1/orders",
    "addOrder": "/api/v1/order/new",
    "editOrder": "/api/v1/order/edit",
    "deleteOrder": "/api/v1/order/delete/:<order_id>"
  });
});

module.exports = router;
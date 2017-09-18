'use strict';

const Order = require('../models/order');

module.exports.getOneOrder = ({params: {order_id}}, res, next) => {
  Order.getOne(order_id)
  .then((order) => {
    res.status(200).json(order);
  });
};

module.exports.getAllOrders = (req, res, next) => {
  Order.getAll()
  .then((orders) => {
    res.status(200).json(orders);
  });
};

module.exports.addNewOrder = ({body}, res, next) => {
  Order.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editOrder = ({body}, res, next) => {
  Order.edit(body)
  .then((order) => {
    res.status(200).json(order);
  });
};

module.exports.deleteOrder = ({params: {order_id}}, res, next) => {
  Order.delete(order_id)
  .then((order) => {
    res.status(200).json(order);
  });
};
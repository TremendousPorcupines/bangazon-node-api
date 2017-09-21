'use strict';

const Order = require('../models/order');
const Product = require('../models/product')

module.exports.getOneOrder = ({params: {order_id}}, res, next) => {
  Order.getOne(order_id)
  .then((order) => {
    Product.getAllByOrderId(order_id)
    .then((products) => {
      let order_obj = order;
      order_obj.products = products;
      res.status(200).json(order);
    })
  });
};

module.exports.getAllOrders = (req, res, next) => {
  Order.getAll()
  .then((orders) => {
    res.status(200).json(orders);
  });
};

module.exports.postToOrder = ({body}, res, next) => {
  Order.isOpenOrder(body.user_id)
  .then( (order) => {
    if (order) return Order.addToOpenOrder(order.order_id, body.product_id)
    else Order.addOne(body).then( (lastID) => { return Order.addToOpenOrder(lastID, body.product_id)})
  })
  .then((lastID) => {
    res.status(200).end("Product added to order"); //Experimenting with what to send back, if anything. Discuss.
  })
  .catch( (err) => {
    console.log('error on order post', err);
    next(err);
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
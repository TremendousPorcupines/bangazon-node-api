'use strict';

const PaymentType = require('../models/payment_type');

module.exports.getOnePaymentType = ({params: {payment_type_id}}, res, next) => {
  PaymentType.getOne(payment_type_id)
  .then((payment_type) => {
    res.status(200).json(payment_type);
  });
};

module.exports.getAllPaymentTypes = (req, res, next) => {
  PaymentType.getAll()
  .then((payment_types) => {
    res.status(200).json(payment_types);
  });
};

module.exports.addNewPaymentType = ({body}, res, next) => {
  PaymentType.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editPaymentType = ({body}, res, next) => {
  PaymentType.edit(body)
  .then((payment_type) => {
    res.status(200).json(payment_type);
  });
};

module.exports.deletePaymentType = ({params: {payment_type_id}}, res, next) => {
  PaymentType.delete(payment_type)
  .then((payment_type) => {
    res.status(200).json(payment_type);
  });
};
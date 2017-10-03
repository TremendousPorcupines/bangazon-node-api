'use strict';

const User = require('../models/user');

module.exports.getOneUser = ({params: {user_id}}, res, next) => {
  User.getOne(user_id)
  .then((user) => {
    res.status(200).json(user);
  });
};

module.exports.getAllUsers = (req, res, next) => {
  (req.query.active === 'false' ? User.getNoOrders() : User.getAll())
  .then((users) => {
    res.status(200).json(users);
  });
};

module.exports.addNewUser = ({body}, res, next) => {
  User.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editUser = ({body}, res, next) => {
  User.edit(body)
  .then((user) => {
    res.status(200).json(user);
  });
};
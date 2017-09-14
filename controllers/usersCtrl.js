'use strict';

const User = require('../models/user');

module.exports.getOneUser = ({params: {user_id}}, res, next) => {
  User.getOne(user_id)
  .then((user) => {
    res.status(200).json(user);
  });
};

module.exports.getAllUsers = (req, res, next) => {
  User.getAll()
  .then((users) => {
    res.status(200).json(users);
  });
};

module.exports.addNewUser = (req, res, next) => {
  ;
};

module.exports.editUser = (req, res, next) => {
  ;
;}
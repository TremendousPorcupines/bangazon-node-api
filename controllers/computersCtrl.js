'use strict';

const Computer = require('../models/computer');

module.exports.getOneComputer = ({params: {computer_id}}, res, next) => {
  Computer.getOne(computer_id)
  .then((computer) => {
    res.status(200).json(computer);
  });
};

module.exports.getAllComputers = (req, res, next) => {
  Computer.getAll()
  .then((computers) => {
    res.status(200).json(computers);
  });
};

module.exports.addNewComputer = ({body}, res, next) => {
  Computer.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editComputer = ({body}, res, next) => {
  Computer.edit(body)
  .then((computer) => {
    res.status(200).json(computer);
  });
};

module.exports.deleteComputer = ({params: {computer_id}}, res, next) => {
  Computer.delete(computer_id)
  .then((computer) => {
    res.status(200).json(computer);
  });
};
'use strict';

const Department = require('../models/department');

module.exports.getOnedepartment = ({params: {department_id}}, res, next) => {
  Department.getOne(department_id)
  .then((department) => {
    res.status(200).json(department);
  });
};

module.exports.getAlldepartments = (req, res, next) => {
  Department.getAll()
  .then((departments) => {
    res.status(200).json(departments);
  });
};

module.exports.addNewdepartment = ({body}, res, next) => {
  Department.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editdepartment = ({body}, res, next) => {
  Department.edit(body)
  .then((department) => {
    res.status(200).json(department);
  });
};
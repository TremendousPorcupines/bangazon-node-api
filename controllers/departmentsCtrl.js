'use strict';

const Department = require('../models/department');

module.exports.getOneDepartment = ({params: {department_id}}, res, next) => {
  Department.getOne(department_id)
  .then((department) => {
    res.status(200).json(department);
  });
};

module.exports.getAllDepartments = (req, res, next) => {
  Department.getAll()
  .then((departments) => {
    res.status(200).json(departments);
  });
};

module.exports.addNewDepartment = ({body}, res, next) => {
  Department.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editDepartment = ({body}, res, next) => {
  Department.edit(body)
  .then((department) => {
    res.status(200).json(department);
  });
};
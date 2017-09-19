'use strict';

const Training_Program = require('../models/training_program');

module.exports.getOneTrainingProgram = ({params: {training_program_id}}, res, next) => {
  Training_Program.getOne(training_program_id)
  .then((training_program) => {
    res.status(200).json(training_program);
  });
};

module.exports.getAllTrainingPrograms = (req, res, next) => {
  Training_Program.getAll()
  .then((training_programs) => {
    res.status(200).json(training_programs);
  });
};

module.exports.addNewTrainingProgram = ({body}, res, next) => {
  Training_Program.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editTrainingProgram = ({body}, res, next) => {
  Training_Program.edit(body)
  .then((training_program) => {
    res.status(200).json(training_program);
  });
};

module.exports.deleteTrainingProgram = ({params: {training_program_id}}, res, next) => {
  Training_Program.delete(training_program_id)
  .then((training_program) => {
    res.status(200).json(training_program);
  });
};
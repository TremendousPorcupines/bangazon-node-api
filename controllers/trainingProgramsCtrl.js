'use strict';

const TrainingProgram = require('../models/training_program');

module.exports.getOneTrainingProgram = ({params: {training_program_id}}, res, next) => {
  TrainingProgram.getOne(training_program_id)
  .then((training_program) => {
    res.status(200).json(training_program);
  });
};

module.exports.getAllTrainingPrograms = (req, res, next) => {
  TrainingProgram.getAll()
  .then((training_programs) => {
    res.status(200).json(training_programs);
  });
};

module.exports.addNewTrainingProgram = ({body}, res, next) => {
  TrainingProgram.addOne(body)
  .then(() => {
    res.status(200).end();
  });
};

module.exports.editTrainingProgram = ({body}, res, next) => {
  TrainingProgram.edit(body)
  .then((training_program) => {
    res.status(200).json(training_program);
  });
};

module.exports.deleteTrainingProgram = ({params: {training_program_id}}, res, next) => {
  TrainingProgram.delete(training_program_id)
  .then((training_program) => {
    res.status(200).json(training_program);
  });
};
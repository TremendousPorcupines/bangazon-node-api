'use strict';

const {Router} = require('express');
const router = Router();
const {getOneTrainingProgram, getAllTrainingPrograms, addNewTrainingProgram, editTrainingProgram, deleteTrainingProgram} = require('../controllers/trainingProgramsCtrl');

router.get('/training_program/:training_program_id', getOneTrainingProgram);
router.get('/training_programs', getAllTrainingPrograms);
router.post('/training_program/new', addNewTrainingProgram);
router.put('/training_program/edit', editTrainingProgram);
router.delete('/training_program/delete/:training_program_id', deleteTrainingProgram);

module.exports = router;
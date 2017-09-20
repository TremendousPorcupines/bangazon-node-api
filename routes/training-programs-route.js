'use strict';

const {Router} = require('express');
const router = Router();
const {getOneTrainingProgram, getAllTrainingPrograms, addNewTrainingProgram, editTrainingProgram, deleteTrainingProgram} = require('../controllers/trainingProgramsCtrl');

router.get('/training_programs/:training_program_id', getOneTrainingProgram);
router.get('/training_programs', getAllTrainingPrograms);
router.post('/training_programs/new', addNewTrainingProgram);
router.put('/training_programs/edit', editTrainingProgram);
router.delete('/training_programs/delete/:training_program_id', deleteTrainingProgram);

module.exports = router;
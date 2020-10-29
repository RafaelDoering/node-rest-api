const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students.controller');

router.post('/', studentsController.createStudent);

router.get('/:nusp', studentsController.getOneStudent);

router.get('/', studentsController.getAllStudents);

router.put('/:nusp', studentsController.updateOneStudent);

router.delete('/:nusp', studentsController.deleteOneStudent);

module.exports = router;

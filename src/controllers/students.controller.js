const students = require('../models/students');

function createStudent(req, res) {
  const { nusp, name } = req.body;

  return res.send(students.create(nusp, name));
}

function getOneStudent(req, res) {
  const nusp = req.params.nusp;

  return res.send(students.findOne(nusp));
}

function getAllStudents(req, res) {
  return res.send(students.findAll());
}

function updateOneStudent(req, res) {
  const nusp = req.params.nusp;
  const { name } = req.body;

  return res.send(students.updateOne(nusp, name));
}

function deleteOneStudent(req, res) {
  const nusp = req.params.nusp;

  return res.send(students.deleteOne(nusp));
}

module.exports = {
  createStudent,
  getOneStudent,
  getAllStudents,
  updateOneStudent,
  deleteOneStudent
};

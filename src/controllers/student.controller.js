const studentsService = require('../services/student.service');

async function createStudent(req, res) {
  const { nusp, name } = req.body;

  return res.send(await studentsService.create(nusp, name));
}

async function getOneStudent(req, res) {
  const nusp = req.params.nusp;

  return res.send(await studentsService.findOne(nusp));
}

async function getAllStudents(req, res) {
  return res.send(await studentsService.findAll());
}

async function updateOneStudent(req, res) {
  const nusp = req.params.nusp;
  const { name } = req.body;

  return res.send(await studentsService.updateOne(nusp, name));
}

async function deleteOneStudent(req, res) {
  const nusp = req.params.nusp;

  return res.send(await studentsService.deleteOne(nusp));
}

module.exports = {
  createStudent,
  getOneStudent,
  getAllStudents,
  updateOneStudent,
  deleteOneStudent
};

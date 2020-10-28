const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const students = require('./students');

app.post('/students', function (req, res) {
  const { nusp, name } = req.body;

  return res.send(students.create(nusp, name));
});

app.get('/students/:nusp', function (req, res) {
  const nusp = req.params.nusp;

  return res.send(students.findOne(nusp));
});

app.get('/students', function (req, res) {
  return res.send(students.findAll());
});

app.put('/students/:nusp', function (req, res) {
  const nusp = req.params.nusp;
  const { name } = req.body;

  return res.send(students.updateOne(nusp, name));
});

app.delete('/students/:nusp', function (req, res) {
  const nusp = req.params.nusp;

  return res.send(students.deleteOne(nusp));
});

app.listen(3000);

const Student = require('../models/student.model');

function create(nusp, name){
  return Student.create({ nusp: nusp, name: name });
}

function findOne(nusp){
  return Student.findOne({ nusp: nusp }).exec();
}

function findAll(){
  return Student.find({});
}

function updateOne(nusp, name){
  return Student.findOneAndUpdate({ nusp: nusp }, { name: name });
}

function deleteOne(nusp){
  return Student.findOneAndDelete({ nusp: nusp });
}

module.exports = {
  create,
  findOne,
  findAll,
  updateOne,
  deleteOne,
};

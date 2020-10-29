let students = [];

function create(nusp, name){
  const student = {
    nusp,
    name,
  }

  students.push(student);

  return student;
}

function findOne(nusp){
  const student = students.find(student => student.nusp === nusp);

  return student;
}

function findAll(){
  return students;
}

function updateOne(nusp, name){
  const student = students.find(student => student.nusp === nusp);

  student.name = name;

  return student;
}

function deleteOne(nusp){
  students = students.filter(student => student.nusp !== nusp);

  return students;
}

module.exports = {
  create,
  findOne,
  findAll,
  updateOne,
  deleteOne,
};

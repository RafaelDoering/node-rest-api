const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  nusp:  String,
  name: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

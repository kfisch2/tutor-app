const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new Schema(
  { username: {} },
  { email: {} },
  { password: {} },
  { subjects: [{ name: "" }] }
);


const Student = model('Student', studentSchema);

module.exports = Student;
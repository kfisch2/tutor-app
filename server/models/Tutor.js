const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const tutorSchema = new Schema(
  { username: {} },
  { password: {} },
  { email: {} },
  { subjects: [{}] }
);

const Tutor = model("Tutor", tutorSchema);
module.exports = Tutor;

const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const tutorSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    subjects: [{type: String, ref: "Subject"}],
    credentials: { type: String },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tutor = model("Tutor", tutorSchema);
module.exports = Tutor;

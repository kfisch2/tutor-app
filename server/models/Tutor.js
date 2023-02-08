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
    bio: {
      type: String,
      required: true,
      minlength: 10,
    },
    subjects: [{ type: String, ref: "Subject" }],
    credentials: [{ type: String }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tutor = model("Tutor", tutorSchema);
module.exports = Tutor;

// {  "username": "Tutor1",
//   "email": "tutor1@gmail.com",  "password": "yay123", "credentials": ["Masters in Education", "Bachelors in Mathematics"],
//   "bio": "Background in teaching math and science",  "subjects": ["algebra", "chemistry", "astronomy", "pre-algebra", "calculus", "trigonometry", "geometry", "physics", "oceanography", "geology"],

// }

// {  "username": "Tutor2",
//   "email": "tutor2@gmail.com",  "password": "yay123", "credentials": ["Bachelors in Mathematics"],
//   "bio": "Background in teaching math",  "subjects": ["algebra", "pre-algebra", "calculus", "trigonometry", "geometry"],

// }

// {  "username": "Tutor3",
//   "email": "tutor3@gmail.com",  "password": "yay123", "credentials": ["Masters in Education", "Bachelors in History"],
//   "bio": "Background in teaching history",  "subjects": [
//   "world history",
//   "u.s. history",
//   "european history",
//   "east asia history"
// ],
// }

// {  "username": "Tutor4",
//   "email": "tutor4@gmail.com",  "password": "yay123", "credentials": ["Bachelors in Japanese"],
//   "bio": "I love Japanese language and culture! I have been to Japan several times and loved it.",  "subjects": ["japanese"],
// }

// {  "username": "Tutor5",
//   "email": "tutor5@gmail.com",  "password": "yay123", "credentials": ["Masters in Education", "Bachelors in French"],
//   "bio": "Background in teaching French and history",  "subjects":[
//   "world history",
//   "u.s. history",
//   "european history",
//   "east asia history",
//   "French"
// ],

// }

// {  "username": "Tutor6",
//   "email": "tutor6@gmail.com",  "password": "yay123", "credentials": ["Masters in Education", "Bachelors in French"],
//   "bio": "Background in teaching French, history, and economics",  "subjects": [
//   "world history",
//   "u.s. history",
//   "european history",
//   "east asia history",
//   "French", "economics"
// ],

// }

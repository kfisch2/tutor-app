const { Schema, model } = require("mongoose");

const subjectSchema = new Schema(
  {
    mathematics: [{ type: String, trim: true }],
    science: [{ type: String, trim: true }],
    socialScience: [{ type: String, trim: true }],
    language: [{ type: String, trim: true }],
    history: [{ type: String, trim: true }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Subject = model("Subject", subjectSchema);
module.exports = Subject;

// {
//   "mathematics": ["pre-algebra", "algebra", "geometry", "trigonometry", "calculus"],
//   "science": ["geology", "oceanography", "astronomy"],
//   "socialScience": ["economics", "u.s. government and politics", "human geography"],
//   "language": ["spanish", "japanese", "french", "american sign language"],
//   "history": ["world history", "u.s. history", "european history", "east asia history"]
// }

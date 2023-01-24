const { Schema, model } = require("mongoose");

const subjectSchema = new Schema(
  {
    mathematics: [{ type: String }],
    science: [{ type: String }],
    socialSciences: [{ type: String }],
    languages: [{ type: String }],
    history: [{ type: String }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Subject = model("Subject", subjectSchema);
module.exports = Subject;

/*   mathematics: [
    { name: "pre-algebra" },
    { name: "geometry" },
    { name: "6th grade" },
    { name: "algebra" },
    { name: "calculus" },
  ],
  science: [
    { name: "geology" },
    { name: "oceanology" },
    { name: "astronomy" },
  ],
  socialSciences: [
    { name: "economics" },
    { name: "u.s. government and politics" },
    { name: "human geography" },
  ],
  languages: [
    { name: "spanish" },
    { name: "french" },
    { name: "japanese" },
    { name: "american sign language" },
  ],
  history: [
    { name: "world history" },
    { name: "u.s. history" },
    { name: "european history" },
    { name: "east asia history" },
  ],*/

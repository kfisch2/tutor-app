const { Student, Tutor, Subject } = require("../models");

const resolvers = {
  Query: {
    students: async () => {
      return Student.find().select("-__v -password");
    },
  },

  Mutation: {
    addStudent: async (parent, args) => {
      const student = await Student.create(args);
      return student;
    },
  },
};

module.exports = resolvers;

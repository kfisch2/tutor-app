const { Subject, Student, Tutor } = require("../models");

const resolvers = {
  Query: {
    students: async () => {
      return Student.find().select("-password");
    },
    subjects: async () => {
      return Subject.find().select("-__v")
    }
  },

  Mutation: {
    addStudent: async (parent, args) => {
      const student = await Student.create(args);
      return student;
    },

    addTutor: async(parent, args) => {
      const tutor = await Tutor.create(args);
      return tutor;
    },

    addSubjects: async (parent, args) => {
      const subject = await Subject.create(args);
      return subject;
    },

    deleteAllSubjects: async (parent, args) => {
      const deletedSubject = await Subject.deleteMany(args);
      return deletedSubject;
    },

    deleteAllStudents: async(parent, args) => {
      const deletedStudents = await Student.deleteMany(args);
      return deletedStudents;
    }
  },
};

module.exports = resolvers;

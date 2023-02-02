const { Subject, Student, Tutor } = require("../models");

const resolvers = {
  Query: {
    allStudents: async () => {
      return Student.find().select("-password");
    },
    studentByUsername: async (parent, { username }) => {
      return Student.findOne({ username }).select("-password");
    },
    subjects: async () => {
      return Subject.find().select("-__v");
    },
    allTutors: async (parent, args) => {
      return Tutor.find().select('-__v')
    },
    tutorBySubject: async (parent, args) => {
      return Tutor.find(args).select("-__v");
    },
  },

  Mutation: {
    addStudent: async (parent, args) => {
      const student = await Student.create(args);
      return student;
    },

    addTutor: async (parent, args) => {
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

    deleteAllStudents: async (parent, args) => {
      const deletedStudents = await Student.deleteMany(args);
      return deletedStudents;
    },
  },
};

module.exports = resolvers;

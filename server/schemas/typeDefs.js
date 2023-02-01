const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Subject {
    # subjectName: [String]
    mathematics: [String]
    science: [String]
    # socialScience: [String]
    # language: [String]
    # history: [String]
  }

  type Tutor {
    _id: ID
    username: String
    email: String
    subjects: [Subject]
    credentials: String
  }

  type Student {
    _id: ID
    username: String
    email: String
    password: String
    subjects: [String]
  }

  type Query {
    students: [Student]
    # student(username: String!): Student
    tutors: [Tutor]
    subjects: [Subject]
    # tutor(subjects: String!): Tutor
    # tutor(username: String!): Tutor
  }

  type Mutation {
    # login:(email: String!, password: String!): Student

    addSubjects(mathematics: [String], science: [String]): Subject

    addTutor(
      username: String!
      email: String!
      password: String!
      subjects: [String]!
      credentials: [String]!
    ): Tutor

    addStudent(
      username: String!
      email: String!
      password: String!
      subjects: [String]
    ): Student

    deleteAllSubjects(
      mathematics: String
      science: String
      history: String
      language: String
      socialScience: String
    ): Subject

    deleteAllStudents(
      username: String
      password: String
      email: String
      subjects: [String]
    ): Student

    # addTutor(username: String!, email: String!, password: String!)
  }
`;
module.exports = typeDefs;

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Subject {
    mathematics: [String]
    science: [String]
    socialScience: [String]
    language: [String]
    history: [String]
  }

  type Tutor {
    _id: ID
    username: String
    email: String
    password: String
    bio: String
    subjects: [String]
    credentials: [String]
  }

  type Student {
    _id: ID
    username: String
    email: String
    password: String
    subjects: [String]
  }

  type Query {
    allStudents: [Student]
    studentByUsername(username: String!): Student
    allTutors: [Tutor]
    subjects: [Subject]
    tutorBySubject(subjects: String!): [Tutor]
  }

  type Mutation {
    # login:(email: String!, password: String!): Student

    # ADD DATA
    addSubjects(
      mathematics: [String]
      science: [String]
      socialScience: [String]
      history: [String]
      language: [String]
    ): Subject

    addTutor(
      username: String!
      email: String!
      password: String!
      bio: String!
      subjects: [String]!
      credentials: [String]!
    ): Tutor

    addStudent(
      username: String!
      email: String!
      password: String!
      subjects: [String]
    ): Student

    # DELETE DATA
    deleteAllSubjects(
      mathematics: String
      science: String
      history: String
      language: String
      socialScience: String
    ): Subject

    deleteAllTutors(
      _id: ID
    ): Tutor

    deleteAllStudents(
      _id: ID
    ): Student

  }
`;
module.exports = typeDefs;

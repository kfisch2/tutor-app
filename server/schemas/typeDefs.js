const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tutor {
    _id: ID
    username: String
    email: String
    # subjects: [Subject]
  }

  type Student {
    _id: ID
    username: String
    email: String
    password: String
    # subjects: [String]
  }

  type Subject {
    mathematics: [String]
    science: [String]
    socialScience: [String]
    language: [String]
    history: [String]
  }

  type Query {
    students: [Student]
    # student(username: String!): Student
    # tutors: [Tutor]
    subjects: [Subject]
    # tutor(subjects: String!): Tutor
    # tutor(username: String!): Tutor
  }

  type Mutation { 

    # login:(email: String!, password: String!): Student

    addSubjects(
      mathematics: [String]
      science: [String]
      language: [String]
      socialScience: [String]
      history: [String]
    ): Subject

    addStudent(
      username: String!
      email: String!
      password: String!
      # subjects: [String]
    ): Student
    
    deleteAllSubjects(
      mathematics: String
      science: String
      history: String
      language: String
      socialScience: String
      ): Subject
  
    # addTutor(username: String!, email: String!, password: String!)
  }
`;
module.exports = typeDefs;

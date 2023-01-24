const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Tutor {
    _id: ID
    username: String
    email: String
    subjects: [Subject]
  }

  type Student {
    _id: ID
    username: String
    email: String
    # subjects: [Subject]
  }

  type Subject {
    _id: ID
    name: String!
  }

  type Query {
    students: [Student]
    # student(username: String!): Student
    # tutors: [Tutor]
    # subjects: [Subject]
    # tutor(subjects: String!): Tutor
    # tutor(username: String!): Tutor
  }

  type Mutation {
    # login:(email: String!, password: String!): Student
    addStudent(username: String!, email: String!, password: String!): Student
    # addTutor(username: String!, email: String!, password: String!)
  }
`;

module.exports = typeDefs;

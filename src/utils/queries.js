import { gql } from "@apollo/client";

export const QUERY_SUBJECTS = gql`
  query getSubjects {
    subjects {
      mathematics
      science
      socialScience
      history
      language
    }
  }
`;

export const QUERY_STUDENTS = gql`
  query getStudents {
    students {
      _id
      email
      username
      subjects
    }
  }
`;

export const QUERY_TUTOR = gql`
  query getTutors {
    tutors {
      _id
      email
      username
      subjects
      credentials
    }
  }
`;

import { gql } from "@apollo/client";

export const QUERY_SUBJECTS = gql`
  query getSubjects {
    subjects {
      mathematics
      science
    }
  }
`;

export const QUERY_STUDENTS = gql`
  query getStudents {
    students {
      _id
      email
      username
    }
  }
`;

export const QUERY_TUTOR = gql`
  query getTutors {
    tutors {
      _id
      email
      username
      credentials
    }
  }
`;

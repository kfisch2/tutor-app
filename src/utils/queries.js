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
  query allStudents {
    allStudents {
      _id
      email
      username
      subjects
    }
  }
`;

export const QUERY_TUTORS = gql`
  query allTutors {
    allTutors {
      _id
      email
      username
      bio
      credentials
      subjects
    }
  }
`;

export const QUERY_TUTORS_BY_SUBJECT = gql`
  query tutorBySubject($subjects: String!) {
    tutorBySubject(subjects: $subjects) {
      username
      email
      bio
      credentials
      subjects
    }
  }
`;

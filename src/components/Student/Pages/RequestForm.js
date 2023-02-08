import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";

const RequestForm = () => {
  const { data: subjectData } = useQuery(QUERY_SUBJECTS);
  const [
    getTutors,
    { loading: loadingTutor, error: tutorError, data: tutorData },
  ] = useLazyQuery(QUERY_TUTORS_BY_SUBJECT, {
    fetchPolicy: "network-only",
  });
  // POPULATE SUBJECTS

  const populateTutors = () => {
    loadingTutor
      ? console.log("loading tutors...")
      : console.log("not loading tutors");
    tutorError
      ? console.log("error loading tutors")
      : console.log("no error loading tutuors");
    tutorData ? console.log(tutorData) : console.log("no tutor data");
  };
  return (
    <>
      <h1 onClick={() => populateTutors()}>Request Form!</h1>
      <h2>Science: </h2>
      {subjectData?.subjects[0].science.map((subject) => {
        return (
          <button
            onClick={() => {
              getTutors({ variables: { subjects: subject } });
              populateTutors();
            }}
            className={subject}
            key={subject}
          >
            {subject}
          </button>
        );
      })}

      <h2>Mathematics: </h2>
      {subjectData?.subjects[0].mathematics.map((subject, i) => {
        return (
          <button
            onClick={() => {
              getTutors({ variables: { subjects: subject } });
              populateTutors();
            }}
            className={subject}
            key={subject}
          >
            {subject}
          </button>
        );
      })}

      <h2>History: </h2>
      {subjectData?.subjects[0].history.map((subject, i) => {
        return (
          <button
            onClick={() => {
              getTutors({ variables: { subjects: subject } });
              populateTutors();
            }}
            className={subject}
            key={subject}
          >
            {subject}
          </button>
        );
      })}

      <h2>Language: </h2>
      {subjectData?.subjects[0].language.map((subject, i) => {
        return (
          <button
            onClick={() => {
              getTutors({ variables: { subjects: subject } });
              populateTutors();
            }}
            className={subject}
            key={subject}
          >
            {subject}
          </button>
        );
      })}

      <h2>Social Science: </h2>
      {subjectData?.subjects[0].socialScience.map((subject, i) => {
        return (
          <button
            onClick={() => {
              getTutors({ variables: { subjects: subject } });
              populateTutors();
            }}
            className={subject}
            key={subject}
          >
            {subject}
          </button>
        );
      })}
    </>
  );
};

export default RequestForm;

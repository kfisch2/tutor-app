import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";

const RequestForm = () => {
  const { data: subjectData } = useQuery(QUERY_SUBJECTS);
  const [getTutors, { called, loading, data }] = useLazyQuery(
    QUERY_TUTORS_BY_SUBJECT,
    {
      fetchPolicy: "network-only",
      // onCompleted: (response) => {
      //   for (let i = 0; i < response.length; i++) {
      //     return <li>{response[i]}</li>;
      //   }
      // },
    }
  );
  // POPULATE SUBJECTS

  const handleSubmit = (subject) => {
    getTutors({
      variables: { subjects: subject },
      onCompleted: (response) => {},
    });
  };

  const renderTutors = (response) => {
    const tutor = response.tutorBySubject;
    for (let i = 0; i < tutor.length; i++) {
      console.log(tutor[i]);
    }
  };

  return (
    <>
      <h1>Request Form!</h1>
      <h2>Science: </h2>
      {subjectData?.subjects[0].science.map((subject) => {
        return (
          <>
            <button
              onClick={() => {
                getTutors({
                  variables: { subjects: subject },
                  onCompleted: (response) => {
                    renderTutors(response);
                  },
                });
              }}
              className={subject}
              key={subject}
            >
              {subject}
            </button>
            {/* <ul>
              {data?.tutorBySubject && <li>{[data.tutorBySubject[0]]}</li>}
            </ul> */}
          </>
        );
      })}

      <h2>Mathematics: </h2>
      {subjectData?.subjects[0].mathematics.map((subject, i) => {
        return (
          <button
            onClick={() => {
              // getTutors({ variables: { subjects: subject } });
              // populateTutors();
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
              // getTutors({ variables: { subjects: subject } });
              // populateTutors();
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
              // getTutors({ variables: { subjects: subject } });
              // populateTutors();
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
              // getTutors({ variables: { subjects: subject } });
              // populateTutors();
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

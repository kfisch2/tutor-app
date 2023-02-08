import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";

const RequestForm = () => {
  // POPULATE SUBJECTS
  const { data: subjectData } = useQuery(QUERY_SUBJECTS);

  const [fetchTutors] = useLazyQuery(QUERY_TUTORS_BY_SUBJECT);

  const renderTutors = (response) => {
    const tutor = response.tutorBySubject;
    const tutorList = document.querySelector(".tutorList");
    console.log(`${tutor.length} tutor(s) available`);
    if (tutor) {
      for (let i = 0; i < tutor.length; i++) {
        const individualTutor = document.createElement("li");
        individualTutor.textContent = tutor[i].username;
        tutorList.appendChild(individualTutor);
      }
    }
  };

  return (
    <div className="requestFormPage">
      <div className="subjectList">
        <h1>Request Form!</h1>
        <h2>Science: </h2>
        {subjectData?.subjects[0].science.map((subject) => {
          return (
            <>
              <button
                onClick={() => {
                  fetchTutors({
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
            </>
          );
        })}

        <h2>Mathematics: </h2>
        {subjectData?.subjects[0].mathematics.map((subject, i) => {
          return (
            <button
              onClick={() => {
                fetchTutors({
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
          );
        })}

        <h2>History: </h2>
        {subjectData?.subjects[0].history.map((subject, i) => {
          return (
            <button
              onClick={() => {
                fetchTutors({
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
          );
        })}

        <h2>Language: </h2>
        {subjectData?.subjects[0].language.map((subject, i) => {
          return (
            <button
              onClick={() => {
                fetchTutors({
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
          );
        })}

        <h2>Social Science: </h2>
        {subjectData?.subjects[0].socialScience.map((subject, i) => {
          return (
            <button
              onClick={() => {
                fetchTutors({
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
          );
        })}
      </div>
      <div className="tutorList">
        <h1>Available Tutors:</h1>
        <ul className="tutorList"/>
      </div>
    </div>
  );
};

export default RequestForm;

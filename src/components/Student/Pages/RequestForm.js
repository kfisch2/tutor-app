import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";
import TutorCard from "./TutorCard";

const RequestForm = () => {
  // POPULATE SUBJECTS
  const { data: subjectData } = useQuery(QUERY_SUBJECTS);

  const [data, setData] = useState("");
  const [queryCalled, setQueryCalled] = useState(false);

  const [fetchTutors] = useLazyQuery(QUERY_TUTORS_BY_SUBJECT);

  const renderTutors = (response) => {
    const tutor = response.tutorBySubject;
    setData(tutor);

    // const tutorList = document.querySelector(".tutorList");

    // if (tutor) {
    //   for (let i = 0; i < tutor.length; i++) {
    //     const tutorContainer = document.createElement("div");
    //     const tutorUsername = document.createElement("h4");
    //     tutorUsername.textContent = tutor[i].username;
    //     const tutorBio = document.createElement("p");
    //     tutorBio.textContent = tutor[i].bio;
    //     tutorContainer.appendChild(tutorUsername);
    //     tutorContainer.appendChild(tutorBio);
    //     const tutorSubjects = tutor[i].subjects;
    //     const allSubjects = document.createElement("ul");
    //     for (let j = 0; j < tutorSubjects.length; j++) {
    //       const singleSubject = document.createElement("li");
    //       singleSubject.textContent = tutorSubjects[j];
    //       allSubjects.appendChild(singleSubject);
    //       tutorContainer.appendChild(allSubjects);
    //     }

    //     tutorList.appendChild(tutorContainer);
    //   }
    // }
  };

  return (
    <div className="requestFormPage">
      <div className="subjects">
        <h2>Which subject do you need help in?</h2>
        {/* SCIENCE */}
        <DropdownButton
          as={ButtonGroup}
          title={"Science"}
          className="subjectBtn"
        >
          {subjectData?.subjects[0].science.map((subject) => (
            <>
              <Dropdown.Item
                className={"dropdownItems"}
                key={subject}
                onClick={() => {
                  setQueryCalled(true);
                  fetchTutors({
                    variables: { subjects: subject },
                    onCompleted: (response) => {
                      renderTutors(response);
                    },
                  });
                }}
              >
                {subject}
              </Dropdown.Item>{" "}
            </>
          ))}
        </DropdownButton>
        {/* MATHEMATICS */}
        <DropdownButton
          as={ButtonGroup}
          title={"Mathematics"}
          className="subjectBtn"
        >
          {subjectData?.subjects[0].mathematics.map((subject) => (
            <>
              <Dropdown.Item
                className={"dropdownItems"}
                eventKey="1"
                key={subject}
                onClick={() => {
                  setQueryCalled(true);
                  fetchTutors({
                    variables: { subjects: subject },
                    onCompleted: (response) => {
                      renderTutors(response);
                    },
                  });
                }}
              >
                {subject}
              </Dropdown.Item>{" "}
            </>
          ))}
        </DropdownButton>
        {/* SOCIAL SCIENCES */}{" "}
        <DropdownButton
          as={ButtonGroup}
          title={"Social Science"}
          className="subjectBtn"
        >
          {subjectData?.subjects[0].socialScience.map((subject) => (
            <>
              <Dropdown.Item
                className={"dropdownItems"}
                eventKey="1"
                key={subject}
                onClick={() => {
                  setQueryCalled(true);
                  fetchTutors({
                    variables: { subjects: subject },
                    onCompleted: (response) => {
                      renderTutors(response);
                    },
                  });
                }}
              >
                {subject}
              </Dropdown.Item>{" "}
            </>
          ))}
        </DropdownButton>
        {/* HISTORY */}
        <DropdownButton
          as={ButtonGroup}
          title={"History"}
          className="subjectBtn"
        >
          {subjectData?.subjects[0].history.map((subject) => (
            <>
              <Dropdown.Item
                className={"dropdownItems"}
                eventKey="1"
                key={subject}
                onClick={() => {
                  setQueryCalled(true);
                  fetchTutors({
                    variables: { subjects: subject },
                    onCompleted: (response) => {
                      renderTutors(response);
                    },
                  });
                }}
              >
                {subject}
              </Dropdown.Item>{" "}
            </>
          ))}
        </DropdownButton>
        {""}
        {/* LANGUAGES */}
        <DropdownButton
        
          as={ButtonGroup}
          title={"Language"}
          className="subjectBtn"
        >
          {subjectData?.subjects[0].language.map((subject) => (
            <>
              <Dropdown.Item
                className={"dropdownItems"}
                eventKey="1"
                key={subject}
                onClick={() => {
                  setQueryCalled(true);
                  fetchTutors({
                    variables: { subjects: subject },
                    onCompleted: (response) => {
                      renderTutors(response);
                    },
                  });
                }}
              >
                {subject}
              </Dropdown.Item>{" "}
            </>
          ))}
        </DropdownButton>
      </div>
      <TutorCard data={data} queryCalled={queryCalled} className="tutorCard" />
    </div>
  );
};

export default RequestForm;

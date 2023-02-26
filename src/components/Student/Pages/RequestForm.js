import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";
import TutorCard from "./TutorCard";

const RequestForm = () => {
  // Render subjects
  const { data: subjectData } = useQuery(QUERY_SUBJECTS);

  // Tutor data
  const [data, setData] = useState("");
  const [requestedSubject, setRequestedSubject] = useState("");
  const [queryCalled, setQueryCalled] = useState(false);

  const [requestedCost, setRequestedCost] = useState(0);

  const [fetchTutors] = useLazyQuery(QUERY_TUTORS_BY_SUBJECT);

  const value = document.querySelector("#value");
  const cost = document.querySelector("#cost");

  const displayCost = () => {
    cost.addEventListener("input", (event) => {
      if (event.target.value) {
        value.textContent = event.target.value;
      } else {
        value.textContent = "";
      }
    });
  };

  const renderTutors = (response) => {
    const tutor = response.tutorBySubject;
    setData(tutor);
  };

  return (
    <div className="requestFormPage">
      <form className="requestForm">
        <div className="subjects">
          <DropdownButton
            as={ButtonGroup}
            title={"Science"}
            className="subjectBtn"
          >
            {" "}
            {/* SCIENCE */}
            {subjectData?.subjects[0].science.map((subject) => (
              <>
                <Dropdown.Item
                  className={"dropdownItems"}
                  key={subject}
                  onClick={() => {
                    setRequestedSubject(subject);
                  }}
                >
                  {subject}
                </Dropdown.Item>{" "}
              </>
            ))}
          </DropdownButton>
          <DropdownButton
            as={ButtonGroup}
            title={"Math"}
            className="subjectBtn"
          >
            {" "}
            {/* MATH */}
            {subjectData?.subjects[0].mathematics.map((subject) => (
              <>
                <Dropdown.Item
                  className={"dropdownItems"}
                  key={subject}
                  onClick={() => {
                    setRequestedSubject(subject);
                  }}
                >
                  {subject}
                </Dropdown.Item>{" "}
              </>
            ))}
          </DropdownButton>
          <DropdownButton
            as={ButtonGroup}
            title={"Social Sciences"}
            className="subjectBtn"
          >
            {" "}
            {/* SocialScience */}
            {subjectData?.subjects[0].socialScience.map((subject) => (
              <>
                <Dropdown.Item
                  className={"dropdownItems"}
                  key={subject}
                  onClick={() => {
                    setRequestedSubject(subject);
                  }}
                >
                  {subject}
                </Dropdown.Item>{" "}
              </>
            ))}
          </DropdownButton>
          <DropdownButton
            as={ButtonGroup}
            title={"History"}
            className="subjectBtn"
          >
            {" "}
            {/* History */}
            {subjectData?.subjects[0].history.map((subject) => (
              <>
                <Dropdown.Item
                  className={"dropdownItems"}
                  key={subject}
                  onClick={() => {
                    setRequestedSubject(subject);
                  }}
                >
                  {subject}
                </Dropdown.Item>{" "}
              </>
            ))}
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            title={"Language"}
            className="subjectBtn"
          >
            {" "}
            {/* Languages */}
            {subjectData?.subjects[0].language.map((subject) => (
              <>
                <Dropdown.Item
                  className={"dropdownItems"}
                  key={subject}
                  onClick={() => {
                    setRequestedSubject(subject);
                  }}
                >
                  {subject}
                </Dropdown.Item>{" "}
              </>
            ))}
          </DropdownButton>
        </div>
        <div className="costDiv">
          {" "}
          {requestedSubject ? (
            <>
              <div className="selectedSubject">Subject: {requestedSubject}</div>
              <div className="costDiv">
                <h1>Cost</h1>
                <div>
                  <input
                    type="range"
                    id="cost"
                    min="0"
                    max="100"
                    step="5"
                    onClick={() => displayCost()}
                  ></input>
                </div>{" "}
                <div>
                  <span>$</span>
                  <output id="value"></output>
                  <span>/hr</span>
                </div>
              </div>
            </>
          ) : (
            <div>Pick a subject!</div>
          )}
        </div>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setQueryCalled(true);
            setRequestedCost(value.textContent);
            fetchTutors({
              variables: { subjects: requestedSubject },
              onCompleted: (response) => {
                renderTutors(response);
              },
            });
          }}
        >
          Find your tutor!
        </button>
      </form>
      <div className="tutorCards">
        {" "}
        <TutorCard
          data={data}
          queryCalled={queryCalled}
          requestedCost={requestedCost}
          requestedSubject={requestedSubject}
        />
      </div>
    </div>
  );
};

export default RequestForm;

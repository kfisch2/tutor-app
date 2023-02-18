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
          <h2>Subject</h2>
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
                    setRequestedSubject(subject);
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
                    setRequestedSubject(subject);
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
                    setRequestedSubject(subject);
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
                    setRequestedSubject(subject);
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
                    setRequestedSubject(subject);
                  }}
                >
                  {subject}
                </Dropdown.Item>{" "}
              </>
            ))}
          </DropdownButton>
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
          </div>{" "}
          <div className="selectedSubject">{requestedSubject}</div>
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
      <TutorCard
        data={data}
        queryCalled={queryCalled}
        requestedCost={requestedCost}
        requestedSubject={requestedSubject}
        className="tutorCards"
      />
    </div>
  );
};

export default RequestForm;

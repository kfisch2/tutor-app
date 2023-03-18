import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SUBJECTS } from "../../../utils/queries";
import { QUERY_TUTORS_BY_SUBJECT } from "../../../utils/queries";
import TutorCard from "./TutorCard";
import "./../../Student/Student.css";

const RequestForm = () => {
  // Render subjects
  const { data: subjectData } = useQuery(QUERY_SUBJECTS);

  // Tutor data
  const [data, setData] = useState("");
  const [requestedSubject, setRequestedSubject] = useState("");
  const [queryCalled, setQueryCalled] = useState(false);
  const [fetchTutors] = useLazyQuery(QUERY_TUTORS_BY_SUBJECT);

  // Cost
  const [requestedCost, setRequestedCost] = useState(0);
  const cost = document.querySelector(".costDisplay");
  // if ((requestedCost === 0)) {
  //   cost.style.display = "none";
  // } else {
  //   cost.style.display = "block";
  // }

  // form submission
  const renderTutors = (response) => {
    const tutor = response.tutorBySubject;
    setData(tutor);
  };

  const form = document.querySelector(".requestForm");

  const handleSubmit = () => {
    form.style.display = "none";
    setQueryCalled(true);
    fetchTutors({
      variables: { subjects: requestedSubject },
      onCompleted: (response) => {
        renderTutors(response);
      },
    });
  };

  // enable button when form filled
  const btn = document.getElementById("button");
  if (requestedCost > 0 && requestedSubject) {
    btn.disabled = false;
  }

  return (
    <div className="requestFormPage">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="requestForm"
      >
        <h2>Select a subject</h2>
        <div className="subjects">
          <DropdownButton
            variant="secondary"
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
            variant="secondary"
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
            variant="secondary"
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
            variant="secondary"
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
            variant="secondary"
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
        <div>
          {" "}
          {requestedSubject ? (
            <>
              <div className="selectedSubject">Subject: {requestedSubject}</div>
              <div className="costDiv">
                <h1>Cost</h1>
                <DropdownButton>
                  <Dropdown.Item onClick={() => setRequestedCost(10)}>
                    $10/hr
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setRequestedCost(20)}>
                    $20/hr
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setRequestedCost(30)}>
                    $30/hr
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setRequestedCost(40)}>
                    $40/hr
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setRequestedCost(100000)}>
                    $50+
                  </Dropdown.Item>
                </DropdownButton>

                <div className="costDisplay">${requestedCost}/hr</div>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <button id="button" disabled type="submit">
          Find your tutor!
        </button>
      </form>
      <div className="tutorCards">
        {" "}
        <TutorCard
          data={data}
          queryCalled={queryCalled}
          setQueryCalled={setQueryCalled}
          requestedCost={requestedCost}
          setRequestedCost={setRequestedCost}
          requestedSubject={requestedSubject}
          setRequestedSubject={setRequestedSubject}
        />
      </div>
    </div>
  );
};

export default RequestForm;

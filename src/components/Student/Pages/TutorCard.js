import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TutorCard = ({
  queryCalled,
  data,
  requestedCost,
  requestedSubject,
  setRequestedCost,
  setRequestedSubject,
  setQueryCalled,
}) => {
  const [show, setShow] = useState(false);
  const [modalInfo, setmodalInfo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // back button
  const form = document.querySelector(".requestForm");
  const handleBack = () => {
    // request form display block
    form.style.display = "block";
    // set states back to intials
    setRequestedCost(0);
    setQueryCalled(false);
    setRequestedSubject("");
  };

  if (queryCalled) {
    if (data) {
      const filteredData = data.filter((tutor) => tutor.cost <= requestedCost);
      if (filteredData.length === 0) {
        return (
          <>
            {" "}
            <div style={{ fontSize: "x-large" }}>No tutors found</div>
            <div>
              <span onClick={() => handleBack()} className="backBtn">
                New request
              </span>
            </div>
          </>
        );
      } else {
        return (
          <>
            {/* TUTOR CARD */}
            <div>
              Showing tutors for {requestedSubject} at ${requestedCost} per hour
            </div>

            <ul>
              {filteredData?.map((tutor, i) => (
                <>
                  <li key={i} className="tutorCard">
                    <div
                      onClick={() => {
                        setmodalInfo(tutor);
                        handleShow();
                      }}
                    >
                      <h2>{tutor.username}</h2>
                      <p>${tutor.cost}/hr</p>
                    </div>{" "}
                  </li>{" "}
                  {/* MODAL */}
                  <Modal
                    className="modal"
                    show={show}
                    onHide={handleClose}
                    centered
                  >
                    <Modal.Header>
                      <Modal.Title>{modalInfo.username}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>{modalInfo.bio}</div>
                      <div>{modalInfo.credentials}</div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="dark"
                        onClick={() => console.log("profile")}
                      >
                        Go to {modalInfo.username}'s profile
                      </Button>{" "}
                      <Button variant="light" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              ))}{" "}
            </ul>
            {/* back button */}

            <div>
              <span onClick={() => handleBack()} className="backBtn">
                New request
              </span>
            </div>
          </>
        );
      }
    }
  }
};

export default TutorCard;

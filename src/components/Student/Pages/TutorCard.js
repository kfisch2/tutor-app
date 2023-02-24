import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TutorCard = ({ queryCalled, data, requestedCost, requestedSubject }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (queryCalled) {
    if (data) {
      const filteredData = data.filter((tutor) => tutor.cost <= requestedCost);
      if (filteredData.length == 0) {
        return <>No tutors found</>;
      } else {
        return (
          <>
            {/* TUTOR CARD */}
            <ul>
              {filteredData.map((tutor, i) => (
                <>
                  {" "}
                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header>
                      <Modal.Title>{tutor.username}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>{tutor.bio}</div>
                      <div>{tutor.credentials}</div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="dark"
                        onClick={() => console.log("profile")}
                      >
                        Go to {tutor.username}'s profile
                      </Button>{" "}
                      <Button variant="light" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <li key={i} className="tutorCard">
                    <div onClick={handleShow}>
                      <h2>{tutor.username}</h2>
                      <p>${tutor.cost}/hr</p>
                    </div>{" "}
                  </li>{" "}
                </>
              ))}{" "}
            </ul>
            {/* MODAL */}
          </>
        );
      }
    }
  }
};

export default TutorCard;

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TutorCard = ({ queryCalled, data, requestedCost }) => {
  const [show, setShow] = useState(false);
  const [modalInfo, setmodalInfo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (queryCalled) {
    if (data) {
      const filteredData = data.filter((tutor) => tutor.cost <= requestedCost);
      if (filteredData.length === 0) {
        return <>No tutors found</>;
      } else {
        return (
          <>
            {/* TUTOR CARD */}

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
          </>
        );
      }
    }
  }
};

export default TutorCard;

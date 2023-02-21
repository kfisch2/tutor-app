import React, { useState } from "react";

const TutorCard = ({ queryCalled, data, requestedCost, requestedSubject }) => {
  const tutorInfo = document.querySelector(".tutorInfo");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  if (queryCalled) {
    tutorInfo.textContent = "";
    if (data) {
      const filteredData = data.filter((tutor) => tutor.cost <= requestedCost);
      if (filteredData.length == 0) {
        tutorInfo.textContent =
          "Sorry, no tutors matching your request found :(";
      } else {
        for (let i = 0; i < filteredData.length; i++) {
          const tutorContainer = document.createElement("div");
          const username = document.createElement("h3");
          const cost = document.createElement("li");
          // const credentials = document.createElement('li');
          // const bio = document.createElement('p');
          username.textContent = filteredData[i].username;
          cost.textContent = `$${filteredData[i].cost}/hr`;
          // credentials.textContent = `Credentials: ${filteredData[i].credentials}`;
          // bio.textContent = filteredData[i].bio;
          tutorContainer.appendChild(username);
          tutorContainer.appendChild(cost);
          // tutorContainer.appendChild(credentials);
          // tutorContainer.appendChild(bio);
          tutorInfo.appendChild(tutorContainer);
          tutorContainer.setAttribute("class", "tutorCard col");
        }
      }
    }
  }
  return <div className="tutorInfo row">Find your next tutor soon!</div>;
};

export default TutorCard;

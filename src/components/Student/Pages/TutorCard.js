import React from "react";

const TutorCard = ({ queryCalled, data }) => {
  const tutorInfo = document.querySelector(".tutorInfo");
  if (queryCalled) {
    tutorInfo.textContent = "";
    for (let i = 0; i < data.length; i++) {
      const tutorContainer = document.createElement("div");
      const username = document.createElement("h2");
      const cost = document.createElement("li");
      username.textContent = data[i].username;
      cost.textContent = `$${data[i].cost}/hr`;
      tutorContainer.appendChild(username);
      tutorContainer.appendChild(cost);
      tutorInfo.appendChild(tutorContainer);
      tutorContainer.setAttribute("class", "tutorCard");
    }
  }
  return <div className="tutorInfo">Find your next tutor soon!</div>;
};

export default TutorCard;

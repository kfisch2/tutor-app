import React from "react";

const TutorCard = ({ queryCalled, data }) => {
  const tutorInfo = document.querySelector(".tutorInfo");
  if (queryCalled) {
    tutorInfo.textContent = "";
    for (let i = 0; i < data.length; i++) {
      const username = document.createElement("h1");
      const bio = document.createElement("p");
      username.textContent = data[i].username;
      bio.textContent = data[i].bio;
      tutorInfo.appendChild(username);
      tutorInfo.appendChild(bio);
    }
  }
  return <div className="tutorInfo"></div>;
};

export default TutorCard;

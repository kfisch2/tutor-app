import React from "react";

const TutorCard = ({ queryCalled, data, requestedCost }) => {
  const tutorInfo = document.querySelector(".tutorInfo");
  console.log(requestedCost);
  if (queryCalled) {
    tutorInfo.textContent = "";
    if (data) {
      const filteredData = data.filter((tutor) => tutor.cost <= requestedCost);
      console.log(filteredData)
      if (filteredData.length == 0) {
        tutorInfo.textContent =
          "Sorry, no tutors matching your request found :(";
      } else {
        for (let i = 0; i < filteredData.length; i++) {
          const tutorContainer = document.createElement("div");
          const username = document.createElement("h2");
          const cost = document.createElement("li");
          username.textContent = filteredData[i].username;
          cost.textContent = `$${filteredData[i].cost}/hr`;
          tutorContainer.appendChild(username);
          tutorContainer.appendChild(cost);
          tutorInfo.appendChild(tutorContainer);
          tutorContainer.setAttribute("class", "tutorCard");
        }
      }
    }
  }
  return <div className="tutorInfo">Find your next tutor soon!</div>;
};

export default TutorCard;

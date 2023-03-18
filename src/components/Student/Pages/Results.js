import React from "react";

const Results = () => {
  return (
    <>
      <div className="tutorCards">
        {" "}
        <TutorCard
          data={data}
          queryCalled={queryCalled}
          requestedCost={requestedCost}
          requestedSubject={requestedSubject}
        />
      </div>
    </>
  );
};

export default Results;

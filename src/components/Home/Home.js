import React, { useEffect, useState } from "react";

export default function Home(props) {
  const { page, currentPage, setCurrentPage } = props;

  return (
    <div className="main-page">
      <h1>Welcome! Who are you?</h1>
      <div className="button-container">
        <button>Tutor</button>
        <button>Student</button>
      </div>
      <div className="about-description">
        <h4>Blurb about the site</h4>
      </div>
    </div>
  );
}

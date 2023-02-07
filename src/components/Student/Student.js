import React, { useState } from "react";
import Login from "../Login/Login.js";
import Signup from "../Login/Signup.js";
import Page from "./Page/Page.js";
import StudentHeader from "./StudentHeader.js";

import "./Student.css";

const Student = () => {
  const [page] = useState([
    {
      name: "Dashboard",
    },
    {
      name: "Request a tutor",
    },
    {
      name: "History",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(page[0]);

  return (
    <>
      <StudentHeader
        page={page}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="student-page page-content">
        <Page currentPage={currentPage}>Page: {page.name}</Page>
      </main>
    </>
  );
};

export default Student;

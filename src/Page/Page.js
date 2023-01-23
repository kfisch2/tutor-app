import React from "react";
import { Home, Student, Tutor } from "../components";
import PageContent from "./PageContent";

export default function Page(props) {
  const {page = [], currentPage, setCurrentPage } = props;
  const renderPage = () => {
    switch (currentPage.name) {
      case "Home":
        return <Home page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case "Student":
        return <Student />;
      case "Tutor":
        return <Tutor />;
    }
  };

  return <PageContent>{renderPage()}</PageContent>
}

import { DangerousChangeType } from "graphql";
import React from "react";
import Dashboard from "../Pages/Dashboard";
import RequestForm from "../Pages/RequestForm";
import RequestHistory from "../Pages/RequestHistory";
import Student from "../Student";
import PageContent from "./PageContent";

export default function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Dashboard":
        return <Dashboard />;
      case "Request a tutor":
        return <RequestForm />;
      case "Saved tutors":
        return <RequestHistory />;
    }
  };

  return <PageContent>{renderPage()}</PageContent>;
}

import React from "react";

export default function StudentHeader(props) {
  const { page = [], setCurrentPage, currentPage } = props;
  return (
    <div className="student-header">
      <nav className="links">
        {page.map((Page) => (
          <div
            className={`link ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <button
              onClick={() => {
                setCurrentPage(Page);
              }}
            >
              {Page.name}
            </button>
          </div>
        ))}
      </nav>
      {/* <button onClick={() => setCurrentPage(Page)}>Request Tutor!</button> */}
    </div>
  );
}

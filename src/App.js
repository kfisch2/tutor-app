import React, { useState } from "react";
import { Header, Footer, Page, Home } from "./components";

function App() {
  const [page] = useState([
    { name: "Home" },
    { name: "Student" },
    { name: "Tutor" },
  ]);

  const [currentPage, setCurrentPage] = useState(page[0]);
  return (
    <>
      <Header />
      <main>
        <Page
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Page>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

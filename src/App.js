import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Home, Tutor, Student } from "./components";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Home />}/>
          <Route path="/tutor"element={<Tutor/>}/>
          <Route path="/student" element={<Student/>}/>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;

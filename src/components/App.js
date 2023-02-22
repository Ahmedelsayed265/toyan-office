import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Employ from "./Employ";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="app-holder">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employment" element={<Employ />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

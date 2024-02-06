import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import UserHome from "./components/Pages/Home/UserHome";
import NavBar from "./components/Tools/NavBar";
import Footer from "./components/Tools/Footer";
function App() {
  return (
    <div>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/member" element={<UserHome />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

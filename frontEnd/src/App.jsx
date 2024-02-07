import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import UserHome from "./components/Pages/Home/UserHome";
import NavBar from "./components/Tools/NavBar";
import LogIn from "./components/Pages/User/LogIn";
import SighIn from "./components/Pages/User/SighIn";

function App() {
  return (
    <div>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/member" element={<UserHome />}></Route>
        <Route path="/signin" element={<SighIn />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;

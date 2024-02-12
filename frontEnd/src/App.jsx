import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import UserHome from "./components/Pages/Home/UserHome";
import Profile from "./components/Pages/User/MyProfile";
import NavBar from "./components/Tools/NavBar";
import LogIn from "./components/Pages/User/LogIn";
import SignUp from "./components/Pages/User/SignUp";
import Footer from "./components/Tools/Footer";
import AboutUs from "./components/Pages/Info/AboutUs";
import Support from "./components/Pages/Info/Support";
import Download from "./components/Pages/CV's/Download";
import InfoForm from "./components/Pages/CV's/InfoForm";
import Template from "./components/Pages/CV's/Template";
import Edit from "./components/Pages/CV's/Edit";

function App() {
  return (
    <div>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/member" element={<UserHome />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/infoform" element={<InfoForm />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/tem" element={<Template />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

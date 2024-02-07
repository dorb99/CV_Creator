import { useContext, useState, useRef } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import { CVContext } from "../../Tools/Context/CVContext";
import Image from "../../../assets/signin-img.jpg";
import emailjs from "@emailjs/browser";

function SignIn() {
  const { createUserAction } = useContext(UserContext);
  const [cvInfo, setCVInfo] = useState({
    education: {},
    skills: {},
    formerEmployments: {},
    generalInfo: {},
})

  return (
    <div
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className="bg-grey-300 w-screen min-h-screen flex justify-end items-center"
    >
      <form
        className="text-white bg-opacity-60 bg-slate-500 p-8 rounded-lg shadow-md w-99 h-full mr-40 flex-col justify-end items-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="text-2xl text-black-700 pb-5 py-4 w-full flex justify-center items-center">
          Hi! Please fill the fields and we will create your CV in no time!
        </div>
        <input
          className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
          type="text"
          placeholder="UserName"
          onChange={(e) => {
            e.preventDefault();
            const changedUser = newUser;
            changedUser.username = e.target.value;
            setNewUser(changedUser);
          }}
        />
        <input
          className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 text-white placeholder:text-white"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            const changedpass = checkingPassword;
            changedpass[0] = e.target.value;
            setCheckingPassword(changedpass);
          }}
        />
        <input
          className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 text-white placeholder:text-white"
          type="password"
          placeholder="Repeat Password"
          onChange={(e) => {
            e.preventDefault();
            const changedpass = checkingPassword;
            changedpass[1] = e.target.value;
            setCheckingPassword(changedpass);
          }}
        />
        <input
          className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 text-white placeholder:text-white"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            e.preventDefault();
            const changedUser = newUser;
            changedUser.email = e.target.value;
            setNewUser(changedUser);
          }}
        />
        <input
          className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 text-white placeholder:text-white"
          type="password"
          placeholder="Received Code"
          onChange={(e) => {
            setCode((prevCode) => ({
              ...prevCode,
              receivedCode: e.target.value,
            }));
          }}
        />
        <button
          className="w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;

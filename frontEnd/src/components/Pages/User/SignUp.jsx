import { useContext, useState, useRef } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import { CVContext } from "../../Tools/Context/CVContext";
import Image from "../../../assets/signin-img.jpg";
import emailjs from "@emailjs/browser";

function SignIn() {
  const { createUserAction } = useContext(UserContext);
  const [checkingPassword, setCheckingPassword] = useState([]);
  const [code, setCode] = useState({ sendedCode: "", receivedCode: "" });
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    cv: [],
  });
  const form = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkingPassword[0] === checkingPassword[1]) {
      const addingPassword = { ...newUser };
      addingPassword.password = checkingPassword[0];
      setNewUser(addingPassword);
      if (addingPassword.email !== "" && addingPassword.password !== "") {
        try {
          await SendEmail();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Please fill all the fields");
      }
    } else {
      console.log("Passwords don't match");
    }
  };

  const CreateUser = async () => {
    try {
      if (code.sendedCode === code.receivedCode) {
        await createUserAction(newUser).then(() => {
          setNewUser({
            username: "",
            password: "",
            email: "",
            cv: [],
          });
          console.log("User created successfully");
        });
      } else {
        console.log("Codes don't match");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const SendEmail = async () => {
    console.log(form.current);
    try {
      RandomCode();
      // emailjs
      //   .sendForm("CV-Creator", "verification_q1w2e3", form.current, {
      //     publicKey: "BNGfNzMrgKtNNRXOD",
      //     username: newUser.name,
      //     code: code.sendedCode,
      //     to_email: newUser.email,
      //   })
      console.log("hi").then((response) => {
        console.log("Email sended");
      });
    } catch (err) {
      (error) => {
        console.log("FAILED...", error.text);
      };
    }
  };
  function RandomCode() {
    let randomString = "";
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      randomString += randomDigit;
    }
    console.log(randomString);
    setCode((prevCode) => ({
      ...prevCode,
      sendedCode: randomString,
    }));
  }

  return (
    <div
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className="bg-grey-300 w-screen min-h-screen flex justify-end items-center"
    >
      <form
        ref={form}
        className="text-white bg-opacity-60 bg-slate-500 p-8 rounded-lg shadow-md w-99 h-full mr-40 flex-col justify-end items-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="text-3xl text-black-700 pb-5 py-4 w-full flex justify-center items-center">
          Welcome! Please signin
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
        {code.sendedCode !== "" ? (
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
        ) : null}
        {code.sendedCode !== "" ? (
          <button
            className="w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            type="button"
            onClick={() => CreateUser()}
          >
            Confirm password
          </button>
        ) : (
          <button
            className="w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default SignIn;

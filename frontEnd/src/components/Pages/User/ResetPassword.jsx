import { useContext, useState, useRef } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import emailjs from "@emailjs/browser";
import { RiArrowGoBackFill } from "react-icons/ri";

function ResetPassword() {
  const {
    logInAction,
    forgotClicked,
    setForgotClicked,
    userInfo,
    getUser,
    editUserAction,
  } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState({ first: "", second: "" });
  const [resetInfo, setResetInfo] = useState({
    name: "",
    code: RandomCode(),
    receivedCode: "",
  });
  const formToMail = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setForgotClicked(2);
      await getUser(resetInfo.name);
      const username = userInfo.username;
      const code = resetInfo.code;
      let templateParams = {
        username: username,
        code: code,
        email: userInfo.email,
      };
      
      emailjs.init({
        publicKey: 'BNGfNzMrgKtNNRXOD'
      });
      console.log(code)
      emailjs.send("CV-Creator", "Reset_q1w2e3", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  const submitCode = (e) => {
    e.preventDefault();
    if (resetInfo.code === resetInfo.receivedCode) {
      console.log("Password reset");
      setForgotClicked(3);
    } else {
      console.log("Code incorrect, try again");
    }
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (newPassword.first === newPassword.second) {
      setResetInfo({
        name: "",
        code: RandomCode(),
        receivedCode: "",
      });
      const newInfo = { id: userInfo._id, password: newPassword.first };
      editUserAction(newInfo);
      setForgotClicked(0);
    } else {
      console.log("Passwords don't match");
    }
  };
  function RandomCode() {
    let randomString = "";
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      randomString += randomDigit;
    }
    return randomString;
  }

  return (
    <>
      <form ref={formToMail}>
        <div className="text-3xl text-black-700 pb-5 py-4 w-full flex justify-center items-center">
          Please follow the steps
        </div>
        {forgotClicked === 1 ? (
          <>
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
              type="text"
              name="username"
              value={resetInfo.name}
              placeholder="Your username"
              onChange={(e) => {
                setResetInfo((prevInfo) => ({
                  ...prevInfo,
                  name: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              style={{ display: "none" }}
              value={resetInfo.code}
              id="code"
              name="code"
            />
          </>
        ) : forgotClicked === 2 ? (
          <input
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="password"
            placeholder="Your code..."
            onChange={(e) => {
              setResetInfo((prevInfo) => ({
                ...prevInfo,
                receivedCode: e.target.value,
              }));
            }}
          />
        ) : (
          <>
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
              type="password"
              placeholder="New Password"
              value={newPassword.first}
              onChange={(e) => {
                setNewPassword((prevInfo) => ({
                  ...prevInfo,
                  first: e.target.value,
                }));
              }}
            />
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
              type="password"
              placeholder="Repeat Password"
              value={newPassword.second}
              onChange={(e) => {
                setNewPassword((prevInfo) => ({
                  ...prevInfo,
                  second: e.target.value,
                }));
              }}
            />
          </>
        )}
        <div className="flex items-center justify-evenly w-full">
          <button
            className="items-baseline w-fit px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-500"
            type="submit"
            onClick={
              forgotClicked === 1
                ? sendEmail
                : forgotClicked === 2
                ? submitCode
                : resetPassword
            }
          >
            {forgotClicked === 1
              ? "Send an email to my account"
              : forgotClicked === 2
              ? "Send reset code"
              : "Done!"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setForgotClicked(0);
            }}
            className="items-baseline w-fit px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-500"
          >
            <RiArrowGoBackFill />
          </button>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;

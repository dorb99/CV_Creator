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
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setForgotClicked(2);
      await getUser(resetInfo.name);
      emailjs
        .sendForm("CV-Creator", "Reset_q1w2e3", form.current, {
          publicKey: "BNGfNzMrgKtNNRXOD",
          username: resetInfo.name,
          code: resetInfo.code,
          to_email: userInfo.email,
        })
        .then((response) => {
          console.log("Email sended");
        });
    } catch (err) {
      (error) => {
        console.log("FAILED...", error.text);
      };
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
    <div className="w-fit h-fit p-8 flex-col justify-center items-center relative">
      <button
      onClick={()=>setForgotClicked(0)}
      className="absolute top-0 left-0 w-5 m-2 p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          <RiArrowGoBackFill />
        </button>
      <form
        ref={form}
        className="max-w-md w-full bg-white p-8 rounded-lg shadow-md"
      >
        
        {forgotClicked === 1 ? (
          <div>
            <input
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
              defaultValue={resetInfo.code}
              id="code"
              name="code"
            />
          </div>
        ) : forgotClicked === 2 ? (
          <input
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
        <button
          className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
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
      </form>
    </div>
  );
}

export default ResetPassword;

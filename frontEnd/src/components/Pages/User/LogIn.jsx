import { useContext, useState } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import { CVContext } from "../../Tools/Context/CVContext";
import ResetPassword from "./ResetPassword";
import Image from "../../../assets/signin-img.jpg";

function LogIn() {
  const {
    logInAction,
    forgotClicked,
    setForgotClicked,
    logOutAction,
    userInfo,
  } = useContext(UserContext);
  const [logUser, setLogUser] = useState({ username: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    logInAction(logUser);
  };

  const handleForgotPassword = () => {
    setForgotClicked(1);
  };

  return (
    <div
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className=" bg-grey-300 w-screen min-h-screen flex justify-end items-center"
    >
      <form
        className="bg-slate-500 p-8 rounded-lg shadow-md w-99 h-full mr-40 flex-col bg-opacity-60 justify-end items-center"
        onSubmit={(e) => onSubmit(e)}
      >
        {forgotClicked !== 0 ? (
          <ResetPassword />
        ) : (
          <>
            <div className="text-3xl text-black-700 pb-5 py-4 w-full flex justify-center items-center">
              Welcome back!
            </div>
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setLogUser({ ...logUser, username: e.target.value })
              }
            />
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLogUser({ ...logUser, password: e.target.value })
              }
            />
            <div className="flex items-center justify-evenly w-full">
              <button
                className="items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                type="submit"
              >
                Submit
              </button>
              <button
                className="items-baseline w-fit px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-500"
                type="button"
                onClick={handleForgotPassword}
              >
                Forgot My Password...
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default LogIn;

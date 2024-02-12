import { useContext, useState } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import { CVContext } from "../../Tools/Context/CVContext";
import ResetPassword from "./ResetPassword";
import Image from "../../../assets/signin-img.jpg";
import { Link } from "react-router-dom";

function LogIn() {
  const { logInAction, forgotClicked, setForgotClicked } =
    useContext(UserContext);
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
      className="bg-gray-300 w-screen min-h-screen flex justify-center items-center"
    >
      <form
        className="bg-gray-700 p-8 rounded-lg shadow-md w-96 h-full flex-col bg-opacity-60 justify-end items-center"
        onSubmit={(e) => onSubmit(e)}
      >
        {forgotClicked !== 0 ? (
          <ResetPassword />
        ) : (
          <>
            <div className="text-3xl text-white pb-5 py-4 w-full flex justify-center items-center">
              Welcome Back!
            </div>
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-gray-300 placeholder:text-white text-black-700"
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setLogUser({ ...logUser, username: e.target.value.trim() })
              }
            />
            <input
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-gray-300 placeholder:text-white text-black-700"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLogUser({ ...logUser, password: e.target.value.trim() })
              }
            />
            <div className="flex items-center justify-evenly w-full">
              <button
                className="items-baseline w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-all ease-in-out"
                type="submit"
              >
                Log In
              </button>
            </div>
            <div className="mt-3">
              <button
                className="text-white tracking-widest hover:text-rose-500 transition-all ease-in-out"
                type="button"
                onClick={handleForgotPassword}
              >
                Forgot My Password...
              </button>
              <p className="text-white mt-3 text-sm hover:text-rose-500 transition-all ease-in-out">
                <Link to={"/signup"}> Don't have an account? Sign Up</Link>
              </p>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default LogIn;

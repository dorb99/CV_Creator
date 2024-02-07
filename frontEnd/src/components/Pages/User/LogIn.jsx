import { useContext, useState } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import { CVContext } from "../../Tools/Context/CVContext";
import ResetPassword from "./ResetPassword";

function SignIn() {
  const { logInAction, forgotClicked, setForgotClicked, logOutAction, userInfo } = useContext(UserContext);

  const [logUser, setLogUser] = useState({ username: "", password: "" });

  const handleInputChange = (e, field) => {
    e.preventDefault();
    setLogUser({ ...logUser, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInAction(logUser);
  };

  const handleForgotPassword = () => {
    setForgotClicked(1);
  };

  return (
    <div className="w-screen min-h-screen flex-col flex justify-center items-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Username"
          onChange={(e) => setLogUser({ ...logUser, username: e.target.value })}
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          placeholder="Password"
          onChange={(e) => setLogUser({ ...logUser, password: e.target.value })}
        />
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
        <button
          className="w-full mt-2 px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-500"
          type="button"
          onClick={handleForgotPassword}
        >
          Forgot My Password...
        </button>
      </form>
      <div className="mt-4 flex-col">
        {forgotClicked !== 0 ? <ResetPassword /> : null}
      </div>
    </div>
  );
}

export default SignIn;

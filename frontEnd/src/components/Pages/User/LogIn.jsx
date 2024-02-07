import { useContext, useState } from "react";
import { UserContext } from "../../Context";

function SignIn() {
  const { logInAction } = useContext(UserContext);
  const [logUser, setLogUser] = useState({ username: "", password: "" });

  const handleInputChange = (e, field) => {
    e.preventDefault();
    setLogUser({ ...logUser, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInAction(logUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Username"
            onChange={(e) => handleInputChange(e, "username")}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e, "password")}
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={() => {
          const id = "65bf8a5df10db5a99209e405";
          getAllUsers();
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default SignIn;

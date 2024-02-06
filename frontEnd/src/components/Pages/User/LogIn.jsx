import { useContext, useState } from "react";
import { UserContext } from "../../Context";

function SighIn() {
  const { logInAction } = useContext(UserContext);
  const [logUser, setLogUser] = useState({ username: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    logInAction(logUser);
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="UserName"
          onChange={(e) => {
            e.preventDefault();
            const changedUser = logUser;
            changedUser.username = e.target.value;
            setLogUser(changedUser);
          }}
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            const changedUser = logUser;
            changedUser.password = e.target.value;
            setLogUser(changedUser);
          }}
        />
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
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

export default SighIn;

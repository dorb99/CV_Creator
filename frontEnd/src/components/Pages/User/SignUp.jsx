import { useContext, useState } from "react";
import { UserContext } from "../../Context";
// import { CVContext } from "../../Tools/Context/CVContext";

function SighIn() {
  const { createUserAction } = useContext(UserContext);
  const [checkingPassword, setCheckingPassword] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    cv: [],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkingPassword[0] === checkingPassword[1]) {
      const addingPassword = newUser;
      addingPassword.password = checkingPassword[0];
      setNewUser(addingPassword);
      if (newUser.email !== "" && newUser.email !== "") {
        console.log(newUser);
        createUserAction(newUser);
        setNewUser({
          name: "",
          password: "",
          email: "",
          cv: [],
        });
      } else {
        console.log("fill all the inputs");
      }
    } else console.log("Passwords don't match");
  };

  return (
    <div className="bg-grey-300 w-screen min-h-screen flex justify-center items-center">
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
            const changedUser = newUser;
            changedUser.username = e.target.value;
            setNewUser(changedUser);
          }}
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            e.preventDefault();
            const changedUser = newUser;
            changedUser.email = e.target.value;
            setNewUser(changedUser);
          }}
        />
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default SighIn;

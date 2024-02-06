import axios from "axios";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const getUser = async (username) => {
    const name = username;
    try {
      const user = await axios.get(`http://localhost:2000/${name}`);
      setUserInfo(user.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
    //   <button
    //   className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    //   onClick={() => {
    //     const id = "dorbru";
    //     getUser(id);
    //   }}
    // >
    //   Click me
    // </button>
  };

  const getCVs = async (userid) => {
    const id = userid;
    try {
      const CVs = await axios.get(`http://localhost:2000/user/${id}/cv`);
      console.log(CVs.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
    // <button
    //   className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    //   onClick={() => {
    //     const id = "65bf8a5df10db5a99209e405";
    //     getCVs(id);
    //   }}
    // >
    //   Click me
    // </button>;
  };

  const createUserAction = async (newUser) => {
    try {
      await axios.post("http://localhost:2000/", newUser);
      setUserInfo(newUser);
      setNewUser({
        name: "",
        password: "",
        email: "",
        cv: [],
      });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const logInAction = async (logUser) => {
    try {
      const checkedUser = (
        await axios.get(`http://localhost:2000/${logUser.username}`)
      ).data;
      if (checkedUser.password === logUser.password) {
        console.log("User logged in");
        setUserInfo(checkedUser);
        setLogUser({ username: "", password: "" });
      } else if (checkedUser === "") console.log("username incorrect");
      else console.log("Incorrect password");
    } catch {
      (err) => console.log(err);
    }
  };

  const editAction = async (editedUser) => {
    const user = editedUser;
    console.log(user);
    try {
      axios.patch(`http://localhost:2000/user/${user.id}`, user);
      console.log("User edited successfully");
    } catch {
      (error) => {
        console.log(error);
      };
    }
    // <button
    //     className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    //     onClick={() => {
    //       const id = {
    //           id: "65c1479c9e60dcf444bc9cbd",
    //           password: "asd",
    //           email: "aadfez@@@gmail.com",
    //         };
    //       editAction(id);
    //     }}
    //   >
    //     Click me
    //   </button>
  };

  const deleteAction = async (userId) => {
    const id = userId;
    try {
      axios.delete(`http://localhost:2000/user/${id}`);
      console.log("User deleted successfully");
    } catch {
      (error) => {
        console.log(error);
      };
    }
    // <button
    //     className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    //     onClick={() => {
    //       const id = "";
    //       deleteAction(id);
    //     }}
    //   >
    //     Click me
    //   </button>
  };

  const getAllUsers = async () => {
    try {
      const users = await axios.get(`http://localhost:2000`);
      console.log(users.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const contextValues = {
    // varibales
    userInfo,
    setUserInfo,

    // actions
    createUserAction,
    logInAction,
    deleteAction,
    editAction,
    getCVs,
    getAllUsers,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

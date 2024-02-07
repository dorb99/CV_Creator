import axios from "axios";
import { createContext, useState } from "react";
const UserContext = createContext();

axios.defaults.withCredentials = true;

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [CVs, setCVs] = useState([]);
  const [forgotClicked, setForgotClicked] = useState(0);

  const getUserCVs = async (userid) => {
    const id = userid;
    try {
      const CVs = await axios.get(
        `${import.meta.env.VITE_FRONTENV}user/${id}/cv`
      );
      console.log(CVs.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const createUserAction = async (newUser) => {
    try {
      await axios.post(`${import.meta.env.VITE_FRONTENV}`, newUser);
      setUserInfo(newUser);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const logInAction = async (loginInfo) => {
    console.log(import.meta.env.VITE_FRONTENV);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTENV}/login`,
        loginInfo
      );
      const checkedUser = response.data.user;
      setUserInfo(checkedUser);
    } catch {
      (err) => console.log(err);
    }
  };

  const editUserAction = async (editedUser) => {
    const user = editedUser;
    console.log(user);
    try {
      axios.patch(`${import.meta.env.VITE_FRONTENV}/user/${user.id}`, user);
      then(console.log("User edited successfully"));
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const deleteUserAction = async (userId) => {
    const id = userId;
    try {
      axios.delete(`${import.meta.env.VITE_FRONTENV}user/${id}`);
      console.log("User deleted successfully");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const getAllUsers = async () => {
    try {
      const users = await axios.get(`${import.meta.env.VITE_FRONTENV}`);
      console.log(users.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const getUser = async (username) => {
    try {
      const user = await axios.get(
        `${import.meta.env.VITE_FRONTENV}/${username}`
      );
      setUserInfo(user.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const logOutAction = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_FRONTENV}/logout`);
      console.log("loged Out");
      setUserInfo(undefined);
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
    CVs,
    forgotClicked,
    setForgotClicked,

    // actions
    createUserAction,
    logInAction,
    deleteUserAction,
    editUserAction,
    getUserCVs,
    getAllUsers,
    logOutAction,
    getUser,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

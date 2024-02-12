import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CVContext } from "./CVContext";

const UserContext = createContext();

axios.defaults.withCredentials = true;

const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const [userCVs, setUserCVs] = useState([]);
  const [forgotClicked, setForgotClicked] = useState(0);

  const Authenticate = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_FRONTENV}/authenticate`
      );
      if (response.status === 200) setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUserAction = async (newUser) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTENV}`,
        newUser
      );
      navigate("/login");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const getUserCVs = async (userid) => {
    const id = userid;
    console.log(`${import.meta.env.VITE_FRONTENV}/user/${id}/cv`);
    try {
      const CVs = await axios.get(
        `${import.meta.env.VITE_FRONTENV}/user/${id}/cv`
      );
      setUserCVs(CVs.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logInAction = async (loginInfo) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTENV}/login`,
        loginInfo
      );
      console.log(response.data.user._id);
      getUserCVs(response.data.user._id);
      setUserInfo(response.data.user);
      navigate("/member");
    } catch {
      (err) => console.log(err);
    }
  };

  const editUserAction = async (editedUser) => {
    const user = editedUser;
    try {
      const newUser = await axios.patch(`${import.meta.env.VITE_FRONTENV}/user/${user._id}`, user);
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
        `${import.meta.env.VITE_FRONTENV}/find/${username}`
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
      setUserInfo();
      navigate("/");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  useEffect(() => {
    if (userInfo === undefined) Authenticate();
  }, []);

  useEffect(() => {
    getUserCVs("65c20e06142cd1aa329d1d13");
  }, []);

  const contextValues = {
    // varibales
    userInfo,
    setUserInfo,
    userCVs,
    setUserCVs,
    forgotClicked,
    setForgotClicked,

    // actions

    createUserAction,
    logInAction,
    deleteUserAction,
    editUserAction,
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

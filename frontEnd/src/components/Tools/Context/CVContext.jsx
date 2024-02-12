import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [selctedCv, setSelectedCV] = useState();
  const [userCV, setUserCV] = useState([]);
  const [oldCV, setOldCV] = useState([]);

  const getCV = async (cvId) => {
    try {
      const cv = await axios.get(
        `${import.meta.env.VITE_FRONTENV}/${userInfo?._id}/cv/${cvId}`
      );
      console.log(cv.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  const deleteCV = async (cvId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_FRONTENV}/${userInfo?._id}/cv/${cvId}`
      );
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const editActionCV = async (newCV) => {
    try {
      const cv = await axios.patch(
        `${import.meta.env.VITE_FRONTENV}/${userInfo?._id}/cv/${newCV._id}`,
        newCV
      );
      console.log(cv.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const addCV = async (newCV) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_FRONTENV}/${userInfo?._id}/cv`,
        newCV
      );
      console.log("success");
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const allCVs = async () => {
    try {
      const cvs = await axios.get(
        `${import.meta.env.VITE_FRONTENV}/${userInfo?._id}/cv`
      );
      console.log(cvs.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const contextValues = {
    // varibales
    selctedCv,
    userCV,
    // actions
    getCV,
    setSelectedCV,
    deleteCV,
    editActionCV,
    addCV,
  };

  return (
    <CVContext.Provider value={contextValues}>{children}</CVContext.Provider>
  );
};

export { CVContext, CVProvider };

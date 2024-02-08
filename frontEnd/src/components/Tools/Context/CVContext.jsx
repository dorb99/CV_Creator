import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userCV, setUserCV] = useState([]);
  const getCV = async (cvId) => {
    try {
      const cv = await axios.get(`http://localhost:2000/${userId}/cv/${cvId}`);
      console.log(cv.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  const deleteCV = async (cvId) => {
    try {
      git;
      await axios.delete(`http://localhost:2000/${userId}/cv/${cvId}`);

      then(() => {
        console.log("CV deleted successfully");
        const newUserInfo = userInfo;
        const indexToRemove = newUserInfo.CV.indexOf(cvId);
        array.splice(indexToRemove, 1);
        setUserInfo(newUserInfo);
        console.log(newUserInfo);
      });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  const editCV = async (newCV) => {
    try {
      const cv = await axios.patch(
        `http://localhost:2000/${userId}/cv/${newCV._id}`,
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
      const cv = await axios.post(`http://localhost:2000/${userId}/cv`, newCV);
      console.log(cv.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  const allCVs = async () => {
    try {
      const cvs = await axios.get(`http://localhost:2000/${userId}/cv`);
      console.log(cvs.data);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  useEffect(() => {
    const userId = userInfo._id;
  }, [userInfo]);

  const contextValues = {
    // varibales
    // actions
    getCV,
    deleteCV,
    editCV,
    addCV,
  };

  return (
    <CVContext.Provider value={contextValues}>{children}</CVContext.Provider>
  );
};

export { CVContext, CVProvider };

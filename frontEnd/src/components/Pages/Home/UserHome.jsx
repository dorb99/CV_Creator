import React, { useContext, useEffect } from "react";
import { FiEdit, FiFileText } from "react-icons/fi";
import { CVContext } from "../../Tools/Context/CVContext";
import { UserContext } from "../../Tools/Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Tools/Context/UserContext";

const UserHome = () => {
  const { selectedCV, setSelectedCV, userCV, getCV } = useContext(CVContext);
  const { userInfo } = useContext(UserContext);
  const { userCVs, setUserCVs } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedCV);
  }, [selectedCV]);

  const handleCVClick = (cvId) => {
    localStorage.setItem("selectedCV", JSON.stringify(cvId));
    navigate("/edit");
    setSelectedCV(cvId);
  };

  const formattedDate = (timestamp) => {
    if (timestamp) {
      return new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return "";
  };

  const formattedDate = (timestamp) => {
    if (timestamp) {
      return new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return "";
  };

  return (
    <div className="bg-dark-blue min-h-screen pt-20">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center sm:justify-start justify-center mb-8">
            <div className="rounded-full overflow-hidden w-16 h-16 bg-gray-300 mr-4"></div>
            <div>
              <p className="text-lg font-semibold text-indigo-600">
                {userInfo?.username}
              </p>
              <p className="text-gray-500">{userInfo?.email}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-start mb-8 md:space-x-4">
            <Link
              className="bg-indigo-500 hover:bg-indigo-600 text-white tracking-widest transition-all ease-in-out font-bold py-2 px-6 rounded-full w-48 my-2"
              to="/infoform"
            >
              <FiEdit className="inline-block mr-2" />
              Create New CV
            </Link>

            <button className="bg-emerald-500 hover:bg-emerald-600 text-white tracking-widest transition-all ease-in-out font-bold py-2 px-6 rounded-full w-48 my-2">
              <FiFileText className="inline-block mr-2" />
              View Former CVs
            </button>
          </div>
          <div className="bg-purple-900 text-white text-center py-2 px-6 rounded-full mb-8">
            Recent CV's
          </div>
          <div id="something" className="flex overflow-x-scroll justify-between mx-6 space-x-12">
            {userCV.map((cv, index) => (
              <div
                className="w-40 h-40 px-2 py-2 text-center bg-dark-blue text-white flex flex-col justify-center items-center rounded-lg cursor-pointer hover:bg-blue-950 transition-all ease-in-out"
                key={index}
                onClick={() => handleCVClick(cv)}
              >
                <p>Date:{formattedDate(cv.timestamp)}</p>
                <p>Template:{cv.Template}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

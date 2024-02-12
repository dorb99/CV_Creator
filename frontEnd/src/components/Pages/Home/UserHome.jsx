import React, { useContext, useEffect } from "react";
import { FiEdit, FiFileText } from "react-icons/fi";
import { CVContext } from "../../Tools/Context/CVContext";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Tools/Context/UserContext";

const UserHome = () => {
  const { selectedCV, setSelectedCV, userCV, getCV } = useContext(CVContext);
  const { userCVs, setUserCVs } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCVClick = (cvId) => {
    localStorage.setItem("selectedCV", JSON.stringify(cvId));
    navigate("/edit");
    setSelectedCV(cvId);
  };

  return (
    <div className="bg-dark-blue min-h-screen p-20">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md bg-opacity-100">
          <div className="flex items-center justify-start mb-8">
            <div className="rounded-full overflow-hidden w-16 h-16 bg-gray-300 mr-4"></div>
            <div>
              <p className="text-lg font-semibold text-indigo-600">John Doe</p>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>
          <div className="flex justify-start mb-8 space-x-4">
            <Link
              className="bg-indigo-500 hover:bg-indigo-600 text-white tracking-widest transition-all ease-in-out font-bold py-2 px-6 rounded-full"
              to="/infoform"
            >
              <FiEdit className="inline-block mr-2" />
              Create New CV
            </Link>

            <button className="bg-emerald-500 hover:bg-emerald-600 text-white tracking-widest transition-all ease-in-out font-bold py-2 px-6 rounded-full">
              <FiFileText className="inline-block mr-2" />
              View Former CVs
            </button>
          </div>
          <div className="bg-purple-900 text-white text-center py-2 px-6 rounded-full mb-8">
            Recent CV's
          </div>
          <div className="flex overflow-x-scroll justify-between mx-6 space-x-12">
            {userCVs?.length > 0
              ? userCVs.map((cv, index) => (
                  <li key={index} onClick={() => handleCVClick(cv)}>
                    {cv.id}
                  </li>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

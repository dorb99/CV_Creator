import React, { useState, useEffect, useContext } from "react";
import { CVContext } from "../../Tools/Context/CVContext";
import { UserContext } from "../../Tools/Context/UserContext";
import { useNavigate } from "react-router-dom";

function Edit() {
  const { editActionCV, deleteCV } = useContext(CVContext);
  const { userInfo, editUserAction } = useContext(UserContext);
  const [editCV, setEditCV] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [currentInputs, setCurrentInputs] = useState();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      if (userInfo && userInfo._id) {
        const userId = userInfo._id;
        const storedCVObject =
          JSON.parse(localStorage.getItem("selectedCV")) || {};
        setEditCV(storedCVObject);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const removeKey = (catagory, keyToRemove) => {
    const { [keyToRemove]: catagory_, ...rest } = obj;
    return rest;
  };

  const extractingInfo = () => {
    return currentInputs ? (
      <div>
        {Object.keys(currentInputs).map((key, i) => (
          <div key={i}>
            <input
              id={`${selectedSubject}_${i}`}
              className="bg-stone-600 bg-opacity-30 outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-80 bg-transparent border-b-2  placeholder:text-white"
              type="text"
              value={currentInputs[key]}
              onChange={(e) => {
                e.preventDefault();
                setCurrentInputs((prevInputs) => ({
                  ...prevInputs,
                  [key]: e.target.value,
                }));
              }}
            />
          </div>
        ))}
      </div>
    ) : null;
  };

  const handleSelect = (e) => {
    setSelectedSubject(e.target.value);
    if (e.target.value !== "all" && editCV && typeof editCV === "object") {
      setCurrentInputs((prevInputs) => {
        const catagoryInfo = editCV[e.target.value];
        return catagoryInfo;
      });
    } else console.log(editCV);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editActionCV(editCV);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCV(editCV._id);
    const newuser = userInfo;
    const index = newuser.cv.indexOf(editCV._id);
    newuser.cv.splice(index, 1);
    editUserAction(newuser)
    navigate("/member")
  };

  const handleSaveInfo = (e) => {
    e.preventDefault();
    const newCV = editCV;
    newCV[selectedSubject] = currentInputs;
    setEditCV(newCV);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-dark-blue p-20">
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md bg-opacity-100">
          <div className="flex-col items-center justify-start mb-8">
            <div className=" text-3xl">
              <div>Please choose a catagory you want to edit</div>
              <div className="flex justify-around items-center mb-5">
                <select
                  className="text-xl focus:border-none"
                  id="selectedCategory"
                  value={selectedSubject}
                  onChange={handleSelect}
                >
                  <option value="all" disabled>
                    Select Option
                  </option>
                  <option value="GeneralInfo">General Info</option>
                  <option value="EducationalHistory">
                    Educational History
                  </option>
                  <option value="SkillsAndStrengths">
                    Skills And Strengths
                  </option>
                  <option value="FormerExperience">Former Experience</option>
                </select>
                <button
                  className="bg-yellow-800 bg-opacity-50 hover:bg-opacity-100 text-xl text-white transition-all ease-in-out py-2 px-6 rounded-full"
                  onClick={handleSaveInfo}
                >
                  Save Information
                </button>
              </div>
            </div>
            <div>
              {extractingInfo()}
              <div className="flex justify-around items-center">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 bg-opacity-50 hover:bg-opacity-100 text-xl text-white transition-all ease-in-out py-2 px-6 rounded-full"
                >
                  Update The CV
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 bg-opacity-50 hover:bg-opacity-100 text-xl text-white transition-all ease-in-out py-2 px-6 rounded-full"
                >
                  Delete Chosen CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

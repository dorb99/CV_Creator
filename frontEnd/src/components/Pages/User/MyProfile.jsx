import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Tools/Context/UserContext";
import icon from "../../../assets/WhiteLogo.png";
import { IoSettingsSharp } from "react-icons/io5";

function MyProfile() {
  const { userInfo, editUserAction, setUserInfo } = useContext(UserContext);
  const [isInputsEnabled, setIsInputsEnabled] = useState(false);
  const [editedUser, setEditedUser] = useState(userInfo);
  const [openCV, setOpenCV] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(editedUser);

  useEffect(() => {
    if (editedUser) {
      setUserInfo(editedUser);
    }
  }, [editedUser, setUserInfo]);

  const handleOpenCV = (index) => {
    setSelectedImage(index);
    setOpenCV(true);
  };

  const handleCloseCV = () => {
    setOpenCV(false);
    setSelectedImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUserAction(editedUser);
    console.log("hellowrold");
  };

  const toggleInputs = () => {
    setIsInputsEnabled((prev) => !prev);
  };

  const maskPassword = (password) => {
    return password ? "*".repeat(Math.min(10, password.length)) : "";
  };

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col bg-dark-blue text-white pt-20">
        <div className="xs:flex-row justify-start flex flex-col xs:justify-between xs:items-center px-8 w-fit">
          <img
            src={icon}
            alt=""
            className="w-24 h-24 border-2 rounded-full object-cover"
          />
          <div className="ml-4">
            <p className="font-bold text-xl">
              Username:{" "}
              <span>{userInfo ? userInfo?.username : "Hello World"}</span>
            </p>
            <p className="text-sm">
              Email: <span>{userInfo?.email}</span>
            </p>
            <p className="text-sm">
              Password: <span>{maskPassword(userInfo?.password)}</span>
            </p>
          </div>
        </div>
        <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <ul className="text-white p-4 bg-dark-blue rounded-lg">
            <li className="hover:underline cursor-pointer transition-all ease-in-out hover:text-indigo-500 w-fit">
              Lorem Ipsum
            </li>
            <li className="hover:underline cursor-pointer transition-all ease-in-out hover:text-indigo-500">
              Consectetur Adipiscing
            </li>
            <li className="hover:underline cursor-pointer transition-all ease-in-out hover:text-indigo-500">
              Dolor Sit
            </li>
            <li className="hover:underline cursor-pointer transition-all ease-in-out hover:text-indigo-500">
              Amet Elit
            </li>
            <li className="hover:underline cursor-pointer transition-all ease-in-out hover:text-indigo-500">
              Sed Do
            </li>
            <li className="hover:underline cursor-pointer transition-all ease-in-out hover:text-indigo-500">
              Eiusmod Tempor
            </li>
          </ul>
          <div>
            <button
              className={`bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center hover:bg-indigo-600 transition-all ease-in-out `}
              onClick={toggleInputs}
            >
              <IoSettingsSharp className="mr-1" />
              Change Profile
            </button>
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-dark-blue rounded-lg select-none"
            >
              <label htmlFor="">
                Username:
                <input
                  type="text"
                  value={editedUser?.username}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, username: e.target.value })
                  }
                  placeholder={userInfo?.username}
                  className={`w-full px-4 py-2 border-b-1 rounded-lg focus:outline-none outline-none ring-0 focus:border-b-blue-500 bg-transparent focus:bg-white focus:bg-opacity-10 transition-all ease-in-out mb-2 border-b-indigo-600 ${
                    isInputsEnabled ? "" : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isInputsEnabled}
                />
              </label>
              <label htmlFor="">
                Email:
                <input
                  type="email"
                  value={editedUser?.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                  placeholder={userInfo?.email}
                  className={`w-full px-4 py-2 border-b-1 rounded-lg focus:outline-none outline-none ring-0 focus:border-b-blue-500 bg-transparent focus:bg-white focus:bg-opacity-10 transition-all ease-in-out mb-2 border-b-indigo-600 ${
                    isInputsEnabled ? "" : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isInputsEnabled}
                />
              </label>
              <label htmlFor="">
                Password:
                <input
                  type="password"
                  value={maskPassword(editedUser?.password)}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, password: e.target.value })
                  }
                  placeholder={userInfo?.password}
                  className={`w-full px-4 py-2 border-b-1 rounded-lg focus:outline-none outline-none ring-0 focus:border-b-blue-500 bg-transparent focus:bg-white focus:bg-opacity-10 transition-all ease-in-out mb-2 border-b-indigo-600 ${
                    isInputsEnabled ? "" : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isInputsEnabled}
                />
              </label>
              <button
                type="submit"
                className={`bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center hover:bg-indigo-600 transition-all ease-in-out ${
                  isInputsEnabled ? "" : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={!isInputsEnabled}
              >
                <IoSettingsSharp className="mr-1" />
                Submit Changes
              </button>
            </form>
          </div>
          <section className="flex flex-col items-center justify-center p-4 bg-dark-blue rounded-lg">
            <span>my cv's</span>
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative group">
                <img
                  src={`https://via.placeholder.com/150?text=Image+${index}`}
                  alt={`Placeholder Image ${index}`}
                  className="mb-2 rounded-lg object-cover cursor-pointer"
                />
                <div
                  onClick={() => handleOpenCV(index)}
                  className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all ease-in-out rounded-lg cursor-pointer"
                ></div>
                {openCV && selectedImage === index && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                    onClick={handleCloseCV}
                  >
                    <div className="max-w-screen-lg w-full h-full overflow-hidden">
                      <img
                        src={`https://via.placeholder.com/500?text=Modal+Image+${index}`}
                        alt={`Modal Image ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default MyProfile;

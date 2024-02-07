import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../Context";
import icon from "../../../assets/WhiteLogo.png";
import { IoSettingsSharp } from "react-icons/io5";
function MyProfile() {
  const { userInfo } = useContext(UserContext);

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col bg-dark-blue text-white p-20">
        <div className="flex justify-between items-center">
          <img src={icon} alt="" className="w-72 border-1 rounded-full" />
          <div>
            <p>username:{userInfo.username}</p>
            <p>email:{userInfo.email}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>password:{userInfo.bcrypt}</p>
            <p className="flex justify-center items-center">
              <IoSettingsSharp className="mx-2" />
              Settings
            </p>
          </div>
        </div>
        <div className="w-screen h-fit">

        </div>
      </div>
    </>
  );
}

export default MyProfile;

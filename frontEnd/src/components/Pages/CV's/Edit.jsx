import React, { useState, useEffect, useContext } from "react";
import { CVContext } from "../../Tools/Context/CVContext";
import { UserContext } from "../../Tools/Context/UserContext";

function Edit() {
  const { selectedCV, getCV } = useContext(CVContext);
  const { userInfo } = useContext(UserContext);
  const [editCV, setEditCV] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("userInfo:", userInfo); // Log userInfo
        if (userInfo && userInfo._id) {
          const userId = userInfo._id;
          // When retrieving from localStorage and parsing immediately
          const storedCVObject =
            JSON.parse(localStorage.getItem("selectedCV")) || {};

          const response = await getCV(userId, storedCVObject);
          setEditCV(response);
          console.log(storedCVObject);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userInfo, getCV]);

  return (
    <>
      <div>{editCV}</div>
    </>
  );
}

export default Edit;

import React, { useState, useEffect } from "react";
import "./DraggableLine.css";
import { TbCaretLeftRightFilled } from "react-icons/tb";
import { FaRegHandRock } from "react-icons/fa";
import { RxHand } from "react-icons/rx";

const DraggableLine = ({ onPositionChange }) => {
  const [position, setPosition] = useState(50);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    onPositionChange(position);
  }, [position, onPositionChange]);

  const handleDrag = (event) => {
    const newPosition = (event.clientX / window.innerWidth) * 100;
    setPosition(newPosition);
  };

  return (
    <div
      className="draggable-line flex justify-center mt-32 ml-1.5"
      style={{ left: `${position}%` }}
      onMouseDown={() => {
        setClicked(true);
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", () => {
          setClicked(false);
          document.removeEventListener("mousemove", handleDrag);
        });
      }}
    >
      <div
        onDragStart={() => setClicked(true)}
        onDragEnd={() => setClicked(false)}
      >
        {clicked ? (
          <FaRegHandRock className="text-white text-3xl p-1 relatvie bg-black bg-opacity-50 rounded-full" />
        ) : (
          <RxHand className="text-white text-3xl p-1 relatvie bg-black bg-opacity-50 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default DraggableLine;

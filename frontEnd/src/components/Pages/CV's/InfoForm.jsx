import { useContext, useState } from "react";
import Image from "../../../assets/form-img.jpg";
import Inputs from "./Inputs";
import { CVContext } from "../../Tools/Context/CVContext";

function InfoForm() {
  const { addCV } = useContext(CVContext);
  const [inputValue, setInputValue] = useState({});

  const [cvInfo, setCVInfo] = useState({
    GeneralInfo: {},
    EducationalHistory: {},
    SkillsAndStrengths: {},
    FormerExperience: {},
    userId: "65c20e06142cd1aa329d1d13",
    Template: 0,
  });
  const [step, setStep] = useState(1);
  const headder = [
    "Hi! Here we will build your CV step by step. Please try to be as elaborate as possible",
    "General Information",
    "Educational History",
    "Skills and Strengths",
    "Former Experience",
  ];

  const saveInfo = () => {
    switch (step) {
      case 2: {
        const oldInfo = { ...cvInfo };
        oldInfo.GeneralInfo = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 3: {
        const oldInfo = { ...cvInfo };
        oldInfo.EducationalHistory = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 4: {
        const oldInfo = { ...cvInfo };
        oldInfo.SkillsAndStrengths = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 5: {
        const oldInfo = { ...cvInfo };
        oldInfo.FormerExperience = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 6: {
        const oldInfo = { ...cvInfo };
        oldInfo.Template = 2;
        setCVInfo(oldInfo);
        break;
      }
      case 7: {
        const oldInfo = { ...cvInfo };
        oldInfo.userId = "65c20e06142cd1aa329d1d13";
        console.log(oldInfo);
        addCV(oldInfo);

      }
    }
    setStep(step + 1);
  };

  return (
    <div
      style={{ backgroundImage: `url(${Image})`, backgroundSize: "cover" }}
      className="bg-grey-300 w-screen min-h-screen flex justify-end items-center"
    >
      <form className="text-white bg-opacity-60 bg-slate-500 p-8 rounded-lg shadow-md w-99 h-full mr-40 flex-col justify-end items-center">
        <div className="text-2xl text-black-700 pb-5 py-4 w-full flex justify-center items-center">
          {headder[step]}
        </div>
        <Inputs
          step={step}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            saveInfo();
          }}
          className="items-baseline w-fit px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-500 flex items-center justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InfoForm;

import { useContext, useState } from "react";
import Image from "../../../assets/form-img.jpg";
import Inputs from "./Inputs";
import { CVContext } from "../../Tools/Context/CVContext";
import { UserContext } from "../../Tools/Context/UserContext";

function InfoForm() {
  const { addCV } = useContext(CVContext);
  const { userInfo } = useContext(UserContext);
  const [inputValue, setInputValue] = useState({});
  const [cvInfo, setCVInfo] = useState({
    GeneralInfo: [],
    EducationalHistory: [],
    SkillsAndStrengths: [],
    FormerExperience: [],
    userId: userInfo?._id,
    Template: 0,
  });
  const [step, setStep] = useState(0);
  const headder = [
    "Hi! Here we will build your CV step by step. Please try to be as elaborate as possible",
    "General Information",
    "Educational History",
    "Skills and Strengths",
    "Former Experience",
    "Choose Template",
    "Finish making your CV!",
  ];

  const saveInfo = () => {
    switch (step) {
      case 1: {
        const oldInfo = { ...cvInfo };
        oldInfo.GeneralInfo = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 2: {
        const oldInfo = { ...cvInfo };
        oldInfo.EducationalHistory = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 3: {
        const oldInfo = { ...cvInfo };
        oldInfo.SkillsAndStrengths = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 4: {
        const oldInfo = { ...cvInfo };
        oldInfo.FormerExperience = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 5: {
        const oldInfo = { ...cvInfo };
        oldInfo.Template = inputValue;
        setCVInfo(oldInfo);
        break;
      }
      case 6: {
        const oldInfo = { ...cvInfo };
        oldInfo.userId = userInfo?._id;
        console.log(oldInfo);
        addCV(oldInfo);
        setStep(-1);
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
        <div className="text-2xl text-black-700 pb-5 py-4 w-full flex justify-center items-center text-center">
          {headder[step]}
        </div>
        <Inputs
          step={step}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setStep={setStep}
          cvInfo={cvInfo}
          saveInfo={saveInfo}
        />
      
      </form>
    </div>
  );
}

export default InfoForm;

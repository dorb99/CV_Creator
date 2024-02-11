import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Inputs = ({ step, setStep, inputValue, setInputValue, cvInfo }) => {
  const [timesInput, setTimesInput] = useState([]);

  const handleInputChange = (e, i, inputType) => {
    e.preventDefault();
    const oldInfo = { ...inputValue };
    oldInfo[`${inputType}_${i}`] = e.target.value;
    setInputValue(oldInfo);
  };

  const handleAddInputField = (e) => {
    event.preventDefault();
    setTimesInput([...timesInput, 1]);
  };

  useEffect(() => {
    const obj = {};
    setInputValue(obj);
    setTimesInput([1]);
  }, [step]);

  return (
    <>
      {step === 0 ? null : step === 1 ? (
        // General Info
        <>
          <input
            id="GeneralInfo_1"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="firstname"
            onChange={(e) => handleInputChange(e, 1, "firstname")}
          />
          <input
            id="GeneralInfo_2"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="lastname"
            onChange={(e) => handleInputChange(e, 2, "lastname")}
          />
          <input
            id="GeneralInfo_3"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="work email"
            onChange={(e) => handleInputChange(e, 3, "work_email")}
          />
          <input
            id="GeneralInfo_4"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="phone number"
            onChange={(e) => handleInputChange(e, 4, "phone_number")}
          />
          <input
            id="GeneralInfo_5"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="profession"
            onChange={(e) => handleInputChange(e, 5, "profession")}
          />
          <textarea
            id="GeneralInfo_6"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            placeholder="Please tell us about yourself as much as you can"
            onChange={(e) => handleInputChange(e, 6, "about_me")}
          />
        </>
      ) : step === 2 ? (
        // Educational Info
        <>
          {timesInput.map((_, i) => (
            <div key={i}>
              <input
                defaultValue={undefined}
                id={`education_${i}`}
                className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
                type="text"
                placeholder="educational history"
                onChange={(e) => handleInputChange(e, i, "education")}
              />
            </div>
          ))}
          <button
            className="mb-5 items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => handleAddInputField(e)}
          >
            Add an input field
          </button>
        </>
      ) : step === 3 ? (
        // Skills And Strengths Info
        <>
          {timesInput.map((_, i) => (
            <div key={i}>
              {" "}
              <input
                defaultValue={undefined}
                id={`SkillsAndStrengths_${i}`}
                className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
                type="text"
                placeholder="Skills And Strengths"
                onChange={(e) => handleInputChange(e, i, "SkillsAndStrengths")}
              />
            </div>
          ))}
          <button
            className="mb-5 items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => handleAddInputField(e)}
          >
            Add an input field
          </button>
        </>
      ) : step === 4 ? (
        // Former Experience Info
        <>
          {timesInput.map((_, i) => (
            <div key={i}>
              {" "}
              <input
                defaultValue={undefined}
                id={`FormerExperience_${i}`}
                className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
                type="text"
                placeholder="Former Experience"
                onChange={(e) => handleInputChange(e, i, "FormerExperience")}
              />
            </div>
          ))}
          <button
            className="mb-5 items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => handleAddInputField(e)}
          >
            Add an input field
          </button>
        </>
      ) : step === 5 ? (
        <div className="flex mb-8 justify-center w-full">
          <button
            className="m-5 items-baseline w-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => {
              e.preventDefault(), setInputValue(1);
            }}
          >
            1
          </button>
          <button
            className="m-5 items-baseline w-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => {
              e.preventDefault(), setInputValue(2);
            }}
          >
            2
          </button>
          <button
            className="m-5 items-baseline w-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => {
              e.preventDefault(), setInputValue(3);
            }}
          >
            3
          </button>
        </div>
      ) : step === 6 ? (
        <div>
          Here is your finished CV. Click submit to save the CV, or go back and
          change something
        </div>
      ) : (
        <div className="flex justify-center items-center p-3 mb-8 space-x-4">
          <button
            className="items-baseline w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-color-brown"
            onClick={(e) => {
              e.preventDefault(), setStep(0);
            }}
          >
            Make another CV!
          </button>
          <Link
            className="items-baseline w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-color-brown"
            onClick={() => setStep(0)}
            to={"/member"}
          >
            Go back to UserHome
          </Link>
        </div>
      )}
    </>
  );
};

export default Inputs;

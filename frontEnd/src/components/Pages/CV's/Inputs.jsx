import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Inputs = ({
  step,
  setStep,
  inputValue,
  setInputValue,
  cvInfo,
  saveInfo,
}) => {
  const [timesInput, setTimesInput] = useState([]);

  const handleInputChange = (e, i, inputType) => {
    e.preventDefault();
    const oldInfo = { ...inputValue };
    oldInfo[`${inputType}_${i}`] = e.target.value;
    setInputValue(oldInfo);
  };

  const handleAddInputField = (e) => {
    e.preventDefault();
    setTimesInput([...timesInput, 1]);
  };

  const handleRemoveInputField = (e) => {
    e.preventDefault();
    setTimesInput((prevTimesInput) => prevTimesInput.slice(0, -1));
  };

  useEffect(() => {
    setInputValue({});
    setTimesInput([1]);
  }, [step]);

  const PrintInputs = (inputType) => {
    return (
      <div>
        {timesInput.map((_, i) => (
          <div key={i}>
            <input
              id={`${inputType.trim}_${i}`}
              className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
              type="text"
              placeholder={inputType}
              onChange={(e) => handleInputChange(e, i, inputType.trim)}
            />
          </div>
        ))}
        <div className="flex w-full items-center justify-around">
          <button
            className="mb-5 items-baseline w-40 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={(e) => handleAddInputField(e)}
          >
            Add an input field
          </button>
          <button
            className="mb-5 items-baseline w-40 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600"
            onClick={(e) => handleRemoveInputField(e)}
          >
            Remove an input field
          </button>
        </div>
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveInfo();
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 0 ? null : step === 1 ? (
        // General Info
        <div>
          <input
            required
            id="GeneralInfo_1"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="firstname"
            onChange={(e) => handleInputChange(e, 1, "firstname")}
          />
          <input
            required
            id="GeneralInfo_2"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="lastname"
            onChange={(e) => handleInputChange(e, 2, "lastname")}
          />
          <input
            required
            id="GeneralInfo_3"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="work email"
            onChange={(e) => handleInputChange(e, 3, "work_email")}
          />
          <input
            required
            id="GeneralInfo_4"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="phone number"
            onChange={(e) => handleInputChange(e, 4, "phone_number")}
          />
          <input
            required
            id="GeneralInfo_5"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="profession"
            onChange={(e) => handleInputChange(e, 5, "profession")}
          />
          <textarea
            required
            id="GeneralInfo_6"
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            placeholder="Please tell us about yourself as much as you can"
            onChange={(e) => handleInputChange(e, 6, "about_me")}
          />
        </div>
      ) : step === 2 ? (
        // Educational Info
        PrintInputs("Educational History")
      ) : step === 3 ? (
        // Skills And Strengths Info
        PrintInputs("Skills And Strengths")
      ) : step === 4 ? (
        // Former Experience Info
        PrintInputs("former experience")
      ) : step === 5 ? (
        // Template
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
      {step !== 7 ? (
        step === 0 ? (
          <div className="flex justify-end items-center p-3 mb-8 space-x-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                saveInfo();
              }}
              type="submit"
              className="w-fit px-4 py-2 bg-stone-500 text-white rounded-lg hover:bg-neutral-600 flex items-center justify-center"
            >
              Start
            </button>
          </div>
        ) : (
          <div className="flex justify-end items-center p-3 mb-8 space-x-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                saveInfo();
              }}
              type="submit"
              className="w-fit px-4 py-2 bg-stone-500 text-white rounded-lg hover:bg-neutral-600 flex items-center justify-center"
            >
              Submit
            </button>
          </div>
        )
      ) : null}
    </form>
  );
};

export default Inputs;

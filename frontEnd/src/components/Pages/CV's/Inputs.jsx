import { useEffect, useState } from "react";

const Inputs = ({ step, inputValue, setInputValue }) => {
  const [timesInput, setTimesInput] = useState([1]);

  const handleInputChange = (e, i, inputType) => {
    e.preventDefault();
    const oldInfo = { ...inputValue };
    oldInfo[`${inputType}_${i}`] = e.target.value;
    setInputValue(oldInfo);
  };

  const handleAddInputField = () => {
    event.preventDefault();
    setTimesInput([...timesInput, 1]);
  };

  useEffect(() => {
    setTimesInput([1]);
    const obj = { ...inputValue };
    Object.keys(obj).forEach((key) => {
      delete obj[key];
    });
    setInputValue(obj);
  }, [step]);

  return (
    <>
      {step === 1 ? null : step === 2 ? (
        //General Info
        <>
          <input
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="Your name"
            onChange={(e) => handleInputChange(e, 1, "name")}
          />
          <input
            className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
            type="text"
            placeholder="your age"
            onChange={(e) => handleInputChange(e, 2, "age")}
          />
        </>
      ) : step === 3 ? (
        //Educational Info
        <>
          {timesInput.map((_, i) => (
            <div>
              <input
                className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
                type="text"
                key={i}
                placeholder="educational history"
                onChange={(e) => handleInputChange(e, i, "education")}
              />
            </div>
          ))}
          <button
            className="items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={handleAddInputField}
          >
            Add an input field
          </button>
        </>
      ) : step === 4 ? (
        //Skills And Strengths Info
        <>
          {timesInput.map((i) => (
            <div>
              <input
                className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
                type="text"
                key={i}
                placeholder="Skills And Strengths"
                onChange={(e) =>
                  handleInputChange(e, i, "Skills And Strengths")
                }
              />
            </div>
          ))}
          <button
            className="items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={handleAddInputField}
          >
            Add an input field
          </button>
        </>
      ) : step === 5 ? (
        //Former Experience Info
        <>
          {timesInput.map((_, i) => (
            <div>
              <input
                className="outline-none transition-all ease-in-out w-full px-4 py-2 mb-4 rounded-lg focus:bg-opacity-30 bg-transparent border-b-2 focus:bg-stone-300 placeholder:text-white"
                type="text"
                key={i}
                placeholder="Former Experience"
                onChange={(e) => handleInputChange(e, i, "Former Experience")}
              />
            </div>
          ))}
          <button
            className="items-baseline w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={handleAddInputField}
          >
            Add an input field
          </button>
        </>
      ) : step === 6 ? (
        <div>templates</div>
      ) : <div>finished! click submit to save the CV!</div>}
    </>
  );
};

export default Inputs;

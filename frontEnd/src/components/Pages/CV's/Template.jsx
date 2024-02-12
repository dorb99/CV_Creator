import React, { useContext } from "react";
import { CVContext } from "../../Tools/Context/CVContext";

const Template = ({ customization }) => {
  const { userCV } = useContext(CVContext);
  const {
    Template,
    GeneralInfo,
    EducationalHistory,
    SkillsAndStrengths,
    FormerExperience,
  } = userCV[0];
  console.log(userCV);

  switch (Template) {
    case "1":
      return (
        <div
          className="flex flex-col items-center justify-center bg-gradient-to-r text-white p-8 print:w-full print:h-full font-sans shadow-lg"
          style={{
            backgroundColor: customization.bg,
            color: customization.colorText,
            fontFamily: customization.font,
          }}
        >
          <div
            className="mb-6 text-center"
            style={{
              color: customization.colorHeader,
              borderColor: customization.colorBorder,
            }}
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              {GeneralInfo.name_1}
            </h1>
            <p className="text-sm lg:text-base xl:text-lg">
              {GeneralInfo.age_2} years old
            </p>
            <p className="text-base lg:text-lg xl:text-xl mt-2">
              *{GeneralInfo.ocupation || "Passionate Creator"}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div>
              <div className="mb-4">
                <h2
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="text-lg lg:text-xl xl:text-2xl border-b-2 border-white pb-2 text-center"
                >
                  Contact
                </h2>
                <p className="text-sm mt-2 lg:text-base xl:text-lg">From:</p>
                <p className="text-sm lg:text-base xl:text-lg">
                  Tel:{GeneralInfo.phone_number}
                </p>
                <p className="text-sm lg:text-base xl:text-lg">
                  Email: {GeneralInfo.email}
                </p>
              </div>
              <div>
                <h2
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="text-lg lg:text-xl xl:text-2xl border-b-2 border-white pb-2 text-center"
                >
                  Education
                </h2>
                <ul className="list-disc mt-2">
                  {Object.keys(EducationalHistory).map((key, index) => (
                    <li
                      key={index}
                      className="mb-1 text-sm lg:text-base xl:text-lg"
                    >
                      {key}: {EducationalHistory[key]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-6 p-4 rounded-lg">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-2 text-center">
                  About Me
                </h2>
                <p className="text-base lg:text-lg xl:text-xl leading-loose text-justify">
                  {GeneralInfo.aboutme ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ligula nec neque aliquet, a finibus nunc volutpat..."}
                </p>
              </div>
              <div>
                <h2
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="text-lg lg:text-xl xl:text-2xl border-b-2 border-white pb-2 text-center"
                >
                  Work Experience
                </h2>
                <ul className="list-disc mt-2">
                  {Object.values(FormerExperience).map((experience, index) => (
                    <li
                      key={index}
                      className="mb-1 text-sm lg:text-base xl:text-lg"
                    >
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h2
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="text-lg lg:text-xl xl:text-2xl border-b-2 border-white pb-2 text-center"
                >
                  Skills
                </h2>
                <ul className="list-disc mt-2">
                  {Object.keys(SkillsAndStrengths).map((key, index) => (
                    <li
                      key={index}
                      className="mb-1 text-sm lg:text-base xl:text-lg"
                    >
                      {key}: {SkillsAndStrengths[key]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );

    case "1":
      return (
        <div
          className="w-fit min-h-fit flex flex-col lg:flex-row"
          style={{
            backgroundColor: customization.bgLeft,
            color: customization.colorText,
            fontFamily: customization.font,
            borderColor: customization.colorBorder,
          }}
        >
          <div
            className="w-full lg:w-fit h-fit pl-8 lg:pl-36 pb-12 bg-emerald-600 text-white"
            style={{
              backgroundColor: customization.bg,
              color: customization.colorHeader,
              borderColor: customization.colorBorder,
            }}
          >
            <div
              style={{
                borderColor: customization.colorBorder,
              }}
              className="w-72 h-36 border-l-2 border-black"
            ></div>
            <div className="font-extrabold text-6xl py-12 flex flex-col">
              <span>{GeneralInfo.name_1}</span>
              <span>{GeneralInfo.age_2}y/o</span>
            </div>
            <div className="tracking-widest text-4xl">
              *{GeneralInfo.ocupation || "FullStack Developer"}
            </div>
            <div
              style={{
                borderColor: customization.colorBorder,
              }}
              className="h-16 border-l-2 border-black text-3vh"
            ></div>
            <div className="w-96">
              <div className="w-fit h-fit my-3 text-3xl flex flex-col justify-start">
                <span
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="border-b-1 border-black"
                >
                  From:
                </span>
                <span
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="border-b-1 border-black"
                >
                  Tel: <p>{GeneralInfo.phone_number}</p>
                </span>
                <span
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="border-b-1 border-black"
                >
                  Email: <p>{GeneralInfo.email}</p>
                </span>
              </div>
              <ul>
                <span
                  style={{
                    borderColor: customization.colorBorder,
                  }}
                  className="text-4xl border-b-2 border-black"
                >
                  Education
                </span>
                {Object.keys(EducationalHistory).map((key, index) => (
                  <li
                    style={{
                      borderColor: customization.colorBorder,
                    }}
                    key={index}
                    className="w-fit h-fit border-b-2 border-black my-3 text-2xl"
                  >
                    {key}: {EducationalHistory[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-full min-h-fit flex flex-col p-8 lg:p-20 border-l-2 border-black">
            <div className="w-fit flex flex-col justify-center text-left mb-5 lg:ml-3">
              <span
                style={{
                  borderColor: customization.colorBorder,
                }}
                className="border-b-2 border-black"
              >
                about me
              </span>
              {GeneralInfo.aboutme ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod ligula nec neque aliquet, a finibus nunc volutpat. Integer consectetur commodo metus, vel tincidunt neque imperdiet in. Sed nec tortor a metus iaculis bibendum. Nulla facilisi. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Duis eget lacinia nunc. Proin sit amet enim in purus egestas tincidunt. Quisque varius, justo ac dignissim pellentesque, libero velit cursus lacus, nec dictum quam libero in metus. Curabitur vitae arcu et odio fermentum suscipit. Integer scelerisque fermentum ex, sit amet finibus ex fermentum non. Nunc consequat, metus ut ultrices fermentum, justo mi accumsan metus, et dapibus mauris nunc sit amet dui. Sed lacinia finibus enim eu accumsan. Etiam nec orci nec massa tincidunt condimentum ut ut elit."}
            </div>
            <div className="w-fit flex flex-col justify-center text-left lg:ml-3">
              <span className="border-b-2 border-black">Work Experience</span>
              <ul className="list-disc">
                {Object.values(FormerExperience).map((experience, index) => (
                  <li key={index} className="mb-2">
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <ul>
                <span className="text-4xl border-b-2 border-black">Skills</span>
                {Object.keys(SkillsAndStrengths).map((key, index) => (
                  <li
                    key={index}
                    className="w-fit h-fit border-b-2 my-3 list-disc  border-gray-400"
                  >
                    {key}:{SkillsAndStrengths[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    case "2":
      return (
        <div
          className="flex flex-col items-center justify-center p-8 min-h-screen"
          style={{
            color: customization.colorText,
            fontFamily: customization.font,
            borderColor: customization.colorBorder,
            backgroundColor: customization.bg,
          }}
        >
          <div
            className="text-center bg-blue-500 p-4 rounded-md mb-4"
            style={{
              backgroundColor: customization.bgLeft,
              color: customization.colorHeader,
              borderColor: customization.colorBorder,
            }}
          >
            <h1 style={{ fontSize: "2.5em" }}>{GeneralInfo.name_1}</h1>
            <p>{GeneralInfo.age_2} years old</p>
            <p>From:{GeneralInfo.living}</p>
            <p>Phone:{GeneralInfo.phone_number}</p>
            <p>Email:{GeneralInfo.email}</p>
          </div>
          <div className="mb-4">
            <h2
              style={{
                fontSize: "1.8em",
                borderBottom: "2px solid #333",
                paddingBottom: "10px",
              }}
            >
              About Me
            </h2>
            <p className="text-lg">
              {GeneralInfo.aboutme ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
            </p>
          </div>
          <div className="mb-4">
            <h2
              style={{
                borderColor: customization.colorBorder,
              }}
            >
              Work Experience
            </h2>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {Object.values(FormerExperience).map((experience, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "15px", fontSize: "1.2em" }}
                >
                  {experience}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              style={{
                fontSize: "1.8em",
                borderBottom: "2px solid #333",
                paddingBottom: "10px",
                marginTop: "20px",
              }}
            >
              Skills
            </h2>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {Object.keys(SkillsAndStrengths).map((key, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "15px", fontSize: "1.2em" }}
                >
                  {key}: {SkillsAndStrengths[key]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    default:
      return <div>Unknown Template</div>;
  }
};

export default Template;

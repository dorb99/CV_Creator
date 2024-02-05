import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import image from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import { useInView } from "react-intersection-observer";
import bgImage from "../../../assets/bg.jpg";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillFileTextFill,
  BsFillAwardFill,
  BsFillGearFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const typedStrings = [
  {
    text: "I Am A Web Developer",
    bgColor: "bg-black",
    textColor: "text-folly",
    typeSpeed: 50,
    fontFamily: "font-sans",
    backSpeed: 50,
    backDelay: 3800,
  },
  {
    text: "I Am A UI/UX Enthusiast",
    bgColor: "bg-yellow-300",
    textColor: "text-buff",
    typeSpeed: 50,
    fontFamily: "font-dmsans",
    backSpeed: 50,
    backDelay: 4080,
  },
  {
    text: "I Am A Passionate Designer",
    bgColor: "bg-green-300",
    textColor: "text-french",
    typeSpeed: 50,
    fontFamily: "font-sarif",
    backSpeed: 50,
    backDelay: 4520,
  },
  {
    text: "I Am A Dedicated BackEnd Developer",
    bgColor: "bg-purple-300",
    textColor: "text-electric-blue",
    typeSpeed: 50,
    fontFamily: "font-montserrat",
    backSpeed: 50,
    backDelay: 5550,
  },
  {
    text: "I Am A Lifelong Learner",
    bgColor: "bg-orange-1000",
    textColor: "text-glaucos",
    typeSpeed: 50,
    fontFamily: "font-mono",
    backSpeed: 50,
    backDelay: 4100,
  },
];

const benefitsStrings = [
  {
    icon: <BsFillPersonFill className="text-5xl" />,
    text: "Create a professional and visually appealing personal profile to showcase your skills and experiences. Highlight your expertise, qualifications, and personal interests in a compelling manner that captivates employers and recruiters.",
  },
  {
    icon: <BsFillBriefcaseFill className="text-5xl" />,
    text: "Build a detailed work history section highlighting your employment journey and achievements. Provide a comprehensive overview of your professional experience, including job responsibilities, accomplishments, and milestones. Impress potential employers with a well-documented employment history.",
  },
  {
    icon: <BsFillFileTextFill className="text-5xl" />,
    text: "Craft an eye-catching and well-organized resume with customizable templates. Choose from a variety of professionally designed templates to create a resume that suits your style. Customize the layout, color scheme, and fonts to make your resume visually appealing and unique.",
  },
  {
    icon: <BsFillAwardFill className="text-5xl" />,
    text: "Showcase your achievements, certifications, and accolades to stand out from the crowd. Highlight your accomplishments and certifications to demonstrate your skills and expertise. Let potential employers see the recognition you've received for your hard work and dedication.",
  },
  {
    icon: <BsFillGearFill className="text-5xl" />,
    text: "Customize the appearance and layout of your CV to match your personal style and preferences. Tailor your CV to reflect your unique personality and professional identity. Choose from a variety of customization options to create a CV that aligns with your personal brand.",
  },
  {
    icon: <BsFillEnvelopeFill className="text-5xl" />,
    text: "Easily share your CV with potential employers or download it in various formats. Share your CV effortlessly with employers by generating a shareable link or downloading it in popular formats like PDF or Word. Ensure that your CV reaches employers in the format that suits their preferences.",
  },
];
const templateImages = [
  { id: 1, name: "Template 1", image: image },
  { id: 2, name: "Template 2", image: image2 },
  { id: 3, name: "Template 3", image: image3 },
  { id: 4, name: "Template 4", image: image },
  { id: 5, name: "Template 5", image: image2 },
  { id: 6, name: "Template 6", image: image3 },
];

function HomePage() {
  const [currentTypedString, setCurrentTypedString] = useState(0);

  const handleNextString = () => {
    setCurrentTypedString((prev) => (prev + 1) % typedStrings.length);
  };

  const CustomButton = ({ text }) => {
    return (
      <button
        className={`relative max-w-40 max-h-16 p-4 bg-transparent border-2  ${typedStrings[currentTypedString].textColor}transition-all ease-in-out rounded-lg overflow-hidden  group hover:text-white`}
      >
        <span className="relative z-10">{text}</span>
        <span className="retlative z-10 before:bg-black before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:block before:content-[''] before:transition-all before:duration-300 ease-in-out group-hover:before:w-full"></span>
        <span className="relative z-10 hover:text-white after:bg-black after:absolute after:top-0 after:right-0 after:w-0 after:h-full after:block after:content-[''] after:transition-all after:duration-300 ease-in-out group-hover:after:w-full"></span>
      </button>
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextString();
    }, typedStrings[currentTypedString].backDelay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTypedString]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <>
        <div
          className={`grid min-h-fit text-white bg-cover bg-center relative pt-20`}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="w-screen h-full absolute bg-black bg-opacity-30"></div>

          <div
            className={`flex flex-col items-center justify-center p-8 relative z-1 w-full text-center`}
          >
            <header
              className={`text-6xl mb-8 transition-all duration-500 ease-in-out`}
            >
              Welcome To PROCV
            </header>
            <ReactTyped
              className={`font-light text-4xl`}
              strings={["So, Who Are You?"]}
              typeSpeed={40}
            />
            <br />
            <ReactTyped
              strings={[typedStrings[currentTypedString].text]}
              typeSpeed={60}
              backSpeed={30}
              backDelay={1000}
              loop
              className={`text-xl md:text-4xl mt-4 font-extralight ${typedStrings[currentTypedString].textColor} ${typedStrings[currentTypedString].fontFamily}`}
            ></ReactTyped>
            <div className="flex justify-center items-baseline space-x-4 mt-8">
              <div onClick={handleNextString}>
                <CustomButton text="Next" />
              </div>
              <CustomButton text="Our Templates" />
              <CustomButton text="Start Now" />
            </div>
          </div>
        </div>
      </>
      <>
        <div className="w-screen min-h-screen border-t-8 border-t-rose-500 p-6 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {templateImages.map((template) => (
              <div
                key={template.id}
                className="flex flex-col items-center p-4 border-2 border-gray-300 rounded-md w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <p className="text-center text-lg font-semibold absolute bottom-4 w-full">
                  {template.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
      <>
        <div className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-2 gap-8 p-8 text-center border-t-8 border-rose-500">
          {benefitsStrings.map((benefit, index) => (
            <div
              key={index}
              ref={ref}
              className={`flex flex-col items-left h-full relative ${benefit.color} p-6 rounded-md mb-8 md:mb-0 md:col-span-1 lg:col-span-1 xl:col-span-1 text-left`}
            >
              <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center">
                {benefit.icon}
              </p>
              {inView && (
                <ReactTyped
                  strings={[benefit.text]}
                  typeSpeed={5}
                  showCursor={false}
                >
                  <p className="w-fit"></p>
                </ReactTyped>
              )}
            </div>
          ))}
        </div>
      </>
    </>
  );
}

export default HomePage;

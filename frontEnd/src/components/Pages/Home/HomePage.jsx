import React, { useState, useEffect } from "react";
import DraggableLine from "../../Tools/DragLine";
import leftImage from "../../../assets/bgg.jpg";
import rightImage from "../../../assets/bg.jpg";
import "../../../App.css";
import { ReactTyped } from "react-typed";
import image from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import benefitImage from "../../../assets/benefitsImage.png";
import { useInView } from "react-intersection-observer";
import { FiCheckCircle } from "react-icons/fi";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsFillFileTextFill,
  BsFillAwardFill,
  BsFillGearFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const typedStrings = [
  {
    text: "I Am A Web Developer",
    bgColor: "bg-black",
    textColor: "text-rose-500",
    typeSpeed: 50,
    fontFamily: "font-sans",
    backSpeed: 50,
    backDelay: 3800,
  },
  {
    text: "I Am A UI/UX Enthusiast",
    bgColor: "bg-yellow-600",
    textColor: "text-buff",
    typeSpeed: 50,
    fontFamily: "font-dmsans",
    backSpeed: 50,
    backDelay: 4080,
  },
  {
    text: "I Am A Passionate Designer",
    bgColor: "bg-green-300",
    textColor: "text-emerald-500",
    typeSpeed: 50,
    fontFamily: "font-sarif",
    backSpeed: 50,
    backDelay: 4520,
  },
  {
    text: "I Am A Dedicated BackEnd Developer",
    bgColor: "bg-cyan-600",
    textColor: "text-cyan-600",
    typeSpeed: 50,
    fontFamily: "font-dmsans",
    backSpeed: 50,
    backDelay: 5550,
  },
  {
    text: "I Am A Lifelong Learner",
    bgColor: "bg-orange-1000",
    textColor: "text-fuchsia-500",
    typeSpeed: 50,
    fontFamily: "font-dmsans",
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
    icon: <BsFillGearFill className="text-5xl" />,
    text: "Customize the appearance and layout of your CV to match your personal style and preferences. Tailor your CV to reflect your unique personality and professional identity. Choose from a variety of customization options to create a CV that aligns with your personal brand.",
  },
  {
    icon: <BsFillEnvelopeFill className="text-5xl" />,
    text: "Easily share your CV with potential employers or download it in various formats. Share your CV effortlessly with employers by generating a shareable link or downloading it in popular formats like PDF or Word. Ensure that your CV reaches employers in the format that suits their preferences.",
  },
];
const templateImages = [
  { id: 1, name: "Jino", image: image },
  { id: 2, name: "Rista", image: image2 },
  { id: 3, name: "Loto", image: image3 },
  { id: 4, name: "Attero", image: image },
  { id: 5, name: "Sketer", image: image2 },
  { id: 6, name: "Pico", image: image3 },
];
const planOptions = [
  {
    title: "Basic Plan",
    description: "Perfect for small projects",
    features: ["Feature 1", "Feature 2"],
    price: "$19",
  },
  {
    title: "Standard Plan",
    description: "Great for medium-sized projects",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    price: "$49",
  },
  {
    title: "Premium Plan",
    description: "For large and complex projects",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    price: "$99",
  },
];
const comments = [
  { id: 1, user: "User1", comment: "Great CV creator website!" },
  { id: 2, user: "User2", comment: "Easy to use and very efficient." },
  { id: 3, user: "User3", comment: "The templates are impressive." },
];

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTypedString, setCurrentTypedString] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };
  const selectPlan = (index) => {
    setSelectedPlan(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextString();
    }, typedStrings[currentTypedString].backDelay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTypedString]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, comments.length]);
  const [linePosition, setLinePosition] = useState(50);

  const handleNextString = () => {
    setCurrentTypedString((prev) => (prev + 1) % typedStrings.length);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const updateStyles = () => {
    const leftSize = linePosition;
    const rightSize = 100 - linePosition;

    const styles = {
      left: {
        backgroundColor: "rgba(87, 8, 97, 1)",
        layout: "flex-row",
        flexSize: leftSize,
        backgroundImage: `url(${leftImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textColor:
          leftSize > 50
            ? "rgba(250, 225, 125, 1)"
            : leftSize < 50
            ? "rgba(255, 107, 129, 1)"
            : "rgba(255, 255, 255, 1)",
        fontWeight: "extrabold",
      },
      right: {
        backgroundColor: "rgba(255, 165, 0, 1)",
        layout: "flex-row-reverse",
        flexSize: rightSize,
        backgroundImage: `url(${rightImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontWeight: "extrabold",
      },
    };

    return styles;
  };

  const styles = updateStyles();

  return (
    <>
      <>
        <div className="App lg:h-screen h-screen">
          <DraggableLine
            onPositionChange={(position) => setLinePosition(position)}
          />
          <div className="content-wrapper" style={{ display: "flex" }}>
            <div
              className="content max-w-screen"
              style={{
                fontFamily: styles.left.fontFamily,
                backgroundColor: styles.left.backgroundColor,
                color: styles.left.textColor,
                flex: styles.left.flexSize,
                backgroundImage: styles.left.backgroundImage,
                backgroundSize: styles.left.backgroundSize,
                backgroundPosition: styles.left.backgroundPosition,
              }}
            >
              <div className="absolute w-screen z-50 min-h-screen flex flex-col justify-center items-center ">
                <div
                  className={`flex flex-col items-center justify-center sm:p-8  relative z-1 w-screen text-center`}
                >
                  <section className=" py-32 bg-transparent md:px-0 w-screen text-left">
                    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                      <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                          <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                              <span className="block xl:inline text-white tracking-wider">
                                Useful Tools to
                              </span>
                              <br />
                              <span className="block xl:inline text-orange-1000 tracking-wider">
                                Help You Start Faster.
                              </span>
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl tracking-wider">
                              It's never been easier to build beautiful{" "}
                              <span className="text-indigo-500 sm:ml-0.5">
                                Curriculum Vitae
                              </span>
                              that convey your message and tell your story.
                            </p>
                            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                              <Link
                                to={"/"}
                                className="flex items-center px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 w-fit transition-all ease-in-out"
                              >
                                Let's Start
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 ml-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                              </Link>
                              <Link
                                to={"/"}
                                className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 transition-all ease-in-out"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              className="content w-screen"
              style={{
                fontFamily: styles.right.fontFamily,
                backgroundColor: styles.right.backgroundColor,
                color: styles.right.textColor,
                flex: styles.right.flexSize,
                backgroundImage: styles.right.backgroundImage,
                backgroundSize: styles.right.backgroundSize,
                backgroundPosition: styles.right.backgroundPosition,
              }}
            ></div>
            <div className="w-screen lg:h-screen h-screen absolute bg-black bg-opacity-50"></div>
          </div>
        </div>
      </>
      <>
        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img
                src="https://cdn.devdojo.com/images/december2020/productivity.png"
                className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
              />
            </div>

            <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Create Your Perfect CV
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build a professional CV that stands out and enhances your career
                opportunities.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Easily customize your CV with our user-friendly interface
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Stand out from the crowd with professionally designed
                  templates
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Download and share your CV with ease
                </li>
              </ul>
            </div>
          </div>
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Streamlined CV Building
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Save time and effort with our innovative services tailored for
                CV creation. We lead the industry in providing efficient
                solutions.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Automated task management for a seamless CV creation process
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Access detailed analytics to enhance your CV's effectiveness
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Seamlessly integrate your CV with other platforms and tools
                </li>
              </ul>
            </div>

            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <img
                src="https://cdn.devdojo.com/images/december2020/settings.png"
                className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div className="w-full lg:max-w-md">
                  <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                    Jam-packed with all the tools you need to succeed!
                  </h2>
                  <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                    It's never been easier to build a business of your own. Our
                    tools will help you with the following:
                  </p>
                  <ul>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        className="w-8 h-8 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">
                        Faster Processing and Delivery
                      </span>
                    </li>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">
                        Out of the Box Tracking and Monitoring
                      </span>
                    </li>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">
                        100% Protection and Security for Your App
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                <img
                  className="mx-auto sm:max-w-sm lg:max-w-full"
                  src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                  alt="feature image"
                />
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        <div className="w-screen h-fit bg-white ">
          <div className="container mx-auto py-16">
            <div className="flex flex-wrap justify-center gap-8">
              {planOptions.map((plan, index) => (
                <div
                  key={index}
                  className={`w-full sm:w-1/2 md:w-1/2 xl:w-1/3 lg:w-1/4 mb-8 transition-all duration-300 ${
                    selectedPlan === index
                      ? "transform scale-105"
                      : "transform scale-100"
                  }`}
                  onClick={() => selectPlan(index)}
                >
                  <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full">
                    <h2 className="text-2xl font-semibold mb-4">
                      {plan.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex flex-col gap-2">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <FiCheckCircle className="text-rose-500 mr-2" />
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-3xl font-bold my-4">{plan.price}</p>
                    <button className="bg-rose-500 text-white py-2 px-6 rounded-full hover:bg-rose-600 transition duration-300">
                      Select Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
      <>
        <div className="flex items-center justify-center h-fit bg-gray-100 p-20 bg-dark-blue ">
          <div className="relative w-96 h-52 overflow-hidden bg-white rounded-md shadow-md">
            {comments.map((comment, index) => (
              <div
                key={comment.id}
                className={`absolute inset-0 transform transition-transform ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : index < currentIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="h-full flex flex-col justify-between p-6 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg">
                  <p className="text-lg font-semibold">{comment.user}</p>
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 p-3 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none ring-2 focus:border-blue-300 flex items-center transition-all ease-in-out "
            >
              <FaChevronLeft className="" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 p-3 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none ring-2 focus:border-blue-300 flex items-center transition-all ease-in-out"
            >
              <FaChevronRight className="" />
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default App;

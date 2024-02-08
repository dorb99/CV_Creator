import React, { useState, useEffect } from "react";
import DraggableLine from "../../Tools/DragLine";
import leftImage from "../../../assets/bgg.jpg";
import rightImage from "../../../assets/bg.jpg";
import "../../../App.css";
import image from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const testimonialsData = [
  {
    name: "John Coolman",
    role: "CEO of Somethng Cool",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
    quote:
      "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!",
  },
  {
    name: "Jane Circles",
    role: "CTO of The World",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2547&q=80",
    quote:
      "Thanks for creating this service. My life is so much easier. Thanks for making such a great product.",
  },
  {
    name: "John Smithonkey",
    role: "Creator of Monkey",
    image:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1256&q=80",
    quote:
      "Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone.",
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

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
        <>
          <section className="w-screen min-h-screen p-6 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {templateImages.map((template) => (
                <div
                  key={template.id}
                  className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-md w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-lg relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p className="text-center absolute w-full text-indigo-600 tracking-widest font-bold text-4xl text- h-full flex justify-center items-center">
                    <span> {template.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
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
        <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
          <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
            <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4  border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
              {planOptions.map((plan) => (
                <div
                  onClick={() => setSelectedPlan(plan.id)}
                  key={plan.id}
                  className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"
                >
                  <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                    {plan.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                    {plan.description}
                  </p>
                  <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                    <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                      {plan.price}
                    </p>
                    <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                      per user <span className="block">per month</span>
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      console.log("Selected Plan:", selectedPlan);
                    }}
                    className={`inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg ${
                      selectedPlan === plan.id
                        ? "bg-indigo-700 text-slate-100"
                        : "bg-white"
                    }`}
                  >
                    A Cool Hover Effect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
      <>
        <section className="flex items-center justify-center py-20 bg-white min-w-screen">
          <div className="px-16 bg-white">
            <div className="container flex flex-col items-start mx-auto lg:items-center">
              <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
                Don't just take our word for it
              </p>
              <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                See what the real people are saying
              </h2>
              <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>
              <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0"
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                        <img
                          src={testimonial.image}
                          className="object-cover w-full h-full"
                          alt={`Testimonial from ${testimonial.name}`}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h4 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="mt-8 text-lg text-gray-500">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default App;

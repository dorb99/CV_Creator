// import React, { useState, useEffect } from "react";
// import { ReactTyped } from "react-typed";
// import image from "../../../assets/1.png";
// import image2 from "../../../assets/2.png";
// import image3 from "../../../assets/3.png";
// import bgImage from "../../../assets/bg.jpg";
// import benefitImage from "../../../assets/benefitsImage.png";
// import { useInView } from "react-intersection-observer";
// import { FiCheckCircle } from "react-icons/fi";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import {
//   BsFillPersonFill,
//   BsFillBriefcaseFill,
//   BsFillFileTextFill,
//   BsFillAwardFill,
//   BsFillGearFill,
//   BsFillEnvelopeFill,
// } from "react-icons/bs";

// const typedStrings = [
//   {
//     text: "I Am A Web Developer",
//     bgColor: "bg-black",
//     textColor: "text-folly",
//     typeSpeed: 50,
//     fontFamily: "font-sans",
//     backSpeed: 50,
//     backDelay: 3800,
//   },
//   {
//     text: "I Am A UI/UX Enthusiast",
//     bgColor: "bg-yellow-300",
//     textColor: "text-buff",
//     typeSpeed: 50,
//     fontFamily: "font-dmsans",
//     backSpeed: 50,
//     backDelay: 4080,
//   },
//   {
//     text: "I Am A Passionate Designer",
//     bgColor: "bg-green-300",
//     textColor: "text-french",
//     typeSpeed: 50,
//     fontFamily: "font-sarif",
//     backSpeed: 50,
//     backDelay: 4520,
//   },
//   {
//     text: "I Am A Dedicated BackEnd Developer",
//     bgColor: "bg-purple-300",
//     textColor: "text-electric-blue",
//     typeSpeed: 50,
//     fontFamily: "font-montserrat",
//     backSpeed: 50,
//     backDelay: 5550,
//   },
//   {
//     text: "I Am A Lifelong Learner",
//     bgColor: "bg-orange-1000",
//     textColor: "text-glaucos",
//     typeSpeed: 50,
//     fontFamily: "font-mono",
//     backSpeed: 50,
//     backDelay: 4100,
//   },
// ];

// const benefitsStrings = [
//   {
//     icon: <BsFillPersonFill className="text-5xl" />,
//     text: "Create a professional and visually appealing personal profile to showcase your skills and experiences. Highlight your expertise, qualifications, and personal interests in a compelling manner that captivates employers and recruiters.",
//   },
//   {
//     icon: <BsFillBriefcaseFill className="text-5xl" />,
//     text: "Build a detailed work history section highlighting your employment journey and achievements. Provide a comprehensive overview of your professional experience, including job responsibilities, accomplishments, and milestones. Impress potential employers with a well-documented employment history.",
//   },
//   {
//     icon: <BsFillGearFill className="text-5xl" />,
//     text: "Customize the appearance and layout of your CV to match your personal style and preferences. Tailor your CV to reflect your unique personality and professional identity. Choose from a variety of customization options to create a CV that aligns with your personal brand.",
//   },
//   {
//     icon: <BsFillEnvelopeFill className="text-5xl" />,
//     text: "Easily share your CV with potential employers or download it in various formats. Share your CV effortlessly with employers by generating a shareable link or downloading it in popular formats like PDF or Word. Ensure that your CV reaches employers in the format that suits their preferences.",
//   },
// ];
// const templateImages = [
//   { id: 1, name: "Jino", image: image },
//   { id: 2, name: "Rista", image: image2 },
//   { id: 3, name: "Loto", image: image3 },
//   { id: 4, name: "Attero", image: image },
//   { id: 5, name: "Sketer", image: image2 },
//   { id: 6, name: "Pico", image: image3 },
// ];
// const planOptions = [
//   {
//     title: "Basic Plan",
//     description: "Perfect for small projects",
//     features: ["Feature 1", "Feature 2"],
//     price: "$19",
//   },
//   {
//     title: "Standard Plan",
//     description: "Great for medium-sized projects",
//     features: ["Feature 1", "Feature 2", "Feature 3"],
//     price: "$49",
//   },
//   {
//     title: "Premium Plan",
//     description: "For large and complex projects",
//     features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
//     price: "$99",
//   },
// ];
// const comments = [
//   { id: 1, user: "User1", comment: "Great CV creator website!" },
//   { id: 2, user: "User2", comment: "Easy to use and very efficient." },
//   { id: 3, user: "User3", comment: "The templates are impressive." },
//   // Add more comments as needed
// ];

// function HomePage() {
//   const [currentTypedString, setCurrentTypedString] = useState(0);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
//     );
//   };
//   const selectPlan = (index) => {
//     setSelectedPlan(index);
//   };
//   const handleNextString = () => {
//     setCurrentTypedString((prev) => (prev + 1) % typedStrings.length);
//   };

//   const CustomButton = ({ text }) => {
//     return (
//       <button
//         className={`relative max-w-40 max-h-16 p-4 bg-transparent border-2  ${typedStrings[currentTypedString].textColor}transition-all ease-in-out rounded-lg overflow-hidden  group hover:text-white`}
//       >
//         <span className="relative z-10">{text}</span>
//         <span className="retlative z-10 before:bg-black before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:block before:content-[''] before:transition-all before:duration-300 ease-in-out group-hover:before:w-full"></span>
//         <span className="relative z-10 hover:text-white after:bg-black after:absolute after:top-0 after:right-0 after:w-0 after:h-full after:block after:content-[''] after:transition-all after:duration-300 ease-in-out group-hover:after:w-full"></span>
//       </button>
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNextString();
//     }, typedStrings[currentTypedString].backDelay);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentTypedString]);

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex, comments.length]);

//   return (
//     <>
//       <>
//         <div
//           className={`grid min-h-fit text-white bg-cover bg-center relative pt-20`}
//           style={{ backgroundImage: `url(${bgImage})` }}
//         >
//           <div className="w-screen h-full absolute bg-black bg-opacity-30"></div>

//           <div
//             className={`flex flex-col items-center justify-center p-8 relative z-1 w-full text-center`}
//           >
//             <header
//               className={`text-6xl mb-8 transition-all duration-500 ease-in-out`}
//             >
//               Welcome To PROCV
//             </header>
//             <ReactTyped
//               className={`font-light text-4xl`}
//               strings={["So, Who Are You?"]}
//               typeSpeed={40}
//             />
//             <br />
//             <ReactTyped
//               strings={[typedStrings[currentTypedString].text]}
//               typeSpeed={60}
//               backSpeed={30}
//               backDelay={1000}
//               loop
//               className={`text-xl md:text-4xl mt-4 font-extralight ${typedStrings[currentTypedString].textColor} ${typedStrings[currentTypedString].fontFamily}`}
//             ></ReactTyped>
//             <div className="flex justify-center items-baseline space-x-4 mt-8">
//               <div onClick={handleNextString}>
//                 <CustomButton text="Next" />
//               </div>
//               <CustomButton text="Our Templates" />
//               <CustomButton text="Start Now" />
//             </div>
//           </div>
//         </div>
//       </>
//       <>
//         <div className="w-screen min-h-screen border-t-8 border-t-rose-500 p-6 flex items-center justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
//             {templateImages.map((template) => (
//               <div
//                 key={template.id}
//                 className="flex flex-col items-center p-4 border-2 border-gray-300 rounded-md w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-lg relative overflow-hidden cursor-pointer"
//               >
//                 <img
//                   src={template.image}
//                   alt={template.name}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//                 <p className="text-center absolute bottom-4 w-full font-oswald tracking-widest font-bold text-xl">
//                   {template.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//       <>
//         <div className="w-full min-h-screen grid grid-cols-2 grid-rows-2 gap-8 p-8 text-center border-t-8 border-rose-500 bg-dark-blue">
//           <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
//             {benefitsStrings.slice(0, 1).map((benefit, index) => (
//               <React.Fragment key={index}>
//                 <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
//                   {benefit.icon}
//                 </p>
//                 <ReactTyped
//                   strings={[benefit.text]}
//                   typeSpeed={5}
//                   showCursor={false}
//                 >
//                   <p className="w-fit text-white"></p>
//                 </ReactTyped>
//               </React.Fragment>
//             ))}
//           </div>

//           <div className="flex items-center justify-center col-span-1 row-span-2">
//             <img src={benefitImage} alt="" className="w-70 max-h-96" />
//           </div>

//           <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
//             {benefitsStrings.slice(1, 2).map((benefit, index) => (
//               <React.Fragment key={index}>
//                 <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
//                   {benefit.icon}
//                 </p>
//                 <ReactTyped
//                   strings={[benefit.text]}
//                   typeSpeed={5}
//                   showCursor={false}
//                 >
//                   <p className="w-fit text-white"></p>
//                 </ReactTyped>
//               </React.Fragment>
//             ))}
//           </div>

//           <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
//             {benefitsStrings.slice(2, 3).map((benefit, index) => (
//               <React.Fragment key={index}>
//                 <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
//                   {benefit.icon}
//                 </p>
//                 <ReactTyped
//                   strings={[benefit.text]}
//                   typeSpeed={5}
//                   showCursor={false}
//                 >
//                   <p className="w-fit text-white"></p>
//                 </ReactTyped>
//               </React.Fragment>
//             ))}
//           </div>

//           <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
//             {benefitsStrings.slice(3, 4).map((benefit, index) => (
//               <React.Fragment key={index}>
//                 <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
//                   {benefit.icon}
//                 </p>
//                 <ReactTyped
//                   strings={[benefit.text]}
//                   typeSpeed={5}
//                   showCursor={false}
//                 >
//                   <p className="w-fit text-white"></p>
//                 </ReactTyped>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </>
//       <>
//         <div className="w-screen h-fit bg-white border-t-8 border-t-rose-500">
//           <div className="container mx-auto py-16">
//             <div className="flex flex-wrap justify-center gap-8">
//               {planOptions.map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`w-full sm:w-1/2 md:w-1/2 xl:w-1/3 lg:w-1/4 mb-8 transition-all duration-300 ${
//                     selectedPlan === index
//                       ? "transform scale-105"
//                       : "transform scale-100"
//                   }`}
//                   onClick={() => selectPlan(index)}
//                 >
//                   <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full">
//                     <h2 className="text-2xl font-semibold mb-4">
//                       {plan.title}
//                     </h2>
//                     <p className="text-gray-600 mb-4">{plan.description}</p>
//                     <div className="flex flex-col gap-2">
//                       {plan.features.map((feature, i) => (
//                         <div key={i} className="flex items-center">
//                           <FiCheckCircle className="text-rose-500 mr-2" />
//                           <p>{feature}</p>
//                         </div>
//                       ))}
//                     </div>
//                     <p className="text-3xl font-bold my-4">{plan.price}</p>
//                     <button className="bg-rose-500 text-white py-2 px-6 rounded-full hover:bg-rose-600 transition duration-300">
//                       Select Plan
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//       <>
//         <div className="flex items-center justify-center h-fit bg-gray-100 p-20 bg-dark-blue border-t-8 border-rose-500">
//           <div className="relative w-96 h-52 overflow-hidden bg-white rounded-md shadow-md">
//             {comments.map((comment, index) => (
//               <div
//                 key={comment.id}
//                 className={`absolute inset-0 transform transition-transform ${
//                   index === currentIndex
//                     ? "translate-x-0 opacity-100"
//                     : index < currentIndex
//                     ? "-translate-x-full opacity-0"
//                     : "translate-x-full opacity-0"
//                 }`}
//               >
//                 <div className="h-full flex flex-col justify-between p-6 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg">
//                   <p className="text-lg font-semibold">{comment.user}</p>
//                   <p className="text-sm">{comment.comment}</p>
//                 </div>
//               </div>
//             ))}
//             <button
//               onClick={prevSlide}
//               className="absolute top-1/2 left-2 p-3 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none ring-2 focus:border-blue-300 flex items-center transition-all ease-in-out "
//             >
//               <FaChevronLeft className="" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute top-1/2 right-2 p-3 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none ring-2 focus:border-blue-300 flex items-center transition-all ease-in-out"
//             >
//               <FaChevronRight className="" />
//             </button>
//           </div>
//         </div>
//       </>
//     </>
//   );
// }

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

  const CustomButton = ({ text }) => {
    return (
      <button
        className={`relative max-w-40 max-h-16 p-4 bg-transparent border-2  ${typedStrings[currentTypedString].textColor}transition-all ease-in-out rounded-lg overflow-hidden  group`}
      >
        <span className="relative z-10 tracking-widest">{text}</span>
        <span className="retlative z-10 before:bg-black before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:block before:content-[''] before:transition-all before:duration-300 ease-in-out group-hover:before:w-full"></span>
        <span className="relative z-10 hover:text-white after:bg-black after:absolute after:top-0 after:right-0 after:w-0 after:h-full after:block after:content-[''] after:transition-all after:duration-300 ease-in-out group-hover:after:w-full"></span>
      </button>
    );
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
        <div className="App lg:h-0.8 h-screen">
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
              <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full">
                <div
                  className={`flex flex-col items-center justify-center sm:p-8  relative z-1 w-full text-center`}
                >
                  <header
                    className={`text-6xl mb-8 transition-all duration-500 ease-in-out`}
                  >
                    Craft Your Professional Story: Begin Your CV Success Story
                    Today!
                  </header>
                  <ReactTyped
                    className={`font-extrabold text-4xl`}
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
                    className={`text-xl md:text-4xl mt-4 font-normal ${typedStrings[currentTypedString].textColor} ${typedStrings[currentTypedString].fontFamily}`}
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
            <div className="w-screen lg:h-0.8 h-screen absolute bg-black bg-opacity-50"></div>
          </div>
        </div>
      </>
      <>
        <div className="w-screen min-h-screen border-t-8 border-t-rose-500 p-6 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {templateImages.map((template) => (
              <div
                key={template.id}
                className="flex flex-col items-center p-4 border-2 border-gray-300 rounded-md w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-lg relative overflow-hidden cursor-pointer"
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <p className="text-center absolute bottom-4 w-full font-oswald tracking-widest font-bold text-xl">
                  {template.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
      <>
        <div className="w-full min-h-screen grid grid-cols-2 grid-rows-2 gap-8 p-8 text-center border-t-8 border-rose-500 bg-dark-blue">
          <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
            {benefitsStrings.slice(0, 1).map((benefit, index) => (
              <React.Fragment key={index}>
                <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
                  {benefit.icon}
                </p>
                <ReactTyped
                  strings={[benefit.text]}
                  typeSpeed={5}
                  showCursor={false}
                >
                  <p className="w-fit text-white"></p>
                </ReactTyped>
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center justify-center col-span-1 row-span-2">
            <img src={benefitImage} alt="" className="w-70 max-h-96" />
          </div>

          <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
            {benefitsStrings.slice(1, 2).map((benefit, index) => (
              <React.Fragment key={index}>
                <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
                  {benefit.icon}
                </p>
                <ReactTyped
                  strings={[benefit.text]}
                  typeSpeed={5}
                  showCursor={false}
                >
                  <p className="w-fit text-white"></p>
                </ReactTyped>
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
            {benefitsStrings.slice(2, 3).map((benefit, index) => (
              <React.Fragment key={index}>
                <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
                  {benefit.icon}
                </p>
                <ReactTyped
                  strings={[benefit.text]}
                  typeSpeed={5}
                  showCursor={false}
                >
                  <p className="w-fit text-white"></p>
                </ReactTyped>
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col items-left h-full relative col-span-1 row-span-1 p-6 rounded-md mb-8 text-left">
            {benefitsStrings.slice(3, 4).map((benefit, index) => (
              <React.Fragment key={index}>
                <p className="text-3xl w-14 mb-2 border-b-4 border-rose-500 h-14 flex justify-center items-center text-gray-400">
                  {benefit.icon}
                </p>
                <ReactTyped
                  strings={[benefit.text]}
                  typeSpeed={5}
                  showCursor={false}
                >
                  <p className="w-fit text-white"></p>
                </ReactTyped>
              </React.Fragment>
            ))}
          </div>
        </div>
      </>
      <>
        <div className="w-screen h-fit bg-white border-t-8 border-t-rose-500">
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
        <div className="flex items-center justify-center h-fit bg-gray-100 p-20 bg-dark-blue border-t-8 border-rose-500">
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

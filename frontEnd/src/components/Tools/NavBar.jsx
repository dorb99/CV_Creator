import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import logo from "../../assets/logo.png";
import WhiteLogo from "../../assets/whiteLogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaQuestionCircle, FaSignInAlt } from "react-icons/fa";

function NavBar() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { userInfo, logOutAction } = useContext(UserContext);

  const handleScroll = () => {
    setIsTop(window.scrollY === 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const UnderlineOnHover = ({ children }) => (
    <span className="relative group">
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 ${
          isTop ? "bg-orange-1000 " : "bg-white "
        }`}
      ></span>
    </span>
  );

  return (
    <>
      {isMobile ? (
        <div className="fixed z-infi">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-64 h-screen bg-dark-blue text-white pt-20 z-infi"
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/"
                  className="py-2 hover:bg-blue-950 p-4 text-2xl flex hover:text-white text-gray-400 transition-all ease-in-out justify-start "
                >
                  <FaHome className="mr-2" /> Home
                </Link>
                {userInfo && (
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="flex py-3 text-gray-400 transition-all ease-in-out hover:text-white hover:bg-blue-950 p-4 text-2xl"
                    to={"/profile"}
                  >
                    <FaUser className="mr-2" /> Profile
                  </Link>
                )}
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/about"
                  className="flex py-3 text-gray-400 transition-all ease-in-out hover:text-white hover:bg-blue-950 p-4 text-2xl"
                >
                  <FaUser className="mr-2" /> About Us
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/support"
                  className="flex py-3 text-gray-400 transition-all ease-in-out hover:text-white hover:bg-blue-950 p-4 text-2xl"
                >
                  <FaQuestionCircle className="mr-2" /> Support
                </Link>

                {userInfo ? (
                  <button
                    className="flex py-3 text-gray-400 transition-all ease-in-out hover:text-white hover:bg-blue-950 p-4 text-2xl"
                    onClick={() => logOutAction()}
                  >
                    <FaSignInAlt className="mr-2" /> Log Out
                  </button>
                ) : (
                  <>
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/signup"
                      className="flex py-3 text-gray-400 transition-all ease-in-out hover:text-white hover:bg-blue-950 p-4 text-2xl"
                    >
                      <FaUser className="mr-2" /> Sign Up
                    </Link>
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/login"
                      className="flex py-3 text-gray-400 transition-all ease-in-out hover:text-white hover:bg-blue-950 p-4 text-2xl"
                    >
                      <FaSignInAlt className="mr-2" /> Log In
                    </Link>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-4 text-orange-1000 z-infi text-3xl hover:text-orange-500 transition-all ease-in-out"
          >
            ☰
          </button>
        </div>
      ) : (
        <nav
          className={`w-full px-6 py-3 flex justify-between items-center z-infi fixed ${
            isTop
              ? "bg-opacity-0 text-orange-1000 tracking-widest"
              : "bg-opacity-70 bg-black backdrop-blur-sm text-white tracking-widest"
          } transition-all duration-300 `}
        >
          <div>
            <Link
              onClick={() => setIsOpen(false)}
              to={`${userInfo ? "/member" : "/"}`}
            >
              <img
                src={isTop ? logo : WhiteLogo}
                alt="Logo"
                className="h-12 w-12"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              onClick={() => setIsOpen(false)}
              to={`${userInfo ? "/member" : "/"}`}
              className=" font-bold text-xl"
            >
              <UnderlineOnHover>
                <p>Home</p>
              </UnderlineOnHover>
            </Link>
            {userInfo && (
              <Link
                onClick={() => setIsOpen(false)}
                className=" font-bold text-xl"
                to={"/profile"}
              >
                <UnderlineOnHover>Profile</UnderlineOnHover>
              </Link>
            )}
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className=" font-bold text-xl"
            >
              <UnderlineOnHover>
                <p>About Us</p>
              </UnderlineOnHover>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/support"
              className=" font-bold text-xl"
            >
              <UnderlineOnHover>
                <p>Support</p>
              </UnderlineOnHover>
            </Link>
            {userInfo ? (
              <Link onClick={() => setIsOpen(false)} to={"/"}>
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 py-2 px-6 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300 focus:outline-none focus:border-yellow-800 hover:border-none tracking-widest"
                  onClick={() => logOutAction()}
                >
                  Log Out
                </button>
              </Link>
            ) : (
              <>
                <Link onClick={() => setIsOpen(false)} to={"/signup"}>
                  <button className="bg-yellow-600 hover:bg-yellow-700 py-2 px-6 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300 focus:outline-none focus:border-yellow-800 hover:border-none tracking-widest">
                    Sign Up
                  </button>
                </Link>
                <Link onClick={() => setIsOpen(false)} to={"/login"}>
                  <button className="bg-rose-600 hover:bg-rose-700 py-2 px-6 rounded-lg text-yellow-100 border-b-4 border-rose-700 hover:border-rose-800 transition duration-300 focus:outline-none focus:border-rose-800 hover:border-none tracking-widest">
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;

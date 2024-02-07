import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import WhiteLogo from "../../assets/whiteLogo.png";
function NavBar() {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    setIsTop(window.scrollY === 0);
  };

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
    <nav
      className={`w-full px-6 py-3 flex justify-between items-center z-infi fixed ${
        isTop
          ? "bg-opacity-0 text-orange-1000 tracking-widest"
          : "bg-opacity-70 bg-black backdrop-blur-sm text-white tracking-widest"
      } transition-all duration-300 `}
    >
      <div>
        <Link to="/">
          <img
            src={isTop ? logo : WhiteLogo}
            alt="Logo"
            className="h-12 w-12"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className=" font-bold text-xl">
          <UnderlineOnHover>
            <p>Home</p>
          </UnderlineOnHover>
        </Link>
        <Link to="/about" className=" font-bold text-xl">
          <UnderlineOnHover>
            <p>About Us</p>
          </UnderlineOnHover>
        </Link>
        <Link to="/support" className=" font-bold text-xl">
          <UnderlineOnHover>
            <p>Support</p>
          </UnderlineOnHover>
        </Link>
        <Link to={"/signup"}>
          <button className="bg-yellow-600 hover:bg-yellow-700 py-2 px-6 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300 focus:outline-none focus:border-yellow-800 hover:border-none tracking-widest">
            Sign Up
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="bg-rose-600 hover:bg-rose-700 py-2 px-6 rounded-lg text-yellow-100 border-b-4 border-rose-700 hover:border-rose-800 transition duration-300 focus:outline-none focus:border-rose-800 hover:border-none tracking-widest">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

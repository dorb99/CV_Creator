import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons
import icon from "../../assets/WhiteLogo.png";

function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-12 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center">
          <img className="w-20 p-4" src={icon} alt="Logo" />

          <div className="ml-4">
            <p className="text-lg font-semibold">TypedOut</p>
            <p className="text-sm">Creating Awesome CV Experience</p>
            <p>
              &copy; {new Date().getFullYear()} TypedOut. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <nav className="flex space-x-4">
            <div className="flex flex-col items-baseline">
              <a href="#" className="hover:text-rose-500 text-2xl">
                Home
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Templates
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Benefits
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Plans
              </a>
            </div>
            <div className="flex flex-col items-baseline">
              <a href="#" className="hover:text-rose-500 text-2xl">
                About
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Templates
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Benefits
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Plans
              </a>
            </div>
            <div className="flex flex-col items-baseline">
              <a href="#" className="hover:text-rose-500 text-2xl">
                Support
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Templates
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Benefits
              </a>
              <a href="#" className="hover:text-rose-500 text-gray-300">
                Plans
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-6 lg:mt-0">
          <p className="text-sm">Follow us on:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-rose-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-rose-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-rose-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Components/ThemeContext'; 

const Footer = () => {
  const navigateTo = useNavigate();
  const { theme } = useContext(ThemeContext); 

  const links = [
    { name: "Criminal Law", path: "/criminal" },
    { name: "Business Law", path: "/bussiness" },
    { name: "Insurance Law", path: "/insurance" },
    { name: "Family Law", path: "/family" },
    { name: "Drug Offense", path: "/drug" },
    { name: "Fire Accident", path: "/fire" },
    { name: "Employment Law", path: "/Employment" },
    { name: "Property Law", path: "/property" },
  ];

  const handleNavigate = (path) => {
    navigateTo(path);
  };

  return (
    <footer
      className={`w-full pt-16 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0f172a] text-gray-300"
          : "bg-orange-50 text-gray-700"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div className="space-y-4">
          <h1
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-orange-400" : "text-orange-900"
            }`}
          >
            Legal Sathi
          </h1>
          <h3
            className={`font-semibold text-lg ${
              theme === "dark" ? "text-orange-300" : "text-orange-600"
            }`}
          >
            A law firm agency
          </h3>
          <p className="text-sm md:text-base">
            Empowering individuals and businesses with immediate, customized legal advice. Know Your Right envisions a future where navigating legal intricacies is seamless and straightforward.
          </p>
        </div>

        {/* Law Spectrum */}
        <div className="space-y-3">
          <h2
            className={`text-xl font-semibold mb-2 ${
              theme === "dark" ? "text-orange-300" : "text-orange-800"
            }`}
          >
            Law Spectrum
          </h2>
          {links.map((link, idx) => (
            <h4
              key={idx}
              onClick={() => handleNavigate(link.path)}
              className={`cursor-pointer transition-colors duration-200 text-sm md:text-base ${
                theme === "dark"
                  ? "text-gray-300 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              {link.name}
            </h4>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-orange-300" : "text-orange-800"
            }`}
          >
            Have a Question?
          </h3>
          <div className="flex items-start gap-3">
            <FaLocationDot
              className={`text-2xl mt-1 ${
                theme === "dark" ? "text-orange-400" : "text-orange-600"
              }`}
            />
            <span>M.H. Saboo Siddik College of Engineering, Byculla</span>
          </div>
          <div className="flex items-center gap-3">
            <IoCall
              className={`text-2xl ${
                theme === "dark" ? "text-orange-400" : "text-orange-600"
              }`}
            />
            <span>022 2301 2922</span>
          </div>
          <div className="flex items-center gap-3">
            <IoMail
              className={`text-2xl ${
                theme === "dark" ? "text-orange-400" : "text-orange-600"
              }`}
            />
            <span>legalsathi@gmail.com</span>
          </div>
        </div>

        {/* Business Hours */}
        <div className="space-y-4">
          <h3
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-orange-300" : "text-orange-800"
            }`}
          >
            Business Hours
          </h3>
          <div>
            <h4
              className={`font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Opening Days
            </h4>
            <p>Monday - Saturday: 10am to 9:30pm</p>
          </div>
          <div>
            <h4
              className={`font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Vacations
            </h4>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className={`mt-12 border-t text-center py-6 text-sm transition-colors duration-300 ${
          theme === "dark"
            ? "border-gray-700 text-gray-400"
            : "border-orange-200 text-gray-500"
        }`}
      >
        &copy; {new Date().getFullYear()} Legal Sathi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home/Home";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
// import { useTheme } from "../Context/Context";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState("light");

  useEffect(() => {
    if (isDarkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(isDarkMode);
  }, [isDarkMode]);

  // const toggletheme = () => {
  //   setIsDarkMode(isDarkMode === "dark" ? "light" : "dark");
  // };

  const toggletheme1 = () => {
    setIsDarkMode("light");
  };

  const toggletheme2 = () => {
    setIsDarkMode("dark");
  };

  return (
    <div className="sticky top-0 w-full bg-white/50 z-10  backdrop-blur-md h-12">
      <div className="flex space-x-5 pt-4 justify-between pb-2">
        <h1 className="text-violet-700 dark:text-amber-600 text-xl ml-40 ">
          NiTesH KhAndeLwAL
        </h1>
        <div>
          <div className="inline-flex space-x-6 text-stone-800 font-medium pl-10 mr-48">
            {/* <li className=" hover:text-orange-500"> */}
            {/* <a href="#home">Home</a> */}
            <Link
              className=" cursor-pointer hover:text-orange-500 hover:translate-y-2 hover: duration-300"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // onSetActive={handleSetActive}
            >
              Home
            </Link>
            {/* </li> */}
            {/* <li className=" hover:text-orange-500"> */}
            {/* <a className=" scroll-smooth" href="#about-us">
                About
              </a> */}
            <Link
              className=" cursor-pointer hover:text-orange-500"
              to="about-us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // onSetActive={handleSetActive}
            >
              About
            </Link>
            {/* </li> */}
            {/* <li className=" hover:text-orange-500"> */}
            <Link
              className=" cursor-pointer hover:text-orange-500"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
            {/* </li> */}
            {/* <li className=" hover:text-orange-500"> */}
            <Link
              className=" cursor-pointer hover:text-orange-500"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
            {/* </li> */}
            {/* <li className=" hover:text-orange-500"> */}
            <Link
              className=" cursor-pointer hover:text-orange-500"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>

            <div className=" bg-slate-400 rounded-3xl w-14 h-6 flex space-x-1 ml-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6 cursor-pointer"
                viewBox="0 0 24 24"
                onClick={toggletheme1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-5 cursor-pointer"
                onClick={toggletheme2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

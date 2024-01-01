import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home/Home";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="   sticky top-0 w-full z-10 bg-gradient-to-r from-orange-300 h-12">
      <div className="flex space-x-5 pt-4 justify-between pb-2">
        <h1 className="text-violet-700 text-xl ml-40">NiTesH KhAndeLwAL</h1>
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
            {/* </li> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

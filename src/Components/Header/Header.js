import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home/Home";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <nav className="flex space-x-5 mt-5 justify-between">
        <h1 className="text-violet-700 text-xl ml-40">NiTesH KhAndeLwAL</h1>
        <div>
          <ul className="inline-flex space-x-6 text-stone-800 font-medium pl-10 mr-48">
            <li className=" hover:text-orange-500">
              {/* <a href="#home">Home</a> */}
              <Link
                className=" cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={handleSetActive}
              >
                Home
              </Link>
            </li>
            <li className=" hover:text-orange-500">
              {/* <a className=" scroll-smooth" href="#about-us">
                About
              </a> */}
              <Link
                className=" cursor-pointer"
                to="about-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={handleSetActive}
              >
                About
              </Link>
            </li>
            <li className=" hover:text-orange-500">
              <Link
                className=" cursor-pointer"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className=" hover:text-orange-500">
              <Link
                className=" cursor-pointer"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className=" hover:text-orange-500">
              <Link
                className=" cursor-pointer"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

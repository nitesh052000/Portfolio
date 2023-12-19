import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home/Home";

const Header = () => {
  return (
    <div>
      <nav className="flex space-x-5 mt-5 justify-between">
        <h1 className="text-violet-700 text-xl ml-40">NiTesH KhAndeLwAL</h1>
        <div>
          <ul className="inline-flex space-x-6 text-stone-800 font-medium pl-10 mr-48">
            <li className=" hover:text-orange-500">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-orange-500">
              <a href="#about-us"> About</a>
            </li>
            <li className=" hover:text-orange-500">
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li className=" hover:text-orange-500">
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
            <li className=" hover:text-orange-500">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

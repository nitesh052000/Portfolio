import React from "react";
import { Link } from "react-scroll";

const Scroll = () => {
  return (
    <div className="  ml-7 inline-flex mt-7">
      <Link
        className=" cursor-pointer flex"
        activeClass="active"
        to="about-us"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <svg
          className=" animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 6a1 1 0 00-1 1v2a1 1 0 002 0V7a1 1 0 00-1-1zm0-4a7 7 0 00-7 7v6a7 7 0 0014 0V9a7 7 0 00-7-7zm5 13a5 5 0 01-10 0V9a5 5 0 0110 0z"></path>
        </svg>
        <h1 className=" font-serif ">Scroll Down</h1>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-9"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg> */}
      </Link>
    </div>
  );
};

export default Scroll;

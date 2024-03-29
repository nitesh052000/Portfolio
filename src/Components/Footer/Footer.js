import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunaday",
  ];

  let now = new Date();
  let day = now.getDay();

  return (
    <div className="mt-24 dark:bg-slate-900">
      <div>
        <img className=" h-90 w-full" src="background.png"></img>
      </div>
      <div className=" -translate-y-28">
        <img
          class="gif"
          src="https://media.tenor.com/LkYuOisQmz4AAAAi/car.gif"
        ></img>
      </div>
      <div>
        <h1 className="font-semibold text-2xl text-center mt-8 text-slate-950 dark:text-slate-100">
          © Nitesh Khandelwal , Have a good {days[day]}
        </h1>
        <div className="flex mt-5 justify-center space-x-8">
          <Link
            className=" cursor-pointer"
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h1 className="text-slate-950 dark:text-slate-100">About</h1>
          </Link>
          <Link
            className=" cursor-pointer"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h1 className="text-slate-950 dark:text-slate-100">Projects</h1>
          </Link>
          <Link
            className=" cursor-pointer"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h1 className="text-slate-950 dark:text-slate-100">Skills</h1>
          </Link>
        </div>
        <div className=" flex justify-center mt-8 space-x-7">
          <a href="https://github.com/nitesh052000">
            <svg
              className="w-5 h-5 stroke-black dark:stroke-slate-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <path
                d="M18.946 6.29a6.606 6.606 0 00-.418-2.185 4.412 4.412 0 00-1.039-1.594 4.412 4.412 0 00-1.594-1.039 6.606 6.606 0 00-2.184-.418C12.75 1.01 12.444 1 10 1s-2.75.01-3.71.054a6.606 6.606 0 00-2.185.418A4.412 4.412 0 002.51 2.511a4.412 4.412 0 00-1.039 1.594 6.606 6.606 0 00-.418 2.184C1.01 7.25 1 7.556 1 10s.01 2.75.054 3.71a6.606 6.606 0 00.418 2.185 4.412 4.412 0 001.039 1.594 4.411 4.411 0 001.594 1.039 6.606 6.606 0 002.184.418C7.25 18.99 7.556 19 10 19s2.75-.01 3.71-.054a6.606 6.606 0 002.185-.418 4.602 4.602 0 002.633-2.633 6.606 6.606 0 00.418-2.184C18.99 12.75 19 12.444 19 10s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 01-.31 1.67 2.98 2.98 0 01-1.708 1.709 4.979 4.979 0 01-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 01-1.67-.31 2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035 4.978 4.978 0 01-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 01.31-1.67 2.788 2.788 0 01.673-1.036 2.788 2.788 0 011.035-.673 4.979 4.979 0 011.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 011.67.31 2.788 2.788 0 011.036.673 2.788 2.788 0 01.673 1.035 4.979 4.979 0 01.31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM10 5.378A4.622 4.622 0 1014.622 10 4.622 4.622 0 0010 5.378zM10 13a3 3 0 113-3 3 3 0 01-3 3zm5.884-7.804a1.08 1.08 0 11-1.08-1.08 1.08 1.08 0 011.08 1.08z"
                transform="translate(-1 -1)"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/nitesh052000">
            <svg
              className="h-5 w-5 stroke-black dark:stroke-slate-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 005.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 012.003-.27 7.65 7.65 0 012.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0016 8.032C16 3.596 12.418 0 7.999 0z"></path>
            </svg>
          </a>
        </div>
        <h1 className=" text-center mt-20 stroke-black dark:stroke-slate-50 text-slate-950 dark:text-slate-100">
          © Nitesh. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;

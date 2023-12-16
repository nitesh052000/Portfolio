import React from "react";
import Info from "./Info";

const About = () => {
  return (
    <div className="mt-24">
      <h2 className=" text-3xl font-semibold text-center gap-x-6">About Me</h2>
      <h3 className="text-center">My Introduction</h3>

      <div className="flex flex-row space-x-aadhiPyali justify-center mt-24  h-72 space-x-28">
        <div className="w-80">
          <img src="mypic.jpeg" alt="nitesh" className="w-80 h-72 rounded-xl" />
        </div>
        <div className="w-80">
          <Info />
          <p className=" mt-6">
            MERN stack developer with a passion for building websites and
            applications with UI. You can see what I am up to on my GitHub.
          </p>
          <button class="btnn">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;

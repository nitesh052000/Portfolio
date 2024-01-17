import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <div id="skills" className="mt-24 dark:bg-slate-900">
      <h2 className=" text-4xl font-semibold text-center gap-x-6  text-slate-950 dark:text-slate-100">
        Skills
      </h2>
      <h3 className="text-center text-xs  text-slate-950 dark:text-slate-100">
        My Technical Level
      </h3>
      <div className="flex space-x-7 justify-center mt-24">
        <div
          className=" w-96 h-80 bg-white rounded-3xl border-2 border-opacity-10"
          data-aos="fade-right"
        >
          <Frontend />
        </div>
        <div
          className=" w-96 h-80 bg-white rounded-3xl border-2   border-opacity-10"
          data-aos="fade-left"
        >
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Skills;

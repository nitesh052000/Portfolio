import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <div className="mt-24">
      <h2 className=" text-4xl font-semibold text-center gap-x-6">Skills</h2>
      <h3 className="text-center text-xs">My Technical Level</h3>
      <div className="flex space-x-7 justify-center mt-24">
        <div className=" w-96 h-80 bg-white rounded-3xl border-2 border-opacity-10">
          <Frontend />
        </div>
        <div className=" w-96 h-80 bg-white rounded-3xl border-2   border-opacity-10">
          <Backend />
        </div>
      </div>
    </div>
  );
};

export default Skills;

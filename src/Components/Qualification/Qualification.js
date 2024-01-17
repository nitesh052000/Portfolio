import React from "react";
import Content from "./Content";

const Qualification = () => {
  return (
    <div className="mt-24 dark:bg-slate-900">
      <h2 className=" text-4xl font-semibold text-center gap-x-6  text-slate-950 dark:text-slate-100">
        Qualification
      </h2>
      <h3 className="text-center text-xs  text-slate-950 dark:text-slate-100">
        My Personal Journey
      </h3>
      <div className="flex justify-center mt-12 font-semibold space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-black dark:stroke-slate-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
        <h3 className=" text-slate-950 dark:text-slate-100">Education</h3>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Qualification;

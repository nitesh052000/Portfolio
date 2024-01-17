import React from "react";
import Talktome from "./Talktome";

const Getintouch = () => {
  return (
    <div id="contact" className=" mt-24 dark:bg-slate-900">
      <h2 className=" text-4xl font-semibold text-center gap-x-6 text-slate-950 dark:text-slate-100">
        Get in Touch
      </h2>
      <h3 className="text-center text-xs text-slate-950 dark:text-slate-100">
        Contact me
      </h3>
      <Talktome />
    </div>
  );
};

export default Getintouch;

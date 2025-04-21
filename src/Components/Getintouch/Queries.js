import React from "react";
import TextField from "@mui/material/TextField";

const Queries = () => {
  return (
    <div className=" mt-6 gap-5">
      <input
        className=" p-4 rounded-full mb-5 w-full"
        placeholder="Enter your Name"
        type="text"
      />
      <input
        className=" p-4 rounded-full mb-5 w-full"
        placeholder="Enter your email"
        type="text"
      />
      <input
        className=" p-4 rounded-full mb-5 w-full"
        placeholder="Enter your query !"
        type="text"
      />
      <button class="btnnn">Send Message</button>
    </div>
  );
};

export default Queries;

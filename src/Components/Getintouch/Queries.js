import React from "react";
import TextField from "@mui/material/TextField";

const Queries = () => {
  return (
    <div className=" mt-6">
      <TextField
        className=" w-full"
        label="Enter Your name"
        variant="outlined"
      />
      <TextField
        className=" w-full"
        label="Insert your email"
        variant="outlined"
      />
      <TextField
        className=" w-full h-40"
        label="Enter your query/request here"
        variant="outlined"
      />
      <button class="btnnn">Send Message</button>
    </div>
  );
};

export default Queries;

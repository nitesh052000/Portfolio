import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <div className="grid grid-cols-10 mt-48">
      <div className="ml-6 flex flex-col gap-6 pt-12">
        <a href="https://twitter.com/NiteshK82298714">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/nit-khandelwal/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/nitesh052000">
          <GitHubIcon />
        </a>
      </div>
      <div className="flex flex-col col-span-4 ml-20">
        <h1 className=" text-5xl font-semibold">Nitesh Khandelwal🖐️</h1>
        <div className="flex flex-row">
          <div className=" h-[2px] w-12 bg-slate-800 mt-6"></div>
          <h3 className=" text-xl mt-2 font-semibold pl-4">
            Software Developer , Web Developer
          </h3>
        </div>

        <p className="pt-2 w-64">
          A results-driven Software Developer ,enthusiastic,creative Web
          Developer with excellent communication skills ,ready to give my best
          to achieve reamrkable outcomes.
        </p>
        <a href="/contact">
          <button class="btn">Say Hello</button>
        </a>
      </div>
      <div className="[mask-image:url(vector.svg)] [mask-repeat:no-repeat] col-span-5 justify-center items-center ml-10">
        <img src="ss.png" alt="Nitesh Khandelwal" className="" />
      </div>
      <div>
        <Scroll />
      </div>
    </div>
  );
};

export default Home;

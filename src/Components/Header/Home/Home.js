import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Scroll from "./Scroll";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Home = () => {
  // const navigate = useNavigate();

  // const navigatetotouch = () => {
  //   navigate("/Getintouch");
  // };

  return (
    <div>
      <div id="home" className="grid grid-cols-10 mt-48">
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
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button class="btn">Say Hello</button>
          </Link>
        </div>
        {/* <div className="[mask-image:url(vector.svg)] [mask-repeat:no-repeat] col-span-5 justify-center items-center ml-20">
        <img src="ss.png" alt="Nitesh Khandelwal" className="" />
      </div> */}
        <div className="home__img  ml-40"></div>
      </div>
      <div className=" mt-14  ml-9">
        <Scroll />
      </div>
    </div>
  );
};

export default Home;

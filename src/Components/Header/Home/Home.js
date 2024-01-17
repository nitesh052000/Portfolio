import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Scroll from "./Scroll";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Home = () => {
  // const navigate = useNavigate();

  // const navigatetotouch = () => {
  //   navigate("/Getintouch");
  // };

  return (
    <div>
      <div id="home" className="grid grid-cols-10 mt-48 dark:bg-slate-900">
        <div className="ml-6 flex flex-col gap-6 pt-12 stroke-black dark:stroke-slate-50">
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
          <h1 className=" text-5xl font-semibold  text-slate-950 dark:text-slate-100">
            Nitesh Khandelwal🖐️
          </h1>
          <div className="flex flex-row mt-3">
            <div className=" h-[2px] w-14 bg-slate-800 mt-6 "></div>
            {/* <h3 className="text-xl mt-2 font-semibold pl-4">
              Software Developer , Web Developer
            </h3> */}
            <div className="  text-xs mt-2  font-normal pl-4">
              <TypeAnimation
                sequence={[
                  "I am Software Developer",
                  1000,
                  "I am Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "orange",
                }}
                repeat={Infinity}
              />
            </div>
          </div>

          <p
            className="pt-2 w-64  text-slate-950 dark:text-slate-100"
            data-aos="fade-in"
          >
            A results-driven Software Developer ,enthusiastic,creative Web
            Developer with excellent communication skills ,ready to give my best
            to achieve remarkable outcomes.
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

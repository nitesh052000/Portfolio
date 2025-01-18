import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Crypto Hunter",
      img: "new.1.png",
      link: "https://crypto-hunter-8hw0.onrender.com",
    },
    {
      id: 2,
      title: "Chat App",
      img: "Sc.png",
      link: "https://github.com/nitesh052000/chat-app",
    },
    {
      id: 3,
      title: "PowerBI Dashboard",
      img: "Power.png",
      link: "https://github.com/nitesh052000/Power-Bi-Project",
    },
    {
      id: 4,
      title: "To-Do-List",
      img: "Todo.png",
      link: "https://github.com/nitesh052000/To-Do-List",
    },
    {
      id: 5,
      title: "Portfolio",
      img: "port.png",
      link: "https://github.com/nitesh052000/Portfolio",
    },
  ];

  return (
    <div id="portfolio" className="mt-24 dark:bg-slate-900">
      <h2 className="text-4xl font-semibold text-center text-slate-950 dark:text-slate-100">
        Portfolio
      </h2>
      <h3 className="text-center text-xs text-slate-950 dark:text-slate-100">
        Most Recent Projects
      </h3>
      <Swiper
        spaceBetween={0}
        slidesPerView={3} // Show 3 slides at a time
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mt-14"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-white h-60 w-80 rounded-xl mx-auto">
              <div className="mx-4 mt-5">
                <img
                  className="rounded-xl h-40"
                  src={project.img}
                  alt={project.title}
                />
                <h1 className="font-semibold mt-2">{project.title}</h1>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex text-xs">
                    <h1>Demo/GitHub</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;

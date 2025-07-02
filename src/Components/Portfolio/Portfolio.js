import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
      title: "Expense Tracker",
      img: "Screenshot (138).png",
      link: "https://expense-tracker-frontend-q36q.onrender.com",
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
    {
      id: 6,
      title: "Mystry-Message",
      img: "mystr.png",
      link: "https://github.com/nitesh052000/Portfolio",
    },
    {
      id: 7,
      title: "Cloudinary-Saas",
      img: "cloud.png",
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
        // slidesPerView={3} // Show 3 slides at a time
        navigation
        // pagination={{ clickable: true }}
        className="mt-14"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile: 1 slide
          640: { slidesPerView: 2 }, // Tablets: 2 slides
          1024: { slidesPerView: 3 }, // Desktops: 3 slides
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-white h-60 w-80 rounded-xl mx-auto p-[1px]">
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
                  <div className="flex text-xs gap-4">
                    <h1>Demo</h1>
                    <h1>Github</h1>
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

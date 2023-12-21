import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="mt-24">
      <h2 className=" text-4xl font-semibold text-center gap-x-6">Portfolio</h2>
      <h3 className="text-center text-xs">Most Recent Project</h3>
      <div className="flex space-x-9 justify-center mt-14 ">
        <div className=" bg-white h-60  w-80 rounded-xl">
          <div className=" mx-4 mt-5">
            <img
              className=" rounded-xl h-40"
              src="new.1.png"
              alt="cryptoimage"
            ></img>
            <h1 className=" font-semibold mt-2">Crypto Hunter</h1>
            <a href="https://crypto-hunter-8hw0.onrender.com">
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
        <div className=" bg-white h-60 w-80 rounded-xl">
          <div className=" mx-4 mt-5">
            <img
              className=" rounded-xl h-40"
              src="Sc.png"
              alt="cryptoimage"
            ></img>
            <h1 className=" font-semibold mt-2">Chat App</h1>
            <a href="https://github.com/nitesh052000/chat-app">
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
        <div className=" bg-white h-60 w-80 rounded-xl">
          <div className=" mx-4 mt-5">
            <img
              className=" rounded-xl h-40"
              src="Power.png"
              alt="cryptoimage"
            ></img>
            <h1 className=" font-semibold mt-2">PowerBI Dashboard</h1>
            <a href="https://github.com/nitesh052000/Power-Bi-Project">
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
      </div>
      <div className="flex space-x-9 justify-center mt-6">
        <div className=" bg-white h-60  w-80 rounded-xl">
          <div className=" mx-4 mt-5">
            <img
              className=" rounded-xl h-40"
              src="Todo.png"
              alt="cryptoimage"
            ></img>
            <h1 className=" font-semibold mt-2">To-Do-List</h1>
            <a href="https://github.com/nitesh052000/Power-Bi-Project">
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
        <div className=" bg-white h-60 w-80 rounded-xl"></div>
        <div className=" bg-white h-60 w-80 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Portfolio;

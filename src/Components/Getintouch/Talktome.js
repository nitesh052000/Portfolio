import React from "react";
import Queries from "./Queries";

const Talktome = () => {
  return (
    <div className="flex  justify-evenly mt-6">
      <div className="  h-[500px] w-[300px]">
        <h1 className=" text-center font-semibold text-slate-950 dark:text-slate-100">
          Talk to me
        </h1>
        <div className=" mt-4 space-y-4 ">
          <div className="  bg-white rounded-xl w-[300px] h-[140px]  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <h1 className=" text-center  font-semibold ">Email</h1>
            <h1 className="text-center">niteshkhandelwal0504@gmail.com</h1>
            <div className="flex justify-center mt-5">
              <a
                className=" flex items-center gap-2"
                href="mailto:niteshkhandelwal0504@gmail.com"
              >
                <h1 className=" font-medium">Write me</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className=" bg-white rounded-xl w-[300px] h-[140px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              x="0"
              y="0"
              viewBox="0 0 50 50"
              className="w-5 h-5 mx-auto"
            >
              <path d="M25 2C12.31 2 2 12.31 2 25c0 4.08 1.119 7.886 2.984 11.209L2.037 46.73a1 1 0 001.203 1.24l10.97-2.718C17.436 46.972 21.094 48 25 48c12.69 0 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21c-3.722 0-7.208-.97-10.238-2.666a1 1 0 00-.729-.098l-9.607 2.381 2.576-9.191a1 1 0 00-.1-.78A20.88 20.88 0 014 25C4 13.39 13.39 4 25 4zm-8.357 9c-.641 0-1.557.238-2.309 1.049-.452.487-2.334 2.32-2.334 5.545 0 3.361 2.331 6.262 2.613 6.635h.002v.001a31.669 31.669 0 003.004 3.684c1.804 1.899 4.34 4.093 7.486 5.436 1.45.617 2.593.99 3.46 1.261 1.605.504 3.067.428 4.165.266.823-.121 1.727-.516 2.622-1.082.894-.566 1.771-1.27 2.158-2.34a8.25 8.25 0 00.469-2.059 4.72 4.72 0 00.01-.787c-.02-.238 0-.42-.221-.785-.466-.764-.993-.784-1.543-1.056a183.29 183.29 0 00-2.05-.993c-.871-.415-1.626-.783-2.091-.949-.294-.106-.652-.258-1.17-.199-.517.059-1.029.432-1.326.873-.282.418-1.418 1.758-1.764 2.152-.004-.002.026.011-.111-.056-.428-.212-.952-.392-1.727-.801a14.283 14.283 0 01-2.804-1.947v-.002c-1.579-1.39-2.685-3.135-3.034-3.721.024-.028-.002.006.047-.043l.002-.002c.357-.351.673-.77.94-1.078.378-.436.545-.82.726-1.18.361-.716.16-1.503-.049-1.918v-.002c.015.029-.112-.252-.25-.576l-.5-1.195c-.374-.898-.792-1.906-1.04-2.496v-.002c-.293-.695-.69-1.196-1.208-1.438-.518-.241-.975-.173-.994-.174h-.002A26.2 26.2 0 0016.643 13zm0 2c.385 0 .765.005 1.084.02.327.016.307.017.244-.012-.064-.03.023-.04.209.402.243.578.663 1.59 1.039 2.49.188.451.363.874.504 1.205.14.332.216.517.304.694v.002l.002.002c.087.17.08.061.05.12-.212.42-.24.522-.454.768-.325.375-.657.792-.832.965-.154.151-.43.386-.604.846-.173.46-.092 1.093.186 1.564.37.629 1.59 2.613 3.484 4.282a16.35 16.35 0 003.194 2.216c.888.469 1.611.743 1.773.823.385.19.805.338 1.293.279.489-.059.91-.355 1.178-.658l.002-.002c.357-.405 1.417-1.615 1.926-2.361.021.007.014.001.183.062v.002h.002c.077.027 1.044.46 1.906.871.863.41 1.738.838 2.022.979.41.203.604.335.654.336a2.35 2.35 0 01-.006.328 6.365 6.365 0 01-.357 1.552c-.105.292-.654.893-1.346 1.33-.692.438-1.534.748-1.846.793-.937.139-2.05.189-3.273-.195a33.421 33.421 0 01-3.273-1.193c-2.776-1.184-5.135-3.198-6.82-4.973a29.716 29.716 0 01-1.999-2.338c-.48-.623-.688-.948-.863-1.178l-.002-.001c-.31-.41-2.207-3.05-2.207-5.426 0-2.516 1.168-3.503 1.8-4.184.333-.358.696-.41.843-.41z"></path>
            </svg>
            <h1 className=" text-center  font-semibold">WhatsApp</h1>
            <h1 className="text-center">+91 97833XXXXX</h1>
            <div className="flex items-center justify-center  mt-4">
              <a
                className="flex items-center gap-2"
                href="https://api.whatsapp.com/send?phone=9783356623"
              >
                <h1 className=" font-medium">Write me</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className=" bg-white rounded-xl w-[300px] h-[140px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              x="0"
              y="0"
              viewBox="0 0 50 50"
              className="w-5 h-5 mx-auto"
            >
              <path d="M46.137 6.552c-.75-.636-1.928-.727-3.146-.238h-.002c-1.281.514-36.261 15.518-37.685 16.131-.259.09-2.521.934-2.288 2.814.208 1.695 2.026 2.397 2.248 2.478l8.893 3.045c.59 1.964 2.765 9.21 3.246 10.758.3.965.789 2.233 1.646 2.494.752.29 1.5.025 1.984-.355l5.437-5.043 8.777 6.845.209.125c.596.264 1.167.396 1.712.396.421 0 .825-.079 1.211-.237 1.315-.54 1.841-1.793 1.896-1.935l6.556-34.077c.4-1.82-.156-2.746-.694-3.201zM22 32l-3 8-3-10 23-17-17 19z"></path>
            </svg>
            <h1 className="text-center  font-semibold ">Telegram</h1>
            <h1 className="text-center">@Nk1897</h1>
            <div className="flex items-center justify-center mt-4">
              <a
                className="flex items-center gap-2"
                href="https://t.me/Nk18977"
              >
                <h1 className=" font-medium">Write me</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[500px] w-[360px] ">
        <h1 className=" font-semibold text-center text-slate-950 dark:text-slate-100">
          Write me Your Project/queries
        </h1>
        <Queries />
      </div>
    </div>
  );
};

export default Talktome;

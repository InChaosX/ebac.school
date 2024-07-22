"use client";
import React, { useRef, useState } from "react";


import "react-toastify/dist/ReactToastify.css";
import { useTranslate  } from "@tolgee/react";


import AOS from "aos";
import Contactvax from "./Contactvax";
import Bg from "../icon/Bg";
AOS.init();

function Hero() {
  
  const { t } = useTranslate();
  


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

 


  return (
    <div
      className="bg-[#f5f6fa] mt-24 herooo "
      //  style={{
      //    backgroundImage: 'url("/(Anglais).png")',
      //    backgroundSize: "cover",
      //    backgroundPosition: "center",
      //    filter: "brightness(100%)", // Adjust brightness here
      //    transition: "filter 0.3s",
      //  }}
      // style={{
      //   backgroundImage: "<Bg/>", // Adjust the path to your SVG file
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   filter: "brightness(100%)", // Adjust brightness here
      //   transition: "filter 0.3s",
      //   width: "100%", // You can adjust the size of the div
      //   height: "100vh", // This is just an example to cover the full viewport height
      // }}
    >
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start ">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            className="my-4 md:text-5xl text-3xl md:-mt-12 mt-20 font-bold leading-tight text-darken"
          >
            {/* Studying Online with eBacc - Your Path to English Baccalaureate
            Success */}
            <span className="text-[#cc2132]">{t("studying")}</span>{" "}
            <span className="text-[#061770] "> {t("path")}</span>
          </h1>
          <div>
            <p
              data-aos="fade-up-right"
              className=" md:text-2xl text-1xl text-center mt-2  md:text-left md:p-0 p- leading-7 mb-8 font-thin text-black"
            >
              {/* Join eBacc today and unlock your full academic potential with expert
            guidance and personalized learning. As a dedicated English
            Baccalaureate platform, we prepare you for IGCSE success. */}
              {t("heroo")}
            </p>
          </div>

          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5 cursor-pointer">
            <button
              onClick={toggleModal}
              className="lg:mx-0 bg-[#c71e2f]  text-white text-xl font-bold rounded-full py-6 cursor-pointer px-20 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
            >
              {/* Join now ! */}
              {t("Rejoignez-nous maintenant")}
            </button>

            {isModalOpen && (
              <div
                id="authentication-modal"
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto top-30 "
              >
                <div className="relative w-full max-w-[650px] h-[30rem] px-10  py-32 md:h-[30rem] -mt-36   top-30">
                  <div className="bg-blue-600 rounded-3xl shadow relative ">
                    <div className="flex justify-end p-2">
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center bg-red-600 dark:hover:text-white"
                        onClick={toggleModal}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="FFFFFF"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <Contactvax />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <img
            data-aos="fade-up"
            data-aos-once="true"
            className="w-10/12 mx-auto 2xl:-mb-20"
            src="/ilyana.png"
          />
          {/* <!-- calendar --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="absolute top-20 -left-2 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/live3d.jpg"
            />
          </div>
          {/* <!-- red --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className="absolute top-20 -right-4 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32   lg:-right-7 floating"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/clock3d.jpg"
            />
          </div>
          {/* <!-- ux className --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/teacher3d.jpg"
              alt=""
            />
          </div>
          {/* <!-- congrats --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-4 floating-4"
          >
            <img
              className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-20"
              src="/lamps3d.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="#090864"
          ></path>
        </svg>
        <div className=" w-full h-20 -mt-px bg-[#090864]"></div>
      </div>
      <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
    </div>
  );
}

export default Hero;
function useCurrentLanguage() {
  throw new Error("Function not implemented.");
}


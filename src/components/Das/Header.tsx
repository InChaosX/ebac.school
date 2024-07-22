// export default Header;
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { T, useTranslate } from "@tolgee/react";

import { LangSelector } from "../LangSelector";

import "react-datepicker/dist/react-datepicker.css";
import Contactvax from "./Contactvax";


// function Header() {
 function Header() {
  
    const { t } = useTranslate();
   

    // const { t } = useTranslate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedColor, setSelectedColor] = useState("");

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      if (!isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };


    return (
      <section
        className="bg-[#061770]  top-0 left-0 right-0 z-50 h-[100px] fixed  "
        id="navbar"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex md:text-center text-left">
              <Image
                src="/Logpo-Ebacc.png"
                alt="huddersfield"
                width={200}
                height={200}
              ></Image>
              {/* <Hud />*/}
              <button
                className="sm:hidden inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring ml-auto"
                type="button"
              >
                <LangSelector />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <div data-aos="fade-down" data-aos-duration="3000">
                <button
                  className="block  font-bold rounded-3xl text-white  border-4 border-white bg-[#29328f] hover:text-[#29328f]  ease-in-out  w-full px-5 py-3 text-sm  transition hover:bg-gray-300 focus:ring btn relative"
                  id="scroll-button"
                  type="button"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  onClick={toggleModal}
                >
                  {t("Inscrivez-vous maintenant")}
                </button>

                {isModalOpen && (
                  <div
                    id="authentication-modal"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  top-30"
                  >
                    <div className="relative w-full max-w-[650px] h-[30rem] px-10  py-32 md:h-[30rem]  -mt-36   top-30">
                      <div className="bg-blue-600 rounded-3xl shadow relative ">
                        <div className="flex justify-end p-2">
                          <button
                            type="button"
                            className="text-white bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:text-white"
                            onClick={toggleModal}
                          >
                            <svg
                              className="w-6 h-6  rounded-full text-white "
                              fill="FFFFFF"
                              viewBox="0 0 20 20"
                              // xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="text-white"
                                // fillRule="FFFFF"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>


                      <Contactvax/>

                       
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                className=" hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 outline-none  "
                type="button"
              >
                <LangSelector />
              </button>
            </div>
          </div>
        </div>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
      </section>
    );
  };

export default Header;




 
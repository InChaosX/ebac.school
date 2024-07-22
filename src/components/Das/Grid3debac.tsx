"use client"
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { T, useTranslate } from "@tolgee/react";


function Grid3debac() {
   const { t } = useTranslate();
     const [openIndex, setOpenIndex] = useState(0);

     const handleToggle = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };
  return (
    <section
      className=" md:px-20 px-8 py-20  "
      style={{
        backgroundImage: 'url("/4.png")',
        backgroundSize: "cover", // Adjust to fit the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent repeating if the image is smaller
        filter: "brightness(100%)",
        // backgroundAttachment: "fixed", // Keep the background fixed
        transition: "none", // Remove any transitions on the section
        // clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 88%)",
        // clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 94%)",
        // Ensure the background is behind the content
      }}
    >
      <div
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-delay="300"
        className="flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white "
      >
        <div className="flex items-center justify-center  mb-36">
          <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-white  dark:text-gray-200">
            {t("prepare for IGCSE")}
          </h1>
        </div>
      </div>
      {/* border-4 border-white bg-[#29328f] */}
      <div className="overflow-hidden bg-transparent sm:grid sm:grid-cols-2  md:-mt-20 -mt-32">
        <img
          alt=""
          src="/onegrid.png"
          className="h-56 w-full object-cover sm:h-full block sm:hidden  "
        />
        <div className="p-1 md:p-12 lg:px-16 lg:py-20 ">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            {/* start */}
            <div className="space-y-4 ">
              {[
                {
                  title: t("Notre mission éducative"),
                  content: t("At eBacc"),
                },
                {
                  title: t("Objectifs d'apprentissage"),
                  content: t("We aim"),
                },
                {
                  title: t("Why Choose eBacc?"),
                  content: t("With eBacc"),
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div
                    className={`flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-6 text-gray-900 ${
                      openIndex === index
                        ? "bg-[#c71e2f]  text-white"
                        : "bg-gray-100 shadow-2xl border-2 border-blue-500 "
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <h2 className="font-bold text-2xl">{item.title}</h2>
                    <span className="relative size-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute -inset-1 size-8 ${
                          openIndex === index ? "opacity-0" : "opacity-100"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute -inset-1 size-8 ${
                          openIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="mt-4 leading-relaxed text-white text-left font-medium p-4">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* end */}
          </div>
        </div>
        <img
          alt=""
          src="/onegrid.png"
          className="h-56 w-full object-contain sm:h-full hidden sm:block  "
        />
      </div>
    </section>
  );
}

export default Grid3debac;

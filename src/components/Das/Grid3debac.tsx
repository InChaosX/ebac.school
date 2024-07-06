"use client"
import React, { useState } from "react";

function Grid3debac() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
  return (
    <section className="bg-white md:px-20 px-8">
      <div className="flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white ">
        <h1 className="bg-[#77B5FE] p-3 rounded-full">
          Prepare for IGCSE with  eBacc - Educational excellence beyond
          traditional courses.
        </h1>
      </div>
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 py-36 md:-mt-20 -mt-32">
        <img
          alt=""
          src="/clear-objective.jpg"
          className="h-56 w-full object-cover sm:h-full block sm:hidden"
        />
        <div className="p-1 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            {/* start */}
            <div className="space-y-4">
              {/* <details
                className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              > */}
              <details
                className={`group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden ${
                  activeIndex === 0 ? "open" : ""
                }`}
                open={activeIndex === 0}
              >
                {/* <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 bg-gray-50 p-2 rounded-2xl"> */}
                <summary
                  className={`flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 p-2 rounded-2xl ${
                    activeIndex === 0
                      ? "bg-[#c71e2f] text-white"
                      : "bg-white text-gray-700 font-medium text-sm h-12 px-6 rounded-2xl shadow-md hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:border-2 focus:border-blue-500 transition-all duration-300 ease-in-out active:shadow-lg disabled:shadow-none "
                  }`}
                  onClick={() => handleClick(1)}
                >
                  <h2 className="font-bold text-2xl py-3  rounded-3xl ">
                    Our Educational Mission
                  </h2>
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700 text-left font-medium">
                  At eBacc, our mission is to enhance students' academic
                  learning by complementing their initial school curriculum. We
                  prepare students to excel in IGCSE exams through a rigorous
                  and well-structured program.
                </p>
              </details>

              {/* <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"> */}
              <details
                className={`group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden ${
                  activeIndex === 1 ? "open" : ""
                }`}
                open={activeIndex === 1}
              >
                {/* <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"> */}
                <summary
                  className={`flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 p-2 rounded-2xl ${
                    activeIndex === 1
                      ? "bg-[#c71e2f] text-white"
                      : "bg-white text-gray-700 font-medium text-sm h-12 px-6 rounded-2xl shadow-md hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:border-2 focus:border-blue-500 transition-all duration-300 ease-in-out active:shadow-lg disabled:shadow-none "
                  }`}
                  onClick={() => handleClick(1)}
                >
                  <h2 className="font-bold text-2xl">Learning Objectives</h2>
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700 text-left font-medium">
                  We aim to provide thorough training in key subjects such as
                  mathematics, sciences, English, and more, while strengthening
                  French skills for comprehensive IGCSE preparation.
                </p>
              </details>

              {/* <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"> */}
              <details
                className={`group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden ${
                  activeIndex === 2 ? "open" : ""
                }`}
                open={activeIndex === 2}
              >
                <summary
                  className={`flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 p-2 rounded-2xl ${
                    activeIndex === 2
                      ? "bg-[#c71e2f] text-white"
                      : "bg-white text-gray-700 font-medium text-sm h-12 px-6 rounded-2xl shadow-md hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:border-2 focus:border-blue-500 transition-all duration-300 ease-in-out active:shadow-lg disabled:shadow-none "
                  }`}
                  onClick={() => handleClick(2)}
                >
                  <h2 className="font-bold text-2xl">Why Choose eBacc?</h2>
                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700 text-left font-medium">
                  With eBacc, students benefit from quality education
                  supplemented by live sessions with our qualified instructors,
                  ensuring thorough and personalized preparation for IGCSE
                  exams.
                </p>
              </details>
            </div>

            {/* end */}
          </div>
        </div>
        <img
          alt=""
          src="/clear-objective.jpg"
          className="h-56 w-full object-cover sm:h-full hidden sm:block"
        />
      </div>
    </section>
  );
}

export default Grid3debac;

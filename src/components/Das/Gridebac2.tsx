"use client"
import React, { useState } from "react";

function Grid3debac2() {
   const [openIndex, setOpenIndex] = useState(0);

   const handleToggle = (index) => {
     setOpenIndex(openIndex === index ? null : index);
   };
    
  return (
    <section className="bg-white md:px-20 px-8">
      <div className=" flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white">
        <h1 className="bg-[#77B5FE] p-3 rounded-full  ">
          Explore our range of IGCSE courses with eBacc - Your path to academic
          excellence.
        </h1>
      </div>
      {/* <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:flex-row-reverse py-36 md:-mt-20 -mt-32"></div> */}
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2    py-36  md:-mt-20 -mt-32">
        <img
          alt=""
          src="/student.jpg"
          className="h-56 w-full object-cover sm:h-full  border-4 border-[#29328f]"
        />
        <div className="p-1 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            {/* start */}
            <div className="space-y-4 ">
              {[
                {
                  title: "Our IGCSE Courses",
                  content:
                    "eBacc offers a variety of courses specifically designed to prepare students for IGCSE exams. Our programs align with international standards and are enriched by our experienced educational team",
                },
                {
                  title: "Subjects Covered",
                  content:
                    "From Year 7 to Year 11, our courses include mathematics, sciences (biology, physics, chemistry), English, and French. Each subject is taught with a commitment to academic excellence and a deep understanding of concepts.",
                },
                {
                  title: "Personalization of Learning",
                  content:
                    "At eBacc, we recognize the importance of personalized learning to meet the individual needs of students. Our courses offer optimal flexibility to adapt to varying learning paces of each student.",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div
                    className={`flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-6 text-gray-900 ${
                      openIndex === index
                        ? "bg-red-500 text-white"
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
                    <div className="mt-4 leading-relaxed text-gray-700 text-left font-medium p-4">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* end */}
          </div>
        </div>

        {/* <img
          alt=""
          src="/clear-objective.jpg"
          className="h-56 w-full object-cover sm:h-full"
        /> */}
      </div>
    </section>
  );
}

export default Grid3debac2;


"use client";
import React, { useState } from "react";
import { T, useTranslate } from "@tolgee/react";

function Grid3debac3() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
   const { t } = useTranslate();
  return (
    <section className="bg-white md:px-20 px-8">
      <div className="flex justify-center items-center md:text-3xl text-1xl text-center font-bold text-white">
        <h1 className="bg-[#77B5FE] p-3 rounded-full w-full">
          {/* PrepEngage with our interactive live sessions - Learn together,
          succeed together. */}
          {t("prepare for IGCSE3")}
        </h1>
      </div>
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 py-36 md:-mt-20 -mt-32">
        <img
          alt=""
          src="/meet.jpg"
          className="h-56 w-full object-cover sm:h-full block sm:hidden "
        />
        <div className="p-1 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="space-y-4 ">
              {[
                {
                  title: t("Notre mission éducative3"),
                  content: t("At eBacc3"),
                },
                {
                  title: t("Objectifs d'apprentissage3"),
                  content: t("We aim3"),
                },
                {
                  title: t("Why Choose eBacc?3"),
                  content: t("With eBacc3"),
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
                    <div className="mt-4 leading-relaxed text-gray-700 text-left font-medium p-4">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          alt=""
          src="/meet.jpg"
          className="h-56 w-full object-cover sm:h-full hidden sm:block  "
        />
      </div>
    </section>
  );
}

export default Grid3debac3;

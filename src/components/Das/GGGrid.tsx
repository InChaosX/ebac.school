"use client";
import React from "react";
import { T, useTranslate } from "@tolgee/react";
import { Link } from "react-scroll";

function GGGrid() {
  const { t } = useTranslate();
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white py-36">
      {/* <!-- Themes: blue, purple and teal --> */}
      <div className="text-2xl text-center items-center justify-center mb-20">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="font-bold text-4xl text-[#bd202e]"
        >
          {/* How Many Gratuated ? */}
          {t("3partner1Title")}
        </h1>
        <p
          data-aos="fade-down"
          data-aos-duration="3000"
          className="font-bold  md:!text-1xl md:p-10 p-4 md:px-36 px-1 md:text-left text-center"
        >
          {/* Moroccan student figures in the UK have increased by over 26% since
          2014 to over 700 students — the undergraduate (Bachelor) figure is
          almost a 50% increase! */}
          {t("3partner2text")}
        </p>
      </div>
      <div data-theme="teal" className="mx-auto max-w-6xl">
        {/* <h2 className="sr-only">Featured case study</h2> */}
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div
                    data-aos="fade-down"
                    data-aos-duration="3000"
                    className="h-full"
                  >
                    <img
                      className="h-full object-cover"
                      src="/d10c13e4-592b-4194-8b8b-174faeb51fa9.jfif"
                      width="733"
                      height="412"
                      alt='""'
                      typeof="foaf:Image"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-7 bg-grey h-[70vh]">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-2xl font-bold text-red text-center items-center">
                  {t("c1")}
                </h2>
                <div className="mt-4 space-y-2">
                  {/* Our second CXcon in October was dedicated to experience
                  transformation. The free one-day virtual event&nbsp;brought
                  together 230+ heads of digital, thought leaders, and UX
                  practitioners to discuss all aspects of experience design.. */}

                  {/* start  */}
                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">{t("c2")}</span>
                  </h1>

                  {/* ----------------------- */}

                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">{t("c3")}</span>
                  </h1>

                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">2 {t("c4")}</span>
                  </h1>

                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">{t("c5")}</span>
                  </h1>

                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">{t("c6")}</span>
                  </h1>

                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">{t("c7")}</span>
                  </h1>

                  <h1
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="center"
                    data-aos-once="false"
                    className="flex items-center -mx-2 text-black "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-5 md:h-5   mx-2 text-[#245EC5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2 font-semibold">{t("c8")}</span>
                  </h1>
                </div>

                <p>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    // ignoreCancelEvents={true}
                  >
                    <div className=" cursor-pointer px-3 py-4 mt-4 bg-red button button--secondary flex items-center text-center justify-center rounded-3xl font-bold">
                      {t("Inscrivez-vous maintenant")}
                    </div>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GGGrid;

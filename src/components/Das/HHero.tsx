"use client";
import React from "react";
import { T, useTranslate } from "@tolgee/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

AOS.init();
function HHero() {
  const { t } = useTranslate();
  return (
    <div className="relative bg-teal p-4 hero ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {/* grid1 */}
        <div className="relative h-auto rounded-lg bg-gray-200 w-[50rem] ">
          <Image
            data-aos="fade-right"
            data-aos-duration="3000"
            className="pt-24 -ml-16 md:w-full w-[25rem] md:h-[50rem] h-[35rem] "
            src="/arrow-bg.png.webp"
            alt="NCUK Casablanca"
            width={1000}
            height={800}
          />
          {/* text */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="mt-16 absolute inset-0 flex flex-col items-start justify-center z-20 text-left -ml-5 md:ml-24 p-4 md:text-2xl text-md font-bold"
          >
            <h1 className="md:text-3xl text-2xl font-extrabold">
              NCUK Casablanca
            </h1>
            <h3 className="">
              {/* Start your education in <br/> Morocco and finish it in <br /> the
              UK */}

              {/* {t("hero")} */}
              <p>{t("hero_part1")}</p>
              <p>{t("hero_part2")}</p>
            </h3>
            <p>
              <div data-aos="fade-left" data-aos-duration="3000">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  // ignoreCancelEvents={true}
                >
                  <button className="text-sm py-2 md:px-10 px-3 bg-[#bd202e] text-white border-4 border-white p-2 mt-6">
                    {/* Register for NCUK <br /> Casablanca */}
                    {t("bthero")}
                  </button>
                </Link>
              </div>
            </p>
          </div>
        </div>

    
      </div>
    </div>
  );
}

export default HHero;

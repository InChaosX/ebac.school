"use client"
import React from "react";
import Image from "next/image";

import { T, useTranslate } from "@tolgee/react";
Image;

function Section3() {
  const { t } = useTranslate();
  return (
    <div className="py-36 bg-orange-500">
      <div className="text-2xl text-center items-center justify-center mb-20">
        {/* <h1
          data-aos="fade-left"
          data-aos-duration="3000"
          className="font-bold text-4xl text-[#bd202e]"
        >
         
          {t("partner1Title")}
        </h1> */}
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className="font-bold !text-1xl p-10 md:px-36 px-4 text-left"
        >
          {/* NCUK is unique in UK higher education. We are a consortium of leading
          universities dedicated to giving international students guaranteed
          access to universities and helping you succeed when you get there. The
          accredited centre in Morocco is located in Casablanca. */}
          {t("partner2text")}
        </p>
      </div>

      <div
       data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        className="flex  items-center justify-center"
      >
        {/* <Image
      
          src="/map.png"
          alt="ncuk"
          height={1000}
          width={1000}
        /> */}
      </div>
    </div>
  );
}

export default Section3;

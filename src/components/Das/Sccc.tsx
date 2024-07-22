"use client";
import React from "react";
import { T, useTolgee, useTranslate } from "@tolgee/react";

function Sccc() {
  const { t } = useTranslate();
  const tolgee = useTolgee();

  // Get the current language
  const currentLanguage = tolgee.getLanguage();

  // Define the image paths for each language
  const images = {
    en: "/8ps.png",
    fr: "/8psfr.png",
  };

  const images2 = {
    en: "/7ps.png",
    fr: "/7psfr.png",
  };
  // Get the image path based on the current language
  const Price = images[currentLanguage] || images.en; // Fallback to English image if language not found
  const Price2 = images2[currentLanguage] || images2.en;
  return (
    <section
      className="py-20 "
      style={{
        backgroundImage: 'url("/3.png")',
        backgroundSize: "cover", // Adjust to fit the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent repeating if the image is smaller
        filter: "brightness(100%)",
        // backgroundAttachment: "fixed", // Keep the background fixed
      }}
    >
      <div className="mb-36 flex items-center justify-center">
        <div>
          <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-white  text-white">
            {/* PrepEngage with our interactive live sessions - Learn together,
          succeed together. */}
            {/* {t("prepare for IGCSE3")} */}
            Plans & Pricing
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 w-[50rem]  ">
          <div className="rounded-lg h-[40rem]   flex items-center  justify-center ">
            <img
              alt="Plan Image 2"
              src={Price}
              className=" h-[40rem] object-cover "
            />
          </div>
          <div className="rounded-lg h-[40rem]   flex items-center  justify-center ">
            <img
              alt="Plan Image 2"
              src={Price2}
              className=" h-[40rem] object-cover "
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-7 ">
        <a
          href="/eBacc Student Academic Calendar.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex gap-3  group  p-5 cursor-pointer   font-bold rounded-3xl text-white  border-4 border-white bg-[#29328f] hover:text-[#29328f]  ease-in-out   px-5 py-3 text-sm  transition hover:bg-gray-300 focus:ring btn relative">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70712 9.70711L12.7071 4.70711L15 7L16 6V0H10Z"
                fill="#FFFFFF"
              />
              <path d="M1 2H6V4H3V13H12V10H14V15H1V2Z" fill="#FFFFFF" />
            </svg>
            <h1>eBacc Student Academic Calendar</h1>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Sccc;

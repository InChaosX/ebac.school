"use client";
import React from "react";
import Image from "next/image";
import { T, useTranslate } from "@tolgee/react";

function Footerebag() {
  const { t } = useTranslate();
  return (
    <footer className=" bg-[#061770] py-14">
      <div className="max-w-lg mx-auto">
        <div className="flex py-12 justify-center text-white items-center px-20 sm:px-36">
          <div className="relative">
            {/* <h1 className="font-bold text-xl pr-5 relative z-50">Skilline</h1> */}
            <div className="p-4">
              <Image
                src="/Logpo-Ebacc.png"
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>
          </div>
          <span className="border-l border-gray-500 text-sm pl-5 py-2 font-semibold">
            Virtual Class
          </span>
        </div>
        <div className="text-center pb-16 pt-5">
          <label className="text-white font-semibold">
            {/* Subscribe to get our Newsletter */}
            {t("Souscrivez à notre Newsletter")}
          </label>
          <div className="px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3">
            <input
              type="email"
              placeholder={t("Votre Email")}
              className="rounded-full py-2 pl-5 bg-transparent border border-gray-400"
            />
            <button
              type="submit"
              className="text-white w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full"
            >
              {t("Souscrire")}
            </button>
          </div>
        </div>
        <div className="flex items-center text-gray-400 text-sm justify-center">
          <p className="pr-3 text-white">
            Contact
          </p>
          {/* <p className="border-l border-white text-white px-3">
            Careers
          </a> */}
          <p className="border-l border-white text-white px-3">
            {t("Confidentialité")}
          </p>
          <p className="border-l border-white text-white pl-3">
            {t("Termes et conditions")}
          </p>
        </div>

        <div className="text-center text-white">
          <p className="my-3 text-gray-400 text-sm">
            &copy; 2025 eBacc by London Academy.{" "}
          </p>
          {/* <div className="py-3 tracking-wide">
            <p>
              Code By <span className="font-semibold">mhaecal</span>
            </p>
            <p>
              UI/UX By <span className="font-semibold">Irvan Moses</span>
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footerebag;

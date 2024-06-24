import React from "react";
import Image from "next/image";
import { LangSelector } from "../LangSelector";

function Footerr() {
  return (
    <footer className="flex flex-col items-center  text-center text-surface  text-black bg-grey lg:text-left ">
      <div className=" p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <div className="mb-2 font-medium uppercase">
              <Image
                src="/logo-ncuk.png"
                alt="NCUK"
                width={200}
                height={200}
              ></Image>
            </div>

            <p className="mb-4 font-semibold">ncuk casablanca</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase text-[#bd202e]">
              Contact
            </h5>

            <p className="mb-4 font-semibold">
              NCUK Casablanca <br /> Bouskoura، Casablanca 20000 <br /> Morocco{" "}
              <br /> 0684-230230
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="  text-red md:py-5 py-2 font-semibold ">
          <LangSelector />
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="w-full bg-black/5 p-4 text-center">
        © Copyright 2024, NCUK Casablanca
      </div>
    </footer>
  );
}

export default Footerr;

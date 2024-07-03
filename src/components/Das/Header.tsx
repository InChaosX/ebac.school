// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// import { LangSelector } from "../LangSelector";
// import { Link } from "react-scroll";
// import { T, useTranslate } from "@tolgee/react";


// function Header() {
//   const { t } = useTranslate();

//   return (
//     <section
//       className="bg-[#061770] top-0 left-0 right-0 z-50 h-[100px] fixed clip"
//       id="navbar"
//     >
//       <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
//         <div className="sm:flex sm:items-center sm:justify-between">
//           <div className="md:text-center text-left  ">
//             <Image
//               src="/Logpo-Ebacc.png"
//               alt="huddersfield"
//               width={200}
//               height={200}
//             ></Image>
//             {/* <Hud/> */}
//           </div>
//           {/* <div className="font-bold text-white bg-blue py-2 p-4 cursor-pointer border-4 border-white rounded-3xl ">
//             <h1> {t("Who are we ?")}</h1>
//           </div> */}

//           <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
//             <div>
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={800}
//                 // ignoreCancelEvents={true}
//               >
//                 <button
//                   data-aos="fade-down"
//                   data-aos-duration="3000"
//                   className="block rounded-3xl  border-4 border-white bg-[#29328f] hover:text-[#29328f] hover:bg-white ease-in-out w-full px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring btn relative"
//                   id="scroll-button"
//                   type="button"
//                 >
//                   {t("Inscrivez-vous maintenant")}
//                 </button>
//               </Link>
//             </div>

//             <button
//               className=" hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 focus:outline-none focus:ring "
//               type="button"
//             >
//               {/* <LocalSwitcher /> */}
//               <LangSelector />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Header;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { LangSelector } from "../LangSelector";
import { Link } from "react-scroll";
import { T, useTranslate } from "@tolgee/react";


function Header() {
  const { t } = useTranslate();

  return (
    <section
      className="bg-[#061770]  top-0 left-0 right-0 z-50 h-[100px] fixed  "
      id="navbar"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex md:text-center text-left">
            <Image
              src="/Logpo-Ebacc.png"
              alt="huddersfield"
              width={200}
              height={200}
            ></Image>
            {/* <Hud />*/}
            <button
              className="sm:hidden inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring ml-auto"
              type="button"
            >
              <LangSelector />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div data-aos="fade-down" data-aos-duration="3000">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                // ignoreCancelEvents={true}
              >
                <button
                  className="block  font-bold rounded-3xl text-white  border-4 border-white bg-[#29328f] hover:text-[#29328f] hover:bg-white ease-in-out  w-full px-5 py-3 text-sm  transition hover:bg-gray-300 focus:ring btn relative"
                  id="scroll-button"
                  type="button"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  {t("Inscrivez-vous maintenant")}
                </button>
              </Link>
            </div>

            <button
              className=" hidden md:inline-flex items-center justify-center p-5 gap-1.5 px-5 py-3 text-black transition  hover:text-gray-700 outline-none  "
              type="button"
            >
              <LangSelector />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

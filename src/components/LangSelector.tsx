
"use client";
import React, { useTransition } from "react";
import { useTolgee } from "@tolgee/react";
import { usePathname, useRouter } from "@/navigation";
import { T, useTranslate } from "@tolgee/react";

import Flag from "./icon/Flag";
import Flagf from "./icon/Flagf";

export const LangSelector: React.FC = () => {
  const { t } = useTranslate();
  const tolgee = useTolgee(["language"]);
  const locale = tolgee.getLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [_, startTransition] = useTransition();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      tolgee.changeLanguage(nextLocale);
    });
  };

  return (
    <div className="lang-selector-container flex gap-2">
      <div
        className={`lang-button ${locale === "en" ? "active" : ""}`}
        onClick={() => onSelectChange("en")}
      >
        <svg
          className="h-8 w-8 lang-flag"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-gb"
          viewBox="0 0 640 480"
        >
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L109 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
          />
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
        </svg>
      </div>
      <div
        className={`lang-button ${locale === "fr" ? "active" : ""}`}
        onClick={() => onSelectChange("fr")}
      >
        <svg
          className="h-8 w-8 lang-flag"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-fr"
          viewBox="0 0 640 480"
        >
          <path fill="#0055A4" d="M0 0h213.3v480H0z" />
          <path fill="#FFF" d="M213.3 0h213.4v480H213.3z" />
          <path fill="#EF4135" d="M426.7 0H640v480H426.7z" />
        </svg>
      </div>
    </div>
  );
};

export default LangSelector;
// "use client";
// import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
// import { useTolgee } from "@tolgee/react";
// import { usePathname, useRouter } from "@/navigation";
// import { T, useTranslate } from "@tolgee/react";

// import Flag from "./icon/Flag";
// import Flagf from "./icon/Flagf";

// export const LangSelector: React.FC = () => {

//   const { t } = useTranslate();
//   const tolgee = useTolgee(["language"]);
//   const locale = tolgee.getLanguage();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [_, startTransition] = useTransition();
  
//   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value;
//     startTransition(() => {
//       router.replace(pathname, { locale: nextLocale });
//     });
//   }
//   return (
//     <select
//       className="lang-selector cursor-pointer"
//       onChange={onSelectChange}
//       value={locale}
//     >
//       <option value="en">{t("en")}</option>
//       {/* <option value="cs">Česky</option> */}
//       <option value="fr">{t("fr")}</option>
//       {/* <option value="de">Deutsch</option> */}
//     </select>
//   );
// };


// English;
// French;


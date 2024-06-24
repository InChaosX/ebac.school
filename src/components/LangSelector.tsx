"use client";
import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
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
  
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }
  return (
    <select
      className="lang-selector cursor-pointer"
      onChange={onSelectChange}
      value={locale}
    >
      <option value="en">{t("en")}</option>
      {/* <option value="cs">Česky</option> */}
      <option value="fr">{t("fr")}</option>
      {/* <option value="de">Deutsch</option> */}
    </select>
  );
};


// English;
// French;


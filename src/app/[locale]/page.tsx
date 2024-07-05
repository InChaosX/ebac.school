import React from "react";

// import Accroding from "@/components/Das/Accroding";

// import HHero from "@/components/Das/HHero";

// import SlideLogo from "@/components/Das/SlideLogo";
// import Section3 from "@/components/Das/Section3";
// import Logoflex from "@/components/Das/Logoflex";
// import Contactt from "@/components/Das/Contactt";

// import GGGrid from "@/components/Das/GGGrid";
import { NextSeo } from "next-seo";
import Heroe from "@/components/Das/Heroe";

import Grid3debac from "@/components/Das/Grid3debac";
import Grid3debac2 from "@/components/Das/Gridebac2";
import Grid3debac3 from "@/components/Das/Gridebac3";
import Grid3debac4 from "@/components/Das/Gridebac4";
import Grid5debac from "@/components/Das/Gridebac5";
// import Model from "@/components/Das/Model";
// import Cont from "@/components/Das/Cont";
import ContactGrid from "@/components/Das/ContactGrid";


export default async function IndexPage() {

    <NextSeo
      title="NCUK Casablanca - Your Gateway to Higher Education"
      description="NCUK Casablanca offers quality education programs preparing you for success in university and beyond. Discover our courses and get started on your academic journey today."
      canonical="https://www.ncukcasablanca.com/"
      openGraph={{
        url: "https://www.ncukcasablanca.com/",
        title: "NCUK Casablanca - Your Gateway to Higher Education",
        description:
          "NCUK Casablanca offers quality education programs preparing you for success in university and beyond. Discover our courses and get started on your academic journey today.",
        images: [
          {
            url: "https://www.ncukcasablanca.com/path/to/your/image.jpg",
            width: 800,
            height: 600,
            alt: "NCUK Casablanca",
          },
        ],
        site_name: "NCUK Casablanca",
      }}
      twitter={{
        handle: "@ncukcasablanca",
        site: "@ncukcasablanca",
        cardType: "summary_large_image",
      }}
    />;
  return (
    <div className="">
      <div className="">
        <Heroe />

        <Grid3debac />
        <Grid3debac2 />
        <Grid3debac3 />
        <Grid3debac4 />
        {/* <Grid5debac/> */}
       
        <ContactGrid/>
      </div>
    </div>
  );
}

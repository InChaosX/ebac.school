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
import Partnereba from "@/components/Das/Partnereba";
import Gridebac from "@/components/Das/Gridebac";
import Accrding from "@/components/Das/Accrding";
import Grid3debac from "@/components/Das/Grid3debac";


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
        <Heroe/>
       <Accrding/>
        <Partnereba/>
        {/* <Gridebac/> */}
        <Grid3debac/>
        {/* <HHero /> */}
        {/* <SlideLogo /> */}
        {/* <Section3 /> */}
        {/* <Logoflex/> */}
        {/* <GGGrid /> */}
        {/* <Accroding/>
        <Contactt /> */}
      </div>
    </div>
  );
}

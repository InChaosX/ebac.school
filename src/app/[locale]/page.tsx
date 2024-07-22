import React from "react";

import { NextSeo } from "next-seo";

import Hero from "@/components/Das/Hero";
import Grid3debac from "@/components/Das/Grid3debac";
import Grid3debac2 from "@/components/Das/Gridebac2";
import Grid3debac3 from "@/components/Das/Gridebac3";
import Grid3debac4 from "@/components/Das/Gridebac4";
import ContactGrid from "@/components/Das/ContactGrid";
import Survey from "@/components/Das/Survey";
import Sccc from "@/components/Das/Sccc";
// import Price from "@/components/Das/Price";
// import Info from "@/components/Das/Info";
// import Price from "@/components/Das/Price";



export default async function IndexPage() {

    <NextSeo
      title="eBacc - Your Gateway to Higher Education"
      description="."
      canonical="https://www.ebacc.ma/"
      openGraph={{
        url: "https://www.ebacc.ma/",
        title: "eBacc",
        description: "eBacc",
        images: [
          {
            url: "",
            width: 800,
            height: 600,
            alt: "eBacc",
          },
        ],
        site_name: "eBacc",
      }}
      twitter={{
        handle: "eBacc",
        site: "@eBacc",
        cardType: "summary_large_image",
      }}
    />;
  return (
    <div className="">
      <div className="">
        <Hero />
        <Survey />
        {/* <Sccc/> */}
        <Grid3debac />
        <Grid3debac2 />
        <Grid3debac3 />
        <Grid3debac4 />
        {/* <Price/> */}
        <Sccc />
        <ContactGrid />
        {/* <Info/> */}
      </div>
    </div>
  );
}

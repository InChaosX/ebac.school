import React from "react";

import { NextSeo } from "next-seo";
import Heroe from "@/components/Das/Heroe";

import Grid3debac from "@/components/Das/Grid3debac";
import Grid3debac2 from "@/components/Das/Gridebac2";
import Grid3debac3 from "@/components/Das/Gridebac3";
import Grid3debac4 from "@/components/Das/Gridebac4";
import ContactGrid from "@/components/Das/ContactGrid";


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

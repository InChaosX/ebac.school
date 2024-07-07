import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { TolgeeNextProvider } from '@/tolgee/client';
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';
import Head from 'next/head'; 
import Header from '@/components/Das/Header';

import ScrollToTopButton from '@/components/Das/ScrollToTopButton';
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import Footerebag from '@/components/Das/Footerebag';

type Props = {
  children: ReactNode;
  params: { locale: string };
};


export const metadata: Metadata = {
  title: "eBacc",
  description: "eBacc E-Learning ",
  keywords: [
    "Education",

    "https://www.ebacc.ma/ ",

    "eBacc",
    "Studying",
    "Online",
    "academic excellence",
    "student life",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  // Open Graph metadata
  openGraph: {
    title: "Ebacc",
    description:
      "Ebacc E-Learning - eBacc -Studying Online with eBacc - Your Path to English Baccalaureate",
    type: "website",
    url: "https://www.ebacc.ma/",
    siteName: "https://www.ebacc.ma/sitemap.xml",
  },
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@https://www.ebacc.ma/ ",
    title: "eBacc ",
    description:
      "eBacc -Studying Online with eBacc - Your Path to English Baccalaureate ",
  },

  robots: "index, follow",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const locales = await getStaticData(['fr', locale]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>eBacc </title>
        <meta
          name="description"
          content="eBacc -Studying Online with eBacc - Your Path to English Baccalaureate."
        />
        <meta
          name="keywords"
          content=" eBacc ,education,  Casablanca , academic , higher education, university preparation, international education"
        />
        <link rel="canonical" href="https://www.ebacc.ma/"></link>
        {/* <meta name="author" content="Your Name" /> */}
        <meta name="robots" content="index, follow" />
        {/* Add any other metadata tags as needed */}
        {/* Open Graph metadata */}
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:title"
          content="eBacc - Your Gateway to Higher Education - Studying Online with eBacc - Your Path to English Baccalaureate"
        />
        <meta
          property="og:title"
          content="eBacc - Your Gateway to Higher Education - Studying Online with eBacc - Your Path to English Baccalaureta"
        />
        <meta
          property="og:description"
          content="eBacc - Your Gateway to Higher Education - Studying Online with eBacc - Your Path to English Baccalaureta "
        />
        <meta
          property="og:description"
          content="eBacc - Your Gateway to Higher Education - Studying Online with eBacc - Your Path to English Baccalaureta "
        />
        {/* <meta
          property="og:image"
          content="https://www.ncukcasablanca.com/_next/image?url=%2Flogo-ncuk.png&w=256&q=75"
        /> */}

        <meta property="og:url" content="https://www.ebacc.ma/" />
        <meta property="og:url" content="https://www.ebacc.ma/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="eBacc"></meta>
        {/* Additional titles */}
        <meta
          name="title"
          content="eBacc - Your Gateway to Higher Education - Studying Online with eBacc - Your Path to English Baccalaureta "
        />
        <meta
          name="twitter:title"
          content="eBacc - Your Gateway to Higher Education - Studying Online with eBacc - Your Path to English Baccalaureta"
        />
      </Head>
      <html lang={locale}>
        <body>
          <TolgeeNextProvider locale={locale} locales={locales}>
            <Header />
            <div className="px-0 md:px-0 overflow-hidden">
              {children}
              <Analytics />
            </div>
            <ScrollToTopButton />
            {/* <Footerr /> */}
            <Footerebag />
          </TolgeeNextProvider>
        </body>
      </html>
    </>
  );
}

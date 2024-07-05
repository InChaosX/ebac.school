import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { TolgeeNextProvider } from '@/tolgee/client';
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';
import Head from 'next/head'; // Added import for Head component
import Header from '@/components/Das/Header';
// import Footer from '@/components/Das/Footer';
import ScrollToTopButton from '@/components/Das/ScrollToTopButton';
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
// import Footerr from '@/components/Das/Footerr';
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

    "NCUK Casablanca ",

    "academic excellence",
    "student life",
  ],
  icons: {
    // icon: "/favicon.ico",
  },
  // Open Graph metadata
  openGraph: {
    title: "Ebacc",
    description: "Ebacc E-Learning",
    type: "website",
    url: "https://www.ncukcasablanca.com/",
    siteName: " https://www.ncukcasablanca.com/sitemap.xml",
  },
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@NCUK Casablanca ",
    title: "NCUK Casablanca ",
    description: "NCUK Casablanca ",
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
        <title>NCUK Casablanca </title>
        <meta
          name="description"
          content="NCUK Casablanca offers quality education programs preparing you for success in university and beyond. Discover our courses and get started on your academic journey today."
        />
        <meta
          name="keywords"
          content="education, NCUK Casablanca , academic excellence NCUK Casablanca, higher education, university preparation, international education"
        />
         <link rel="canonical" href="https://www.ncukcasablanca.com/"></link>
        {/* <meta name="author" content="Your Name" /> */}
        <meta name="robots" content="index, follow" />
        {/* Add any other metadata tags as needed */}
        {/* Open Graph metadata */}
        <meta property="og:locale" content="fr_FR"/>
        <meta
          property="og:title"
          content="NCUK Casablanca - Your Gateway to Higher Education"
        />
        <meta
          property="og:title"
          content="NCUK Casablanca - Your Gateway to Higher Education"
        />
        <meta
          property="og:description"
          content="NCUK Casablanca offers quality education programs preparing you for success in university and beyond. Discover our courses and get started on your academic journey today. "
        />
        <meta
          property="og:description"
          content="NCUK Casablanca offers quality education programs preparing you for success in university and beyond. Discover our courses and get started on your academic journey today. "
        />
        <meta
          property="og:image"
          content="https://www.ncukcasablanca.com/_next/image?url=%2Flogo-ncuk.png&w=256&q=75"
        />

        <meta property="og:url" content="https://www.ncukcasablanca.com/" />
        <meta property="og:url" content="https://www.ncukcasablanca.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NCUK Casablanca"></meta>
        {/* Additional titles */}
        <meta
          name="title"
          content="NCUK Casablanca - Your Gateway to Higher Education "
        />
        <meta
          name="twitter:title"
          content="NCUK Casablanca - Your Gateway to Higher Education"
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
            <Footerebag/>
          </TolgeeNextProvider>
        </body>
      </html>
    </>
  );
}

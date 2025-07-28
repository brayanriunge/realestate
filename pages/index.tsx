// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

import Footer from "../components/Footer";
import FaqShow from "@/components/faqs/faqShow";
import CarouselSample from "../components/CarouselSample";

import ContactusPage from "@/components/ContactusPage";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
      <Navbar />
      <CarouselSample />
      {/* <ImagesSliderDemo /> */}
      <Card />
      <ContactusPage />
      <FaqShow />
      {/* <CarouselDemo /> */}
      <Footer />
    </>
  );
}

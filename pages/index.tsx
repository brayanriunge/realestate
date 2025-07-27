// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
// import { CarouselDemo } from "@/components/Hero";
// import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import Footer from "../components/Footer";
import FaqShow from "@/components/faqs/faqShow";

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
      <FaqShow />
      {/* <CarouselDemo /> */}
      <Footer />
    </>
  );
}

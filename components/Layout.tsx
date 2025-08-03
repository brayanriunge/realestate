import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

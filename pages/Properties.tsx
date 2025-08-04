import React from "react";
import Image from "next/image";
import page from "@/public/contact.jpg";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LandProps = {
  imgUrl: string | StaticImageData; // Allow both string paths and StaticImageData
  title: string;
  price: string;
  plotSize: string;
  location: string;
};

export default function Properties() {
  const lands: LandProps[] = [
    {
      imgUrl: page,
      title: "madaraka",
      price: "KSH 450,000",
      plotSize: "50 x 100",
      location: "Jebi",
    },
    {
      imgUrl: page,
      title: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",
      location: "mairi 7",
    },
    {
      imgUrl: page,
      title: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",
      location: "mairi 7",
    },
    {
      imgUrl: page,
      title: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",
      location: "mairi 7",
    },
    {
      imgUrl: page,
      title: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",
      location: "mairi 7",
    },
    {
      imgUrl: page,
      title: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",
      location: "mairi 7",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-50  min-h-screen">
        <div className="md:mx-auto md:max-w-7xl px-2 lg:px-4 mb-6   ">
          <div className="mx-auto px-2  grid max-w-7xl mt-26 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-3">
            {lands.map((land, index) => (
              <div
                key={index}
                className="bg-white mt-6 flex flex-col items-start justify-between hover:shadow-xl hover:shadow-gray-900/50 rounded-2xl  "
              >
                <div className="relative w-full">
                  <Image
                    src={land.imgUrl}
                    alt="file"
                    width={400}
                    height={400}
                    className=" w-full object-cover "
                  />
                  <div className="absolute inset-0 "></div>
                </div>
                <div className="w-5/6 p-4 ">
                  <div className="group relative py-4 px-4">
                    <h3 className="mt-1 text-blue-500 text-[24px] font-bold leading-6">
                      <span className="absolute inset-0 text-center"></span>
                      {land.title}
                    </h3>
                    <div>
                      <p className="flex justify-between gap-4 mt-4 mb-4">
                        <span className="font-bold text-blue-500">
                          Location:{" "}
                        </span>
                        <span className="font-normal  text-gray-500">
                          {land.location}
                        </span>
                      </p>
                      <p className="flex flex-col md:flex-row justify-between gap-4 font-bold">
                        <span className="text-blue-500">Price: </span>
                        <span className="text-gray-500"> {land.price}</span>
                      </p>
                    </div>
                    <div className="flex flex-row justify-center gap-4 w-auto">
                      <Button
                        className="bg-[#00a650]  inline-flex items-center mt-4  
                    gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold 
                    text-white shadow-sm "
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

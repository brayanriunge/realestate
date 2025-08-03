import React from "react";
import Image from "next/image";
import page from "@/public/contact.jpg";
import Layout from "@/components/Layout";
import { StaticImageData } from "next/image";

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
    <Layout>
      <div className="flex flex-wrap gap-4 flex-col-4 items-center  border border-gray-200 mx-auto mt-25">
        {lands.map((land, index) => (
          <div key={index} className="md:w-full sm:w-1/2 lg:w-1/4 p-4 ">
            <div className="flex flex-col mb-4 gap-4 hover:shadow-lg transition-shadow duration-300  rounded">
              <Image
                src={land.imgUrl}
                alt="file"
                width={400}
                height={400}
                className=" border border-gray-200"
              />
              <div className="flex-grow px-4 py-3">
                <h1 className="text-black font-bold md:text-[36px] sm:text-[28px]">
                  {land.title}
                </h1>
                <p className="mt-4 md:text-[28px] sm:text-[24px]">
                  Cash Price:{" "}
                  <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                    {land.price}
                  </span>
                </p>
                <p className="mt-4 md:text-[18px] sm:text-[18px]">
                  Plot size:{" "}
                  <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                    {land.plotSize}
                  </span>
                </p>
                <p className="mt-4 md:text-[18px] sm:text-[16px]">
                  Location:{" "}
                  <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                    {land.location}
                  </span>
                </p>
                <p className="mt-4 md:text-[18px] sm:text-[16px]">
                  Installment Price:
                  <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                    100K
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

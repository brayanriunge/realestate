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
      <div className="md:mx-auto md:max-w-7xl px-2 lg:px-4 mb-6">
        <div className="mx-auto px-2 grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-3">
          {lands.map((land, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-start justify-between hover:shadow-2xl hover:shadow-gray-900/50 rounded-xl "
            >
              <div className="relative w-full">
                <Image
                  src={land.imgUrl}
                  alt="file"
                  width={400}
                  height={400}
                  className=" w-full object-cover "
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="w-5/6 p-4 ">
                <div className="group relative py-4 px-4">
                  <h3 className="mt-1 text-primary-500 text-lg font-bold leading-6">
                    <span className="absolute inset-0 text-center"></span>
                    {land.title}
                  </h3>
                  <div>
                    <p className="flex justify-between gap-4">
                      <span className="font-bold text-secondary-500">
                        Location:{" "}
                      </span>
                      <span className="font-normal  text-gray-500">
                        {land.location}
                      </span>
                    </p>
                    <p className="flex flex-col md:flex-row justify-between  font-bold">
                      <span>Price: </span>
                      <span className="text-"> {land.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

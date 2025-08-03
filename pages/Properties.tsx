import React from "react";
import Image from "next/image";
import page from "@/public/contact.jpg";
import Layout from "@/components/Layout";

export default function Properties() {
  const lands = [
    {
      imgUrl: page,
      titie: "madaraka",
      price: "KSH 450,000",
      plotSize: "50 x 100",

      loction: "Jebi",
    },
    {
      imgUrl: page,
      titie: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",

      loction: "mairi 7",
    },
    {
      imgUrl: page,
      titie: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",

      loction: "mairi 7",
    },
    {
      imgUrl: page,
      titie: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",

      loction: "mairi 7",
    },
    {
      imgUrl: page,
      titie: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",

      loction: "mairi 7",
    },
    {
      imgUrl: page,
      titie: "Plot in m7",
      price: "KSH 450,000",
      plotSize: "50 x 100",

      loction: "mairi 7",
    },
  ];
  return (
    <>
      <Layout>
        <div>
          {lands.map((land) => {
            <div className="md:w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="flex flex-col  hover:shadow-lg transition-shadow duration-300 bg-[rgb(241,235,230)] border border-gray-200 rounded">
                <Image src={land.imgUrl} alt="file" width={400} height={400} />
                <div className="flex-grow px-4 py-3">
                  <h1 className="  text-black font-bold md:text-[36px] sm:text-[28px]">
                    {land.titie}
                  </h1>
                  <p className="mt-4 md:text-[28px] sm:text-[24px] ">
                    Cash Price:{" "}
                    <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                      {land.price}
                    </span>
                  </p>
                  <p className="mt-4 md:text-[18px] sm:text-[18px] ">
                    Plot size:{" "}
                    <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                      {land.plotSize}
                    </span>
                  </p>
                  <p className="mt-4 md;text-[18px] sm:text-[16px]">
                    Location:{" "}
                    <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                      {" "}
                      {land.loction}
                    </span>
                  </p>
                  <p className="mt-4 md:text-[18px] sm:text-[16px]">
                    Installment Price:
                    <span className="text-[#1E90FF] md:text-[18px] sm:text-[16px]">
                      {" "}
                      100K
                    </span>
                  </p>
                </div>
              </div>
            </div>;
          })}
        </div>
      </Layout>
    </>
  );
}

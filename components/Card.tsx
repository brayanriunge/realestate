import Image from "next/image";
import file from "@/public/file.svg";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="flex items-center justify-between  w-full mb-4 ">
        <h1 className="text-3xl text-[#1E90FF]  mx-auto  ">
          Featured Properties
        </h1>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="flex flex-col  hover:shadow-lg transition-shadow duration-300 bg-[rgb(241,235,230)] border border-gray-200 rounded">
          <Image src={file} alt="file" width={400} height={400} />
          <div className="flex-grow px-4 py-3">
            <h1 className="  text-black font-bold text-[28px] ">
              MADARAKA VIEW ESTATE
            </h1>
            <p className="mt-4 text-lg">
              Cash Price: <span className="text-[#1E90FF]">100K</span>
            </p>
            <p className="mt-4 text-lg ">
              Plot size: <span className="text-[#1E90FF]">1/8</span>
            </p>
            <p className="mt-4 text-lg">
              Location: <span className="text-[#1E90FF]"> Madaraka</span>
            </p>
            <p className="mt-4 text-lg">
              Installment Price:<span className="text-[#1E90FF]"> 100K</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  w-full mb-4 ">
        <Link href={"/"} className="mx-auto text-3xl ">
          <button className="bg-black text-white hover:bg-[#1E90FF] rounded-md px-4 py-4">
            View More Properties{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

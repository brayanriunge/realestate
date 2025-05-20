import Image from "next/image";
import file from "@/public/file.svg";

export default function Card() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="flex flex-col  hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
        <Image src={file} alt="file" width={400} height={400} />
        <div className="flex-grow px-4 py-3">
          <h1 className=" font-bold text-black text-2xl">
            MADARAKA VIEW ESTATE
          </h1>
          <p>
            <span className="text-lg">Cash Price:</span>
          </p>
          <p>
            <span className="text-lg">Plot size:</span>
          </p>
          <p>
            <span className="text-lg">Location:</span>
          </p>
          <p>
            <span className="text-lg">Installment Price:</span>
          </p>
        </div>
      </div>
    </div>
  );
}

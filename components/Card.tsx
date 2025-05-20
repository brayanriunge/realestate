import Image from "next/image";
import file from "@/public/file.svg";

export default function Card() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="flex flex-col  hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
        <Image src={file} alt="file" width={90} height={90} />
      </div>
    </div>
  );
}

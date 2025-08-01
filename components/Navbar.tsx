import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/LOGO.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function Navbar() {
  const flexStyles = "justify-between flex items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const router = useRouter();
  return (
    <nav className="py-2  bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md shadow-primary-950/50">
      <div
        className={`z-30 w-full ${flexStyles} fixed top-0 bg-[#ffffff] `}
        //  bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5]
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={90}
              height={90}
              className="rounded-full"
            />
          </Link>
          <div className={`${flexStyles} gap-2 w-5/6`}>
            {isAboveMediaScreens ? (
              <div className={" w-full gap-4"}>
                <div
                  className={
                    "flex flex-col font-medium mt-4 p-8 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 "
                  }
                >
                  <div
                    className={`${
                      router.pathname === "/"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2 bg-white hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/"
                          ? "text-black "
                          : "text-gray-400"
                      }`}
                    >
                      Home
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/properties"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2 bg-white hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/properties"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Properties
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/aboutUs"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2 bg-white hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/aboutUs"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      About Us
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/testimonies"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2 bg-white hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/testimonies"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Testimonies
                    </Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === "/contactUs"
                        ? "text-black border-b-[#00a650] border-b-2 pb-2"
                        : "text-gray-400 hover:border-b-2 bg-white hover:border-b-[#00a650] p-2 hover:rounded-b-4  border-b-1  border-primary-300/50 md:border-b-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/contactUs"
                          ? "text-red-800"
                          : "text-gray-400"
                      }`}
                    >
                      Contacts
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-end p-4">
                <button
                  className="rounded-full p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <HiBars3 className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

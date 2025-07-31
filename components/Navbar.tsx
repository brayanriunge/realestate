import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/LOGO.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const flexStyles = "justify-between flex items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
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
              <div className={`${flexStyles} w-full gap-4`}>
                <div className={`${flexStyles} gap-10 p-2 m-2 font-bold `}>
                  <div className="">
                    <Link href="/">Home</Link>
                  </div>
                  <div>
                    <Link href="/">Properties</Link>
                  </div>
                  <div>
                    <Link href="/">About Us</Link>
                  </div>
                  <div>
                    <Link href="/">Testimonies</Link>
                  </div>
                  <div>
                    <Link href="/">Contacts</Link>
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

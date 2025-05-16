import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/LOGO.jpg";

export default function Navbar() {
  const flexStyles = "justify-between flex items-center";
  return (
    <nav>
      <div className={`z-30 w-full ${flexStyles} fixed top-0 bg-[#2E8B57]`}>
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
          <div className={`${flexStyles} gap-2 w-5/6`}>Home</div>
        </div>
      </div>
    </nav>
  );
}

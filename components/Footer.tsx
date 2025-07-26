import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

export default function Footer() {
  return (
    <div className="mx-auto w-full bg-gray-50 container ">
      <div className=" flex flex-wrap justify-between px-6 py-8 ">
        {/*location*/}
        <div className=" flex flex-col  gap-1.5  ">
          <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline">
            Office location
          </h2>
          <p className="font-medium">
            Hekima building Nyahururu, opposite Mbaari Building.
          </p>
          <p className="font-medium"> Room number 7</p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col justify-between  ">
          <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline">
            contacts
          </h2>
          <p className="font-medium mb-2">Monday - Friday: 7am -6pm</p>
          <p className="font-medium mb-2">Saturday: 8am - 4pm</p>
          <p className="font-medium mb-2">Sunday: As per request</p>
          <div className="mt-4 ">
            <p className="font-medium mb-2 ">
              <span className="inline-flex mr-2">
                <IoMdCall />
              </span>
              TelePhone: 0701842846
            </p>
            <p className="font-medium mb-2 ">
              <span className="inline-flex mr-2">
                <HiOutlineMail />
              </span>
              Email: riungebrian@gmail.com
            </p>
            <p className="font-medium mb-2 ">
              <span className="inline-flex mr-2">
                <FaWhatsapp />
              </span>
              Whatsapp: 0701842846
            </p>
          </div>
        </div>
        {/* Project loctions */}
        <div className="flex flex-col gap-1.5 justify-between">
          <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline">
            Project locations
          </h2>
          <p className="font-medium mb-2">Jibe</p>
          <p className="font-medium mb-2">Nakuru</p>
          <p className="font-medium mb-2">Olkalou</p>
          <p className="font-medium mb-2">Makutano</p>
          <p className="font-medium mb-2">Rumuruti</p>
          <p className="font-medium mb-2">Sipili</p>
        </div>
      </div>

      <div className="rounded-b-lg bg-gray-200 px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025 <Link href="/">GreenAcres</Link>. All Rights Reserved.
        </span>
        <div className="mt-4 flex space-x-6 text-lg sm:justify-center md:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <FaFacebook />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <FaInstagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <FaTwitter />
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
      </div>
    </div>
  );
}

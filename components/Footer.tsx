import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mx-auto w-full bg-gray-50 container ">
      <div className=" flex flex-wrap justify-between px-6 py-8 ">
        <div>
          <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline">
            Quick links
          </h2>
          <ul className="font-medium text-black">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                About
              </a>
            </li>

            <li className="mb-4">
              <a href="/chat" className="hover:underline">
                Chat with us
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        {/*location*/}
        <div className=" flex flex-col items-center gap-4   ">
          <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline">
            Office location
          </h2>
          <p className="font-medium">
            Nyahururu, Hekima building opposite Mbaari Building.
            {""}
            Room number 7
          </p>
          <p></p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col justify-between  ">
          <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline">
            contacts
          </h2>
          <p>Monday - Friday: 7am -6pm</p>
          <p>Saturday: 8am - 4pm</p>
          <p>Sunday: As per request</p>
          <div className="mt-4">
            <p>TelePhone: 0701842846</p>
            <p>Email: riungebrian@gmail.com</p>
            <p>Whatsapp: 0701842846</p>
          </div>
        </div>
        <div className="underline"></div>
      </div>

      {/* Project loctions */}
      <div className="flex flex-col gap-1.5 justify-between">
        <h2 className="mb-4 font-semibold uppercase text-2xl text-gray-900 underline"></h2>
        <p>Jibe</p>
        <p>Nakuru</p>
        <p>Olkalou</p>
        <p>Makutano</p>
        <p>Rumuruti</p>
        <p>Sipili</p>
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

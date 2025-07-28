import React from "react";
import contact from "@/public/contactUs.jpg";
import Image from "next/image";
import ContactForm from "./contactus/ContactForm";

export default function ContactusPage() {
  return (
    <div className="md:mx-auto md:w-4/5 max-w-7xl px-4 lg:px-8  ">
      <div className="mt-4 py-4 space-y-3.5 flex flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex-wrap gap-4">
          {/* image */}
          {/* <div className=" md:max-w-7xl"> */}
          <div className="flex basis-3/5 w-full h-full justify-center md:z-10  ">
            <Image
              alt="contact"
              height={500}
              width={500}
              src={contact}
              className="  mb-4 "
            />
          </div>
          {/* </div> */}

          <div className=" md:max-w-7xl ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

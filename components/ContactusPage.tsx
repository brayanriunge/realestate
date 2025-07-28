import React from "react";
import contact from "@/public/contactUs.jpg";
import Image from "next/image";
import ContactForm from "./contactus/ContactForm";

export default function ContactusPage() {
  return (
    <div className="mx-auto flex  flex-row items-center justify-between">
      {/* image */}
      <div className="w-1/2 ">
        <Image alt="contact" src={contact} height={200} width={300} />
      </div>
      <div className="h-4/6 w-4/6 mx-auto ">
        <ContactForm />
      </div>
    </div>
  );
}

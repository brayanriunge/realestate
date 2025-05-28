"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title:
        "After 30 years abroad, we wanted coastal land for retirement. Your 'Land Matching' service found us a beachfront plot with clean titles. The installment plan (3 years, 0% interest) was a lifesaver. We're now constructing - your recommended architects were superb!",
      author: "Grace & Daniel W., Mombasa (Bought Retirement Plot in Kilifi)",
    },
    {
      title:
        "I needed fertile land for maize farming. Your agri-land specialist analyzed soil samples and even connected me with irrigation experts. The legal team handled all KLRA paperwork. My first harvest paid for the land! Your agri-focused approach is unmatched.",
      author: "Mr. Otieno, Kisumu (Purchased 20-Acre Farm in Uasin Gishu)",
    },
    {
      title:
        "Buying land from overseas seemed impossible until I found your company. Your virtual tours, 24/7 WhatsApp support, and M-Pesa payment options made the process seamless. The land was exactly as shown in your drone videos. I've since referred three family members!",
      author: "Sarah K., UK (Purchased 5 Acres in Naivasha)",
    },
    {
      title:
        "As a first-time buyer, I was nervous about land scams. Your team guided me through every step - from verifying the title deed to connecting me with a trusted surveyor. Within 3 weeks, I was holding genuine documents for my plot. The after-sale support, including free site visits, made me feel valued. I'm now building my dream home!",
      author: "John M., Nairobi (Purchased 1/4 Acre in Kitengela)",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

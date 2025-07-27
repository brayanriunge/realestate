import React from "react";
import land1 from "@/public/image 1.jpg";
import land2 from "@/public/image2.jpg";
import land3 from "@/public/image 3.jpg";
import land4 from "@/public/image 4.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const posters = [
  { id: 1, imgUrl: land1 },
  { id: 2, imgUrl: land2 },
  { id: 3, imgUrl: land3 },
  { id: 4, imgUrl: land4 },
];

const CarouselSample = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {posters.map((poster) => (
          <CarouselItem key={poster.id} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Image src={poster.imgUrl} alt="images" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselSample;

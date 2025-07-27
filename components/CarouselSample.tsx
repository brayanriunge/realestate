import React from "react";
import land1 from "@/public/image 1.jpg";
import land2 from "@/public/image2.jpg";
import land3 from "@/public/image 3.jpg";
import land4 from "@/public/image 4.jpg";
// import Autoplay from "embla-carousel-autoplay";

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
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );
  return (
    <Carousel className="w-full overflow-hidden mt-20 ">
      <CarouselContent>
        {posters.map((poster) => (
          <CarouselItem
            key={poster.id}
            // className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Image
                src={poster.imgUrl}
                alt="images"
                className="h-96 w-full flex aspect-square items-center overflow-hidden justify-center p-6"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-20 w-20  bg-white" />
      <CarouselNext className="h-20 w-20  bg-white" />
    </Carousel>
  );
};

export default CarouselSample;

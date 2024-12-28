"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import Hero1 from "../../public/hero/hero1.jpg";
import Hero2 from "../../public/hero/hero2.jpg";
import Hero3 from "../../public/hero/hero3.jpg";
import Hero4 from "../../public/hero/hero4.jpg";
import Hero5 from "../../public/hero/hero5.jpg";
import Hero6 from "../../public/hero/hero6.jpg";
import Image from "next/image";

const heroData = [
  {
      id: 1,
      heading: "Slide One",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: Hero1,
      button1: <Button size="lg" className="gap-4" variant="outline">Jump on a call <PhoneCall className="w-4 h-4" /></Button>,
      button2: <Button size="lg" className="gap-4 bg-primaryColor">Sign up here <MoveRight className="w-4 h-4" /></Button>
  },
  {
      id: 2,
      heading: "Slide Two",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: Hero2,
      button1: <Button size="lg" className="gap-4" variant="outline">Jump on a call <PhoneCall className="w-4 h-4" /></Button>,
      button2: <Button size="lg" className="gap-4 bg-primaryColor">Sign up here <MoveRight className="w-4 h-4" /></Button>
  },
  {
      id: 3,
      heading: "Slide Three",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: Hero3,
      button1: <Button size="lg" className="gap-4" variant="outline">Jump on a call <PhoneCall className="w-4 h-4" /></Button>,
      button2: <Button size="lg" className="gap-4 bg-primaryColor">Sign up here <MoveRight className="w-4 h-4" /></Button>
  },
  {
      id: 4,
      heading: "Slide Four",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: Hero4,
      button1: <Button size="lg" className="gap-4" variant="outline">Jump on a call <PhoneCall className="w-4 h-4" /></Button>,
      button2: <Button size="lg" className="gap-4 bg-primaryColor">Sign up here <MoveRight className="w-4 h-4" /></Button>
  },
  {
      id: 5,
      heading: "Slide Five",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: Hero5,
      button1: <Button size="lg" className="gap-4" variant="outline">Jump on a call <PhoneCall className="w-4 h-4" /></Button>,
      button2: <Button size="lg" className="gap-4 bg-primaryColor">Sign up here <MoveRight className="w-4 h-4" /></Button>
  },
  {
      id: 6,
      heading: "Slide Six",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: Hero6,
      button1: <Button size="lg" className="gap-4" variant="outline">Jump on a call <PhoneCall className="w-4 h-4" /></Button>,
      button2: <Button size="lg" className="gap-4 bg-primaryColor">Sign up here <MoveRight className="w-4 h-4" /></Button>
  },
];

export const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full ">
      <div className="mx-auto">
        <div className="flex flex-col gap-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {heroData.map(( { id, heading, text, img, button1, button2 }) => (
                <CarouselItem key={id}>
                    <div className="w-full h-dvh flex justify-center items-center relative overflow-hidden">
                        <Image src={img} alt={`slide ${id}`} className="object-cover w-full h-full" />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/[0.5]">
                              <div className="container flex gap-8 items-center justify-center flex-col">
                                  <div>
                                  <Button variant="secondary" size="lg" className="gap-4 hidden md:inline-flex">
                                      Read our launch article <MoveRight className="w-4 h-4" />
                                  </Button>
                                  </div>
                                  <div className="flex gap-4 flex-col">
                                  <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-white text-center font-bold">
                                      {heading}
                                  </h1>
                                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-200 text-muted-foreground max-w-2xl text-center">
                                      {text}
                                  </p>
                                  </div>
                                  <div className="flex flex-wrap gap-5 justify-center">
                                    <span className="hidden md:flex">{button1}</span>
                                    {button2}
                                  </div>
                              </div>
                        </div>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[57%] left-[5%] opacity-50" />
            <CarouselNext className="absolute top-[57%] right-[5%] opacity-50"/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

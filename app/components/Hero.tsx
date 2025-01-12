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

import { Megaphone, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import Hero1 from "../../public/hero/hero1.jpg";
import Hero2 from "../../public/hero/hero2.jpg";
import Hero3 from "../../public/hero/hero3.jpg";
import Hero4 from "../../public/hero/hero4.jpg";
import Hero5 from "../../public/hero/hero5.jpg";
import Hero6 from "../../public/hero/hero6.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsMegaphone } from "react-icons/bs";

const heroData = [
  {
    id: 1,
    heading: (
      <>
      Learn Anywhere, <span className="text-primaryColor">Anytime</span>
      </>
    ),
    text: "Our flexible online courses fit into your life, not the other way around.",
    img: Hero1,
    button1: (
      <Button size="lg" className="gap-4" variant="outline">
        Jump on a call <PhoneCall className="w-4 h-4" />
      </Button>
    ),
    button2: (
      <Link href="/sign-up">
        <Button size="lg" className="gap-4 bg-primaryColor">
          Sign up here <MoveRight className="w-4 h-4" />
        </Button>
      </Link>
    ),
  },
  {
    id: 2,
    heading: (
      <>
      Unlock <span className="text-primaryColor">Financial Aid </span>Opportunities
      </>
    ),
    text: "Get expert support with applications and secure funding for your education.",
    img: Hero2,
    button1: (
      <Button size="lg" className="gap-4" variant="outline">
        Jump on a call <PhoneCall className="w-4 h-4" />
      </Button>
    ),
    button2: (
      <Button size="lg" className="gap-4 bg-primaryColor">
        Sign up here <MoveRight className="w-4 h-4" />
      </Button>
    ),
  },
  {
    id: 3,
    heading: (
      <>
      Nail Your Interview, <span className="text-primaryColor">Land the Job</span>
      </>
    ),
    text: "Master the art of interviews with personalised coaching and expert feedback.",
    img: Hero3,
    button1: (
      <Button size="lg" className="gap-4" variant="outline">
        Jump on a call <PhoneCall className="w-4 h-4" />
      </Button>
    ),
    button2: (
      <Button size="lg" className="gap-4 bg-primaryColor">
        Sign up here <MoveRight className="w-4 h-4" />
      </Button>
    ),
  },
];

const heroDataMobile = [
  {
    id: 1,
    heading: (
      <>
      Learn Anywhere, <span className="text-primaryColor">Anytime</span>
      </>
    ),
    text: "Our flexible online courses fit into your life, not the other way around.",
    img: Hero4,
    button1: (
      <Button size="lg" className="gap-4" variant="outline">
        Jump on a call <PhoneCall className="w-4 h-4" />
      </Button>
    ),
    button2: (
      <Link href="/sign-up">
        <Button size="lg" className="gap-4 bg-primaryColor">
          Sign up here <MoveRight className="w-4 h-4" />
        </Button>
      </Link>
    ),
  },
  {
    id: 2,
    heading: (
      <>
      Unlock <span className="text-primaryColor">Financial Aid </span>Opportunities
      </>
    ),
    text: "Get expert support with applications and secure funding for your education.",
    img: Hero5,
    button1: (
      <Button size="lg" className="gap-4" variant="outline">
        Jump on a call <PhoneCall className="w-4 h-4" />
      </Button>
    ),
    button2: (
      <Button size="lg" className="gap-4 bg-primaryColor">
        Sign up here <MoveRight className="w-4 h-4" />
      </Button>
    ),
  },
  {
    id: 3,
    heading: (
      <>
      Nail Your Interview, <span className="text-primaryColor">Land the Job</span>
      </>
    ),
    text: "Master the art of interviews with personalised coaching and expert feedback.",
    img: Hero6,
    button1: (
      <Button size="lg" className="gap-4" variant="outline">
        Jump on a call <PhoneCall className="w-4 h-4" />
      </Button>
    ),
    button2: (
      <Button size="lg" className="gap-4 bg-primaryColor">
        Sign up here <MoveRight className="w-4 h-4" />
      </Button>
    ),
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
    <div className="w-full">
      <div className="mx-auto">
        <div className="flex flex-col gap-10">
          {/* Large screen */}
          <Carousel setApi={setApi} className="w-full hidden lg:flex">
            <CarouselContent>
              {heroData.map(({ id, heading, text, img, button1, button2 }) => (
                <CarouselItem key={id}>
                  <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
                    <Image
                      src={img}
                      alt={`slide ${id}`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/[0.6]">
                      <div className="container flex gap-8 items-center justify-center flex-col">
                        <div>
                            <BsMegaphone className="flicker-text -rotate-12 h-10 w-10" />
                        </div>
                        <div className="flex gap-4 flex-col">
                          <h1 className="text-3xl md:text-5xl max-w-2xl tracking-tighter text-white text-center font-bold">
                            {heading}
                          </h1>
                          <p className="text-lg md:text-2xl leading-relaxed tracking-tight text-slate-200 text-muted-foreground max-w-2xl text-center">
                            {text}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-5 justify-center">
                          {button2}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[60%] left-[5%] opacity-80" />
            <CarouselNext className="absolute top-[60%] right-[5%] opacity-80" />
          </Carousel>

          {/* Small screen */}
          <Carousel setApi={setApi} className="w-full lg:hidden">
            <CarouselContent>
              {heroDataMobile.map(
                ({ id, heading, text, img, button1, button2 }) => (
                  <CarouselItem key={id}>
                    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
                      <Image
                        src={img}
                        alt={`slide ${id}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/[0.5]">
                        <div className="container flex gap-8 items-center justify-center flex-col">
                          <div>
                          <BsMegaphone className="flicker-text -rotate-12 h-8 w-8" />
                          </div>
                          <div className="flex gap-4 flex-col">
                            <h1 className="text-3xl md:text-5xl max-w-2xl tracking-tighter text-white text-center font-bold">
                              {heading}
                            </h1>
                            <p className="text-md md:text-xl leading-relaxed tracking-tight text-slate-200 text-muted-foreground max-w-2xl text-center">
                              {text}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-5 justify-center">
                            {button2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[60%] left-[5%] opacity-80" />
            <CarouselNext className="absolute top-[60%] right-[5%] opacity-80" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

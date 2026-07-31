"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ChevronDown, MoveRight, PhoneCall } from "lucide-react";
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
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    eyebrow: "Applied digital skills",
    heading: (
      <>
        Learn Anywhere, <br />
        <span className="text-primaryColor">Anytime</span>
      </>
    ),
    text: "Our flexible online courses fit into your life, not the other way around.",
    img: Hero1,
    imgMobile: Hero4,
  },
  {
    id: 2,
    eyebrow: "Funding support",
    heading: (
      <>
        Unlock <span className="text-primaryColor">Financial Aid</span>
        <br />
        Opportunities
      </>
    ),
    text: "Get expert support with applications and secure funding for your education.",
    img: Hero2,
    imgMobile: Hero5,
  },
  {
    id: 3,
    eyebrow: "Job readiness",
    heading: (
      <>
        Nail Your Interview, <br />
        <span className="text-primaryColor">Land the Job</span>
      </>
    ),
    text: "Master the art of interviews with personalised coaching and expert feedback.",
    img: Hero3,
    imgMobile: Hero6,
  },
];

export const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map(({ id, eyebrow, heading, text, img, imgMobile }, index) => (
            <CarouselItem key={id} className="pl-0">
              <div className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden">
                {/* Desktop / mobile crops of the same slide */}
                <Image
                  src={img}
                  alt=""
                  priority={index === 0}
                  placeholder="blur"
                  className={cn(
                    "absolute inset-0 hidden h-full w-full object-cover lg:block",
                    current === index && "animate-ken-burns"
                  )}
                />
                <Image
                  src={imgMobile}
                  alt=""
                  priority={index === 0}
                  placeholder="blur"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover lg:hidden",
                    current === index && "animate-ken-burns"
                  )}
                />

                {/* Legibility scrim: navy wash + darker top and bottom */}
                <div className="absolute inset-0 bg-secondaryColor/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-secondaryColor/80 via-secondaryColor/20 to-secondaryColor/90" />

                <div className="container relative z-10 flex flex-col items-center justify-center gap-7 px-4 text-center">
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur",
                      current === index && "animate-fade-in"
                    )}
                  >
                    <BsMegaphone className="flicker-text h-4 w-4 -rotate-12" />
                    <span className="font-tertiary text-xs tracking-[0.2em] text-white/90">
                      {eyebrow}
                    </span>
                  </div>

                  <div className="flex max-w-3xl flex-col gap-5">
                    <h1
                      className={cn(
                        "text-balance text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl",
                        current === index && "animate-fade-up"
                      )}
                    >
                      {heading}
                    </h1>
                    <p
                      className={cn(
                        "mx-auto max-w-xl text-pretty text-base leading-relaxed text-slate-200 md:text-xl",
                        current === index && "animate-fade-up [animation-delay:120ms]"
                      )}
                    >
                      {text}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "flex flex-wrap items-center justify-center gap-3",
                      current === index && "animate-fade-up [animation-delay:220ms]"
                    )}
                  >
                    <Link href="/sign-up">
                      <Button
                        size="lg"
                        className="gap-2 rounded-full bg-primaryColor px-7 text-white shadow-glow transition-transform hover:bg-primaryColor-600 active:scale-[0.98]"
                      >
                        Sign up here
                        <MoveRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur transition-colors hover:bg-white/20 hover:text-white"
                      >
                        Jump on a call
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 hidden h-11 w-11 border-white/25 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 hover:text-white lg:flex xl:left-8" />
        <CarouselNext className="right-4 hidden h-11 w-11 border-white/25 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 hover:text-white lg:flex xl:right-8" />
      </Carousel>

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-24 z-10 flex items-center justify-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              current === index
                ? "w-10 bg-primaryColor"
                : "w-4 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <Link
        href="#about"
        aria-label="Scroll to content"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-max flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
      >
        <span className="font-tertiary text-[0.65rem] tracking-[0.25em]">
          SCROLL
        </span>
        <ChevronDown className="h-4 w-4 animate-scroll-cue" />
      </Link>
    </section>
  );
};

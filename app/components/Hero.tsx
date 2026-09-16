import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/* Three background crops, one per screen band. Swap any of them for another
   file in /public/hero, or drop a new file in there and point the import at it.

     small   phones, under 640px      portrait source, the viewport is tall
     medium  tablets, 640 to 1023px   portrait source, still taller than wide
     large   1024px and up            landscape source

   hero1 to hero3 are the landscape crops, hero4 to hero6 the portrait ones.

   Every file in /public/hero is used somewhere else on the page, so each of
   these repeats a photo. Both repeats are in the two places a photo is hardest
   to recognise, grayscale under a dark wash:
     hero5 also backs the impact quote band, under a heavy navy wash
     hero6 also fills the Projects card, which is the more visible of the two
   hero4 is currently unused, so it is the file to reach for first if either of
   these repeats starts to show. */
import HeroSmall from "../../public/hero/hero6.jpg";
import HeroMedium from "../../public/hero/hero5.jpg";
import HeroLarge from "../../public/hero/hero1.jpg";

// Shared by all three, so only the file and the breakpoint differ below
const backdropClass =
  "absolute inset-0 h-full w-full object-cover grayscale";

// One treatment, two lengths. See the copy variants in the markup below.
const copyClass =
  "mt-7 max-w-3xl animate-fade-up text-pretty text-[0.95rem] font-semibold leading-relaxed text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] [animation-delay:180ms] md:text-base lg:text-[1.05rem]";

export const Hero = () => {
  return (
    <section
      id="home"
      className="h-hero relative flex w-full items-center justify-center overflow-hidden bg-secondaryColor-950"
    >
      {/* One crop per screen band, desaturated to match the reference design.
          Only one is ever displayed, the other two are display:none. */}
      <Image
        src={HeroSmall}
        alt=""
        priority
        placeholder="blur"
        sizes="100vw"
        className={cn(backdropClass, "sm:hidden")}
      />
      <Image
        src={HeroMedium}
        alt=""
        priority
        placeholder="blur"
        sizes="100vw"
        className={cn(backdropClass, "hidden sm:block lg:hidden")}
      />
      <Image
        src={HeroLarge}
        alt=""
        priority
        placeholder="blur"
        sizes="100vw"
        className={cn(backdropClass, "hidden lg:block")}
      />

      {/* Legibility: a flat wash plus darker top and bottom for the nav and CTA */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45" />

      <div className="relative z-10 flex w-full flex-col items-center px-5 pt-28 text-center sm:px-8 lg:px-14 lg:pt-36">
        <h1 className="animate-fade-up text-balance font-display text-[2rem] font-extrabold uppercase leading-[1.04] tracking-[-0.01em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.4rem] xl:text-[4.5rem] 2xl:text-[5.5rem]">
          Empowering communities.
          <br />
          Generating impact<span className="text-primaryColor">.</span>
        </h1>

        {/* Phones get the condensed line; sm and up get the full statement.
            Only one is ever rendered, so screen readers read it once. */}
        <p className={cn(copyClass, "sm:hidden")}>
          TNSES empowers individuals, organisations and communities through
          skills, education and enterprise.
        </p>
        <p className={cn(copyClass, "hidden sm:block")}>
          The National Socio-Economic Support (TNSES) empowers individuals,
          organisations and communities through skills development, education
          and enterprise.
          <span className="block">
            Because everyone deserves the opportunity to thrive.
          </span>
        </p>
      </div>

      {/* Square CTA, flush with the header gutter */}
      <Link
        href="#about"
        className="absolute bottom-8 left-5 z-10 animate-fade-up bg-primaryColor px-8 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-glow transition-colors [animation-delay:360ms] hover:bg-primaryColor-600 sm:left-8 lg:bottom-10 lg:left-14 lg:text-sm"
      >
        Learn more
      </Link>

      {/* Scroll cue */}
      <Link
        href="#about"
        aria-label="Scroll to content"
        className="absolute inset-x-0 bottom-9 z-10 mx-auto hidden h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/40 sm:flex lg:bottom-11"
      >
        <ChevronDown className="h-4 w-4 animate-scroll-cue" />
      </Link>
    </section>
  );
};

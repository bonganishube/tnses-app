import Image from "next/image";

import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

import QuoteImage from "@/public/hero/hero5.jpg";

/**
 * Pull quote over a darkened photo, with a full-bleed counter bar beneath it.
 *
 * PLACEHOLDER FIGURES. The three numbers and their labels come straight from
 * the reference design, not from TNSES records. Replace them with real
 * reported figures before this goes live, and pick counters that match the
 * organisation's actual work (learners trained, bursaries secured, placements
 * made) rather than the famine and shelter framing carried over here.
 */
const stats = [
  { value: "455", lead: "People", strong: "fed", panel: "bg-accentColor" },
  { value: "85", lead: "Shelters", strong: "built", panel: "bg-secondaryColor" },
  { value: "R122,000", lead: "Money", strong: "donated", panel: "bg-primaryColor" },
];

export const Impact = () => {
  return (
    <section className="w-full" id="impact">
      {/* Quote band */}
      <div className="relative overflow-hidden bg-secondaryColor-950">
        <Image
          src={QuoteImage}
          alt=""
          placeholder="blur"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        {/* Wash heavy enough for the serif to hold, light enough to keep the
            photo readable as texture */}
        <div className="absolute inset-0 bg-secondaryColor-950/75" />

        <div className="container relative z-10 mx-auto px-4 py-12 lg:py-16">
          {/* Oversized quote glyph, decorative only */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-0 select-none font-secondary text-[9rem] leading-none text-white/10 sm:-top-10 sm:text-[14rem] lg:text-[18rem]"
          >
            &ldquo;
          </span>

          <blockquote className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-pretty font-secondary text-xl leading-relaxed text-white sm:text-2xl lg:text-[2rem] lg:leading-[1.3]">
                There is a lot that happens around the world we cannot control.
                We cannot stop earthquakes, we cannot prevent droughts, and we
                cannot prevent all conflict, but when we know where the hungry,
                the homeless and the sick exist, then we can help.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <footer className="mt-6 text-base text-slate-300 lg:text-lg">
                <cite className="not-italic">- Jan Schakowsky</cite>
              </footer>
            </Reveal>
          </blockquote>
        </div>
      </div>

      {/* Counter bar. Full bleed with no gaps, so the three fills meet edge to edge. */}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {stats.map(({ value, lead, strong, panel }, index) => (
          <div
            key={lead}
            className={cn("px-6 py-14 text-center lg:py-20", panel)}
          >
            {/* Reveal sits inside the fill so the panel itself never shifts */}
            <Reveal delay={index * 120} className="flex flex-col items-center gap-2">
              <p className="font-display text-4xl font-bold text-white lg:text-5xl">
                {value}
              </p>
              <p className="font-display text-lg uppercase tracking-wide text-white lg:text-xl">
                <span className="font-light">{lead} </span>
                <span className="font-bold">{strong}</span>
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;

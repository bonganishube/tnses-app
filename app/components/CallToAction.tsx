import Link from "next/link";
import { MoveRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Closing band between Contact and the Footer, so the last thing a visitor
 * scrolls past is an invitation rather than a map.
 *
 * Flat orange, picking up the counter bar in the impact band so the page opens
 * and closes on the same brand fill.
 */
const CallToAction = () => (
  <section className="bg-primaryColor py-20 lg:py-24">
    <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
      <Reveal>
        <span className="inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">
          <span aria-hidden className="h-[2px] w-7 bg-white" />
          Get started
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="max-w-3xl text-balance font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.015em] text-white sm:text-[2.35rem] md:text-[2.9rem] md:leading-[1.06]">
          Your next step starts with a conversation
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
          Whether you are looking for training, professional development or help
          getting ready for your next role, we will help you work out where to
          begin.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <Link
          href="#contact"
          className="btn-square group mt-2 bg-white py-4 text-primaryColor-700 hover:bg-white/90"
        >
          <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          Send us a message
        </Link>
      </Reveal>
    </div>
  </section>
);

export default CallToAction;

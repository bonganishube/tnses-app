import Link from "next/link";
import { GraduationCap, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

/**
 * Closing band between Contact and the Footer, so the last thing a visitor
 * scrolls past is an invitation rather than a map.
 */
const CallToAction = () => (
  <section className="relative overflow-hidden bg-secondaryColor py-20 lg:py-24">
    <div
      aria-hidden
      className="pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full bg-primaryColor/15 blur-3xl"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-40 -left-20 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-3xl"
    />

    <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 text-center">
      <Reveal>
        <span className="section-eyebrow section-eyebrow-invert">
          <span className="h-1.5 w-1.5 rounded-full bg-primaryColor" />
          Get started
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="section-title max-w-3xl text-white">
          Your next step starts with a conversation
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p className="section-subtitle mx-auto text-center text-slate-300">
          Whether you are looking for training, funding support or help landing
          your first role, we will help you work out where to begin.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/sign-up">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-primaryColor px-7 text-white shadow-glow transition-transform hover:bg-primaryColor-600 active:scale-[0.98]"
            >
              Sign up here
              <GraduationCap className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-white/25 bg-white/10 px-7 text-white backdrop-blur transition-colors hover:bg-white/20 hover:text-white"
            >
              Send us a message
              <MoveRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CallToAction;

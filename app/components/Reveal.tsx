"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger in ms, applied once the element enters the viewport */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Fades + lifts its children into view the first time they are scrolled to.
 *
 * The hidden state is applied client-side in a layout effect (before paint, so
 * there is no flash) rather than during SSR. That way the server HTML is fully
 * visible: if JS never runs or hydration fails, the content still shows.
 */
export const Reveal = ({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"static" | "hidden" | "visible">("static");

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!node || prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Safety net: never leave content hidden if the observer never fires.
    const timeout = window.setTimeout(() => setState("visible"), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(
        state !== "static" && "reveal",
        state === "visible" && "reveal-visible",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

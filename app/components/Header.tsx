"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Full lockup at rest, bare mark once the bar condenses. The wordmark is
// unreadable at h-11, so the condensed bar drops to the mark on its own.
import LogoFull from "../../public/original_logo.png";
import LogoMark from "../../public/logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = { title: string; href: string };

// Labels come from the reference design, ordered to follow the page as you
// scroll it: hero, services, about, team, contact.
//
// Projects, Volunteers and Donate have no section of their own yet, so each
// points at the closest existing anchor, repoint them here once those sections
// exist. Projects sits next to What we do because they share #services, which
// also keeps the scroll-spy marker on the first of the two.
const navigationItems: NavItem[] = [
  { title: "Home", href: "#home" },
  { title: "What we do", href: "#services" },
  { title: "Projects", href: "#services" },
  { title: "About us", href: "#about" },
  { title: "Volunteers", href: "#team" },
  { title: "Donate", href: "#contact" },
];

export const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsHeaderActive(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy: mark whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const sections = Array.from(new Set(navigationItems.map((i) => i.href)))
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inBand = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];

        if (inBand?.target.id) setActiveHref(`#${inBand.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Two labels can share an anchor, so only the first of them takes the marker.
  const activeIndex = navigationItems.findIndex(
    (item) => item.href === activeHref
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 w-full transition-all duration-300 ease-out",
        isHeaderActive
          ? "bg-secondaryColor-950/95 shadow-header backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      {/* Soft scrim so the transparent nav stays legible over the photo */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -bottom-20 bg-gradient-to-b from-black/50 via-black/20 to-transparent transition-opacity duration-300",
          isHeaderActive ? "opacity-0" : "opacity-100"
        )}
      />

      <div
        className={cn(
          "relative flex w-full flex-col items-center px-5 transition-all duration-300 sm:px-8 lg:px-14",
          isHeaderActive ? "pb-3 pt-3" : "pb-4 pt-6 lg:pt-8"
        )}
      >
        {/* Centred mark */}
        <Link href="#home" aria-label="TNSES, home" className="group block">
          <Image
            src={isHeaderActive ? LogoMark : LogoFull}
            alt="TNSES"
            priority
            className={cn(
              "w-auto transition-all duration-300 group-hover:scale-[1.03]",
              isHeaderActive ? "h-11" : "h-16 sm:h-20 lg:h-24"
            )}
          />
        </Link>

        {/* Desktop nav, spread edge to edge beneath the mark */}
        <nav
          className={cn(
            "hidden w-full items-center justify-between transition-all duration-300 lg:flex",
            isHeaderActive ? "mt-3" : "mt-6"
          )}
        >
          {navigationItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                key={item.title}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="group relative px-1 py-2 font-display text-[0.95rem] font-light tracking-[0.14em] text-white/85 transition-colors hover:text-white xl:text-base"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-[2px] bg-primaryColor transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.title}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-[2px] bg-primaryColor transition-opacity duration-300",
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu, parked right so the mark stays centred */}
        <div
          className={cn(
            "absolute right-4 transition-all duration-300 sm:right-6 lg:hidden",
            isHeaderActive ? "top-4" : "top-7"
          )}
        >
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent
              className="w-[86vw] overflow-y-auto sm:max-w-sm"
              side="right"
            >
              <SheetHeader className="text-left">
                <SheetClose asChild>
                  <Link href="#home" aria-label="TNSES, home">
                    <Image src={LogoFull} alt="TNSES" className="h-14 w-auto" />
                  </Link>
                </SheetClose>
              </SheetHeader>

              <nav className="mt-10 flex w-full flex-col">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="border-b border-secondaryColor/10 py-4 font-display text-base font-light tracking-[0.14em] text-secondaryColor transition-colors hover:text-primaryColor"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

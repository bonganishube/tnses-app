"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GraduationCap, Menu, MoveRight, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href?: string;
  description?: string;
  items?: { title: string; href: string }[];
};

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Services",
    description:
      "Practical programmes that build skills, open doors and support real career moves.",
    items: [
      { title: "Applied Digital Skills", href: "#services" },
      { title: "Blueprint", href: "#services" },
      { title: "Consultation & Monitoring", href: "#services" },
      { title: "Recruitment & Fieldwork", href: "#services" },
    ],
  },
  {
    title: "Organisation",
    description:
      "Who we are, the people behind TNSES and how to reach the team.",
    items: [
      { title: "About Us", href: "#about" },
      { title: "Services", href: "#services" },
      { title: "Team", href: "#team" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Contact Us", href: "#contact" },
    ],
  },
];

export const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHeaderActive(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // One shared treatment for every top-level nav control, light on the hero
  // image and dark once the glass bar kicks in.
  const navLinkClass = cn(
    "h-9 rounded-full bg-transparent px-4 text-sm font-medium transition-colors",
    isHeaderActive
      ? "text-secondaryColor hover:bg-secondaryColor/5 hover:text-secondaryColor data-[state=open]:bg-secondaryColor/5"
      : "text-white/90 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10"
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 box-border w-full transition-all duration-300 ease-out",
        isHeaderActive
          ? "border-b border-secondaryColor/10 bg-white/85 shadow-header backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
          : "border-b border-transparent bg-transparent"
      )}
      id="home"
    >
      {/* Scrim that fades past the bar so the transparent nav stays legible
          over the hero without drawing a hard edge. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -bottom-16 bg-gradient-to-b from-secondaryColor/60 via-secondaryColor/25 to-transparent transition-opacity duration-300",
          isHeaderActive ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "container relative mx-auto flex flex-row items-center gap-4 px-4 transition-all duration-300 lg:grid lg:grid-cols-3",
          isHeaderActive ? "min-h-[4rem]" : "min-h-20"
        )}
      >
        {/* Desktop navigation */}
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className={cn(navLinkClass, "inline-flex items-center")}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className={navLinkClass}>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[460px] rounded-xl p-5">
                        <div className="flex grid-cols-5 flex-col gap-6 lg:grid">
                          <div className="col-span-2 flex h-full flex-col justify-between">
                            <div className="flex flex-col gap-2">
                              <p className="font-semibold text-secondaryColor">
                                {item.title}
                              </p>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                            <Link href="#contact" className="mt-8">
                              <Button size="sm" variant="secndary" className="w-full rounded-full">
                                Contact Us
                              </Button>
                            </Link>
                          </div>
                          <div className="col-span-3 flex h-full flex-col justify-center gap-0.5 text-sm">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="group flex flex-row items-center justify-between rounded-lg px-3 py-2.5 leading-relaxed transition-colors hover:bg-secondaryColor/5"
                              >
                                <span className="text-secondaryColor">
                                  {subItem.title}
                                </span>
                                <MoveRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primaryColor" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Wordmark */}
        <Link href="#home" className="group shrink-0">
          <div className="flex items-center gap-2.5 lg:justify-center">
            <Image
              src={Logo}
              alt="TNSES"
              width={40}
              height={40}
              className={cn(
                "rounded-lg transition-all duration-300 group-hover:scale-105",
                isHeaderActive ? "h-9 w-9" : "h-10 w-10"
              )}
            />
            <p
              className={cn(
                "font-tertiary text-2xl tracking-wide transition-colors duration-300",
                isHeaderActive ? "text-secondaryColor" : "text-white"
              )}
            >
              Tnses
            </p>
          </div>
        </Link>

        {/* Desktop actions */}
        <div className="hidden w-full items-center justify-end gap-3 lg:flex">
          <Link href="#contact">
            <Button
              variant="ghost"
              className={cn(
                "gap-2 rounded-full text-sm font-medium",
                isHeaderActive
                  ? "text-secondaryColor hover:bg-secondaryColor/5"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              <PhoneCall className="h-4 w-4" />
              Contact Us
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="gap-2 rounded-full bg-primaryColor text-white shadow-glow transition-transform hover:bg-primaryColor-600 hover:shadow-glow active:scale-[0.98]">
              Log in
              <GraduationCap className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex w-full items-center justify-end gap-2 lg:hidden">
          <Link href="/sign-in">
            <Button
              size="sm"
              className="gap-2 rounded-full bg-primaryColor text-white shadow-glow hover:bg-primaryColor-600"
            >
              Log in
              <GraduationCap className="h-4 w-4" />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "rounded-full border transition-colors",
                  isHeaderActive
                    ? "border-secondaryColor/15 bg-white text-secondaryColor"
                    : "border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                )}
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[88vw] overflow-y-auto sm:max-w-sm" side="left">
              <SheetHeader className="text-left">
                <SheetClose asChild>
                  <Link href="#home">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={Logo}
                        alt="TNSES"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <p className="font-tertiary text-2xl tracking-wide text-secondaryColor">
                        Tnses
                      </p>
                    </div>
                  </Link>
                </SheetClose>
              </SheetHeader>

              <nav className="mt-8 flex w-full flex-col">
                {navigationItems.map((item) =>
                  item.href ? (
                    <SheetClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className="border-b py-4 text-base font-medium text-secondaryColor transition-colors hover:text-primaryColor"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ) : (
                    <Accordion
                      type="single"
                      collapsible
                      key={item.title}
                      defaultValue={`item-${item.title}`}
                    >
                      <AccordionItem value={`item-${item.title}`}>
                        <AccordionTrigger className="py-4 text-base font-medium text-secondaryColor hover:no-underline">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col">
                            {item.items?.map((subItem) => (
                              <SheetClose asChild key={subItem.title}>
                                <Link
                                  href={subItem.href}
                                  className="flex items-center justify-between py-2.5 pl-3 text-sm text-muted-foreground transition-colors hover:text-primaryColor"
                                >
                                  {subItem.title}
                                  <MoveRight className="h-4 w-4" />
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )
                )}
              </nav>

              <SheetClose asChild>
                <Link href="#contact" className="mt-8 block">
                  <Button className="w-full gap-2 rounded-full bg-primaryColor text-white hover:bg-primaryColor-600">
                    <PhoneCall className="h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

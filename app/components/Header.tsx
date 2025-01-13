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
import { GraduationCap, Menu, MoveRight, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    // Header active state on scroll
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    {
      title: "Home",
      href: "#home",
      description: "",
    },
    {
      title: "Services",
      // href: "#services",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      items: [
        {
          title: "Applied Digital Skills",
          href: "#services",
        },
        {
          title: "Blueprint",
          href: "#services",
        },
        {
          title: "Consultation & Monitoring",
          href: "#services",
        },
        {
          title: "Recruitment & Fieldwork",
          href: "#services",
        },
      ],
    },
    {
      title: "Organisation",
      // href: "#about",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      items: [
        {
          title: "About Us",
          href: "#about",
        },
        {
          title: "Services",
          href: "#services",
        },
        {
          title: "FAQ",
          href: "#faq",
        },
        {
          title: "Team",
          href: "#team",
        },
        {
          title: "Testimonials",
          href: "#testimonials",
        },
        {
          title: "Contact Us",
          href: "#contact",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header
      className={`header-section w-full fixed text-black box-border z-20 items-center ${
        isHeaderActive
          ? "bg-white shadow-lg transition-all duration-300 ease-in-out"
          : "bg-transparent"
      }`}
      id="home"
    >
      <div className="container px-4 relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          className={`header-secction  bg-transparent ${
                            isHeaderActive
                              ? "text-black hover:text-black"
                              : "text-white hover:bg-white"
                          }`}
                        >
                          {item.title}
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger
                        className={`font-medium bg-transparent ${
                          isHeaderActive ? "text-black" : "text-white"
                        }`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Link href="#contact">
                            <Button
                              size="sm"
                              variant="secndary"
                              className="mt-10"
                            >
                              Contact Us
                            </Button>
                            </Link>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 leading-relaxed rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
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
        <Link href="#home">
          <div className="flex lg:justify-center items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-[5px]"
            />
            <p
              className={`font-tertiary text-2xl ${
                isHeaderActive ? "text-secondaryColor" : "text-white"
              }`}
            >
              Tnses
            </p>
          </div>
        </Link>
        <div className="flex justify-end w-full gap-4">
          <Button
            variant="ghost"
            className={`hidden md:inline ${
              isHeaderActive ? "text-black" : "text-white"
            }`}
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Link href="/sign-in">
            <Button
              variant="outline"
              className={`hidden md:flex bg-transparent text-white ${
                isHeaderActive ? "text-secondaryColor" : "text-white"
              }`}
            >
              Log in <GraduationCap />
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 md:gap-0 lg:hidden">
          <Link href="/sign-in">
            <Button
              className={`md:hidden bg-transparent text-white ${
                isHeaderActive ? "text-secondaryColor" : "text-white"
              }`}
              variant="outline"
            >
              Log in <GraduationCap />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`bg-transparent text-white ${
                  isHeaderActive ? "text-secondaryColor" : "text-white"
                }`}
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto" side="left">
              <SheetHeader>
                <Link href="#home">
                  <div className="flex lg:justify-center items-center gap-2">
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={40}
                      height={40}
                      className="rounded-[5px]"
                    />
                    <p className="font-tertiary text-2xl text-secondaryColor">
                      Tnses
                    </p>
                  </div>
                </Link>
              </SheetHeader>
              <NavigationMenu className="w-full mt-6 pt-6 px-4">
                <NavigationMenuList className="w-full flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem className="w-full" key={item.title}>
                      {item.href ? (
                        <div className="w-full border-b">
                          <SheetClose asChild>
                            <Link href={item}>
                              <Button
                                variant="ghost"
                                className="my-4 text-[16px]"
                              >
                                {item.title}
                              </Button>
                            </Link>
                          </SheetClose>
                        </div>
                      ) : (
                        <>
                          <Accordion
                            type="single"
                            collapsible
                            defaultValue={`item-${item.title}`}
                          >
                            <AccordionItem value={`item-${item.title}`}>
                              <AccordionTrigger>
                                <Button
                                  variant="ghost"
                                  className="mr-24 text-[16px]"
                                >
                                  {item.title}
                                </Button>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div>
                                  {item.items?.map((subItem) => (
                                    <SheetClose asChild>
                                      <Link
                                        href={subItem.href}
                                        key={subItem.title}
                                        className="flex flex-col ml-5"
                                      >
                                        <span className="text-muted-foreground my-1">
                                          {subItem.title}
                                        </span>
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              {/* <SheetFooter className="px-4 flex-row-reverse gap-4 mt-10">
                            <SheetClose asChild>
                                <Link href="/sign-up">
                                    <Button className="bg-primaryColor lg:hidden ">
                                        Get Started
                                    </Button>
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/sign-in">
                                    <Button variant="outline" className=" lg:hidden mb-5">
                                        Log In
                                    </Button>
                                </Link>
                            </SheetClose>
                    </SheetFooter>    */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

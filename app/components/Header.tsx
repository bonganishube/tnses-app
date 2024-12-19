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
import { Menu, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png"
import Image from "next/image";

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
        href: "/",
        description: "",
        },
        {
        title: "Services",
        description: "Managing a small business today is already tough.",
        items: [
            {
            title: "Reports",
            href: "/reports",
            },
            {
            title: "Statistics",
            href: "/statistics",
            },
            {
            title: "Dashboards",
            href: "/dashboards",
            },
            {
            title: "Recordings",
            href: "/recordings",
            },
        ],
        },
        {
        title: "Organisation",
        description: "Managing a small business today is already tough.",
        items: [
            {
            title: "About us",
            href: "/about",
            },
            {
            title: "Fundraising",
            href: "/fundraising",
            },
            {
            title: "Investors",
            href: "/investors",
            },
            {
            title: "Contact us",
            href: "/contact",
            },
        ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className={`header-section w-full fixed text-black box-border z-20 items-center ${
            isHeaderActive
                ? "bg-white shadow-lg transition-all duration-300 ease-in-out"
                : "bg-transparent"
            }`}
        >
        <div className="container px-4 relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
            <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
            <NavigationMenu className="flex justify-start items-start">
                <NavigationMenuList className="flex justify-start gap-4 flex-row">
                {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                    {item.href ? (
                        <>
                        <NavigationMenuLink>
                            <Button variant="ghost" className={`header-secction text-lg bg-transparent ${isHeaderActive 
                                ? "text-black hover:text-black"
                                : "text-white hover:bg-white" 
                            }`}>{item.title}</Button>
                        </NavigationMenuLink>
                        </>
                    ) : (
                        <>
                        <NavigationMenuTrigger className={`font-medium text-lg bg-transparent ${isHeaderActive
                            ? "text-black"
                            : "text-white"
                        }`}>
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
                                <Button size="sm" className="mt-10">
                                Book a call today
                                </Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                                {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                    href={subItem.href}
                                    key={subItem.title}
                                    className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
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
            <Link href="#">
                <div className="flex lg:justify-center items-center gap-2">
                <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-[5px]" />
                <p className={`font-tertiary text-2xl ${isHeaderActive 
                    ? "text-black"
                    : "text-white"
                }`}>Tnses</p>
                </div>
            </Link>
            <div className="flex justify-end w-full gap-4">
            <Button variant="ghost" size="lg" className={`hidden md:inline ${isHeaderActive 
                ? "text-black"
                : "text-white"
            }`}>
                <Link href="#contact">Contact us</Link>
            </Button>
            <div className="border-r hidden md:inline"></div>
            <Button variant="outline" size="lg" className="hidden md:inline" ><Link href="/sign-in">Log in</Link></Button>
            <Button className="bg-primaryColor" size="lg"><Link href="/sign-up">Get started</Link></Button>
            </div>
            <div className="flex w-12 shrink lg:hidden items-end justify-end">
            <Button variant="outline" size="icon" className={`bg-transparent text-white ${isHeaderActive 
                ? "text-black"
                : "text-white"
            }`} onClick={() => setOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </Button>
            {isOpen && (
                <div className="absolute top-20 border-t flex flex-col h-dvh right-0 bg-background shadow-lg pt-24 container gap-8">
                {navigationItems.map((item) => (
                    <div key={item.title}>
                    <div className="flex flex-col gap-2">
                        {item.href ? (
                        <Link
                            href={item.href}
                            className="flex justify-between items-center"
                        >
                            <span className="text-md">{item.title}</span>
                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                        </Link>
                        ) : (
                        <p className="text-md">{item.title}</p>
                        )}
                        {item.items &&
                        item.items.map((subItem) => (
                            <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex justify-between items-center"
                            >
                            <span className="text-muted-foreground">
                                {subItem.title}
                            </span>
                            <MoveRight className="w-4 h-4 stroke-1" />
                            </Link>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            )}
            </div>
        </div>
        </header>
    );
    };
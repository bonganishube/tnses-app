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
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

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
        href: "#services",
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
        href: "#about",
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
        <header className={`header-section w-full fixed text-black box-border z-20 items-center ${
            isHeaderActive
                ? "bg-white shadow-lg transition-all duration-300 ease-in-out"
                : "bg-transparent"
            }`} id="home"
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
                            <Button variant="ghost" className={`header-secction  bg-transparent ${isHeaderActive 
                                ? "text-black hover:text-black"
                                : "text-white hover:bg-white" 
                            }`}>{item.title}</Button>
                        </NavigationMenuLink>
                        </>
                    ) : (
                        <>
                        <NavigationMenuTrigger className={`font-medium bg-transparent ${isHeaderActive
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
                                <Button size="sm" className="mt-10" onClick={() => window.location.href = 'tel:+123456789'}>
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
            <Link href="#home">
                <div className="flex lg:justify-center items-center gap-2">
                <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-[5px]" />
                <p className={`font-tertiary text-2xl ${isHeaderActive 
                    ? "text-black"
                    : "text-white"
                }`}>Tnses</p>
                </div>
            </Link>
            <div className="flex justify-end w-full gap-4">
            <Button variant="ghost" className={`hidden md:inline ${isHeaderActive 
                ? "text-black"
                : "text-white"
            }`}>
                <Link href="#contact">Contact Us</Link>
            </Button>
            <div className="border-r hidden md:inline"></div>
            <Button variant="outline" className="hidden md:inline" ><Link href="/sign-in">Log In</Link></Button>
            <Button className="bg-primaryColor hidden md:inline"><Link href="/sign-up">Get Started</Link></Button>
            </div>
            <div className="lg:hidden">
                <Sheet>
                <SheetTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className={`bg-transparent text-white ${
                            isHeaderActive 
                                ? "text-black"
                                : "text-white"
                        }`} 
                    >
                        <Menu />
                    </Button>
                </SheetTrigger>
                
                <SheetContent className="w-full overflow-y-auto" side="left">
                    <SheetHeader>
                        <Link href="#home">
                            <div className="flex lg:justify-center items-center gap-2">
                            <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-[5px]" />
                            <p className="font-tertiary text-2xl text-black">
                                Tnses
                            </p>
                            </div>
                        </Link>
                    </SheetHeader>
                        <div className="flex flex-col gap-6 border-t mt-6 pt-6 px-4">
                        
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="text-semibold">{item.title}</span> 
                                    </Link>
                                    ) : (
                                    <p>{item.title}</p>
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
                                        </Link>
                                    ))}
                                </div>
                                </div>
                            ))}
                        </div>
                    <SheetFooter className="px-4 flex-row-reverse gap-4">
                            <SheetClose asChild>
                            <Button className="bg-primaryColor lg:hidden mt-6">
                                <Link href="/sign-up">
                                    Get Started
                                </Link>
                            </Button>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button variant="outline" className=" lg:hidden mt-6 mb-5">
                                    <Link href="/sign-in">
                                        Log In
                                    </Link>
                                </Button>
                            </SheetClose>
                    </SheetFooter>   
                </SheetContent>
            </Sheet>
            </div>
        </div>
        </header>
    );
    };
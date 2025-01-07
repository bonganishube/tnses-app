"use client";

import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { isTeacher } from "@/lib/teacher";
import { BadgeCheck, Bell, Book, ChevronsUpDown, CreditCard, Lock, LogOut, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SearchInput from "./search-input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

const SidebarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  // Check if we are on a "teacher" page or any page starting with "teacher"
  const isTeacherPage = pathname?.startsWith("/teacher");
  // Check if we're on any of the student-friendly pages
  const isStudentPage =
    pathname === "/home" ||
    pathname === "/browse" ||
    pathname?.startsWith("/course");

  const isStudentMode = isStudentPage || (isTeacher(userId) && !isTeacherPage); // Show student mode on specific pages or for teacher users not on teacher pages
  const isAdminMode = !isStudentMode; // Admin mode is the reverse of student mode

  const [isOpen, setIsOpen] = useState(false); // Local state to manage dropdown open/close

  // Function to close the dropdown after selecting an option
  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown
  };

  return (
    <>
      {/* Render Search Input for Browse Page */}
      {pathname === "/browse" && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="flex gap-4 p-2 ml-auto">
        {/* Render NavigationMenu with Dropdown inside */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs text-primaryColor bg-primaryColor/20 font-bold">
                <Book className="h-3 w-3 mr-2" />
                {isStudentMode ? "Student Mode" : "Admin Mode"}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Link href={isStudentMode ? "/teacher/courses" : "/home"}>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="font-medium text-gray-500 hover:text-gray-700"
                      onClick={handleItemClick} // Close dropdown after click
                    >
                      <Lock className="h-3 w-3" />
                      {isStudentMode
                        ? "Switch to Admin Mode"
                        : "Switch to Student Mode"}
                    </Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Button for signing out */}
        <div className="flex items-center active:bg-color-0 active:border-0">
          {/* <UserButton afterSignOutUrl="/" /> */}

          {/* <NavUser user={data.user} /> */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground px-0"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={data.user.avatar} alt={data.user.name} />
                  <AvatarFallback className="rounded-lg bg-slate-200 font-normal">CN</AvatarFallback>
                </Avatar>
                {/* <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {data.user.name}
                  </span>
                  <span className="truncate text-xs">{data.user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" /> */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg "
              // side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{data.user.name}</span>
                    <span className="truncate text-xs">{data.user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Sparkles />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default SidebarRoutes;

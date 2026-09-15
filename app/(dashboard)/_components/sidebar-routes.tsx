"use client";

import { Button } from "@/components/ui/button";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { isTeacher } from "@/lib/teacher";
import {
  Bell,
  CreditCard,
  GraduationCap,
  LogOut,
  Repeat,
  Shield,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = {
  user: {
    name: "Bongani",
    email: "bonganishubeaz@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

/** Same rule as the sidebar footer, so both avatars show the same initials. */
const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";

const initials = initialsOf(data.user.name);

const SidebarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isStudentPage =
    pathname === "/home" ||
    pathname === "/browse" ||
    pathname?.startsWith("/course");

  const isStudentMode = isStudentPage || (isTeacher(userId) && !isTeacherPage);

  const ModeIcon = isStudentMode ? GraduationCap : Shield;

  return (
    <>
      {pathname === "/browse" && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="ml-auto flex items-center gap-2">
        {/* Student / admin mode switch */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-9 gap-2 rounded-full bg-primaryColor/10 px-3 text-xs font-semibold text-primaryColor hover:bg-primaryColor/15 hover:text-primaryColor data-[state=open]:bg-primaryColor/20"
            >
              <ModeIcon className="h-3.5 w-3.5" />
              {isStudentMode ? "Student Mode" : "Admin Mode"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="w-60">
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              You are viewing TNSES as a{" "}
              {isStudentMode ? "student" : "administrator"}.
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href={isStudentMode ? "/teacher/courses" : "/home"}
                className="cursor-pointer gap-2"
              >
                <Repeat className="h-4 w-4" />
                Switch to {isStudentMode ? "Admin" : "Student"} Mode
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Account menu */}
        <DropdownMenu>
          {/* asChild, without it the trigger renders its own <button>
              around this one, which is invalid DOM. */}
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Account menu"
              className="h-9 w-9 rounded-full px-0 data-[state=open]:bg-secondaryColor/5"
            >
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={data.user.avatar} alt="" />
                <AvatarFallback className="rounded-full bg-secondaryColor/10 text-xs font-medium text-secondaryColor">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="w-60">
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage src={data.user.avatar} alt="" />
                  <AvatarFallback className="rounded-full bg-secondaryColor/10 text-xs font-medium text-secondaryColor">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-secondaryColor">
                    {data.user.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {data.user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link
                  href={isStudentMode ? "/profile" : "/teacher/profile"}
                  className="cursor-pointer gap-2"
                >
                  <UserRoundPen className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <CreditCard className="h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
              <LogOut className="h-4 w-4" />
              <SignOutButton redirectUrl="/" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default SidebarRoutes;

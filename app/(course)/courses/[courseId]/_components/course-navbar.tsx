import SidebarRoutes from "@/app/(dashboard)/_components/sidebar-routes";
import { Chapter, Course, UserProgress } from "@prisma/client";
import React from "react";
import CourseMobileSidebar from "./course-mobile-sidebar";
import { UserButton } from "@clerk/nextjs";
import Logo from "@/public/logo.png";
import Image from "next/image";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className="p-4 h-12 w-full flex items-center bg-white">
      <div className="flex">
        <CourseMobileSidebar course={course} progressCount={progressCount} />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="aspect-square size-8 justify-center rounded-lg text-sidebar-primary-foreground">
          <Image src={Logo} alt="Team logo" className="rounded-[5px]" />
        </div>
        <span className="truncate font-medium font-tertiary text-lg text-secondaryColor">
          Ads
        </span>
      </div>
      <SidebarRoutes />
    </div>
  );
};

export default CourseNavbar;

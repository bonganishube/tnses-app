import SidebarRoutes from "@/app/(dashboard)/_components/sidebar-routes";
import { Chapter, Course, UserProgress } from "@prisma/client";
import React from "react";
import CourseMobileSidebar from "./course-mobile-sidebar";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex h-14 w-full items-center gap-2 border-b border-secondaryColor/10 bg-white/85 px-4 backdrop-blur-xl">
      <CourseMobileSidebar course={course} progressCount={progressCount} />

      <Link href="/home" className="flex flex-row items-center gap-2.5">
        <span className="aspect-square size-8 rounded-lg">
          <Image src={Logo} alt="" className="rounded-[5px]" />
        </span>
        <span className="truncate font-tertiary text-lg tracking-wide text-secondaryColor">
          Tnses
        </span>
      </Link>

      <SidebarRoutes />
    </div>
  );
};

export default CourseNavbar;

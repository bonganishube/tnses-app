import SidebarRoutes from '@/app/(dashboard)/_components/sidebar-routes';
import { Chapter, Course, UserProgress } from '@prisma/client';
import React from 'react';
import CourseMobileSidebar from './course-mobile-sidebar';
import { UserButton } from '@clerk/nextjs';

interface CourseNavbarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null;
        })[];
    };
    progressCount: number;
}

const CourseNavbar = ({
    course,
    progressCount,
}: CourseNavbarProps) => {
  return (
    <div className="p-4 h-12 w-full flex items-center place-content-between bg-white">
        <div className="flex">
            <CourseMobileSidebar
                course={course}
                progressCount={progressCount}
            />
        </div>
        <div className="flex mr-2">
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
    </div>
  )
}

export default CourseNavbar
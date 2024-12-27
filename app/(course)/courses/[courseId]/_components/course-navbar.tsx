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
    <div className="p-4 h-full w-full flex items-center bg-white">
        <CourseMobileSidebar
            course={course}
            progressCount={progressCount}
        />
        <UserButton 
            afterSignOutUrl="/"
        />
    </div>
  )
}

export default CourseNavbar
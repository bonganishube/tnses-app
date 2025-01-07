import React from 'react';
import { LogOut, Menu, PanelRight, PanelRightClose } from "lucide-react";
import { Chapter, Course, UserProgress } from "@prisma/client";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import CourseSidebar from './course-sidebar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { SignOutButton } from '@clerk/nextjs';



interface CourseMobileSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null;
        })[];
    };
    progressCount: number;
};

const CourseMobileSidebar = ({
    course, 
    progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden hover:opacity-75 transition">
            <PanelRight size="icon" className="h-4 w-4 ml-2 rotate-180" />
        </SheetTrigger>
        <Separator orientation="vertical" className="ml-2 mr-4 h-4 md:hidden" />
        <SheetContent side="left" className="p-0 bg-white ">
            <CourseSidebar 
                course={course}
                progressCount={progressCount}
            />
        </SheetContent>
    </Sheet>
  )
}

export default CourseMobileSidebar
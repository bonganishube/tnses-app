import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Chapter, Course, UserProgress } from '@prisma/client';
import { redirect } from 'next/navigation';
import React from 'react';
import CourseSidebarItem from './course-sidebar-item';
import CourseProgress from '@/components/course-progress';
import { SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

interface CourseSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null;
        })[]
    };
    progressCount: number;
};

const CourseSidebar = async ({
    course,
    progressCount,
}: CourseSidebarProps) => {
    const { userId } = await auth();

    if (!userId) {
        return redirect("/");
    }

    const purchase = await db.purchase.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId: course.id,
            }
        }
    });

    return (
        <div className="h-screen border-r flex flex-col overflow-y-auto shadow-sm">
            <div className="p-8 flex flex-col border-b">
                <h1 className="font-semibold">
                    {course.title}
                </h1>
                {purchase && (
                    <div className="mt-10">
                        <CourseProgress 
                            variant="success"
                            value={progressCount}
                        />
                    </div>
                )}
            </div>
            <div className="flex-grow">
                {course.chapters.map((chapter) => {
                    return (
                        <CourseSidebarItem 
                            key={chapter.id}
                            id={chapter.id}
                            label={chapter.title}
                            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
                            courseId={course.id}
                            isLocked={!chapter.isFree && !purchase}
                        />
                    );
                })}
            </div>
            {/* Button at the bottom */}
            <div className="p-4">
                <Button size="sm" variant="outline" className="w-auto">
                    <LogOut className="h-4 w-4" />
                    <SignOutButton />
                </Button>
            </div>
        </div>
    );
}

export default CourseSidebar;

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Chapter, Course, UserProgress } from '@prisma/client';
import { redirect } from 'next/navigation';
import React from 'react';
import CourseSidebarItem from './course-sidebar-item';
import CourseProgress from '@/components/course-progress';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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
        <div className="flex h-full flex-col overflow-y-auto border-r border-secondaryColor/10 bg-white">
            <div className="flex flex-col gap-6 border-b border-secondaryColor/10 p-6">
                <div className="space-y-1">
                    <p className="font-tertiary text-[0.7rem] tracking-[0.14em] text-muted-foreground">
                        COURSE
                    </p>
                    <h1 className="font-secondary text-xl leading-snug tracking-[-0.01em] text-secondaryColor">
                        {course.title}
                    </h1>
                </div>
                {purchase && (
                    <CourseProgress
                        variant="success"
                        value={progressCount}
                    />
                )}
            </div>

            <nav className="flex flex-1 flex-col py-2">
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
            </nav>

            {/* Way back out of the player — sign-out lives in the top bar menu */}
            <div className="border-t border-secondaryColor/10 p-4">
                <Link href="/home">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="w-full justify-start gap-2 rounded-lg text-muted-foreground hover:text-secondaryColor"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to my courses
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default CourseSidebar;

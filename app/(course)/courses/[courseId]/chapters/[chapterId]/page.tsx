import getChapter from '@/actions/get-chapter';
import { Banner } from '@/components/banner';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';
import { VideoPlayer } from './_components/video-player';
import CourseEnrollButton from './_components/course-enroll-button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, File } from 'lucide-react';
import CourseProgressButton from './_components/course-progress-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ReadText from '@/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/read-text';

const ChapterIdPage = async ({
    params,
}: {
    params: Promise<{ courseId: string; chapterId: string }>;
}) => {
    const { userId } = await auth();

    if (!userId) {
        return redirect("/browser");
    }

    // Await the dynamic `params` object to handle the async nature
    const { courseId, chapterId } = await params;

    const {
        chapter,
        course,
        muxData,
        attachments,
        nextChapter,
        userProgress,
        purchase,
    } = await getChapter({
        userId,
        chapterId,
        courseId,
    });

    if (!chapter || !course) {
        return redirect("/browser");
    }

    const isLocked = !chapter.isFree && !purchase;
    const completeOnEnd = !!purchase && !userProgress?.isCompleted;

    return (
        <div>
            {userProgress?.isCompleted && (
                <Banner
                    variant="success"
                    label="You have already completed this chapter."
                />
            )}
            {isLocked && (
                <Banner
                    variant="warning"
                    label="You need to purchase this course to watch this chapter."
                />
            )}

            <Link 
                href={`/home`}
                className="flex items-center text-sm hover:opacity-75 transition p-6"
            >
                <Button variant="outline" className=""><ArrowLeft className="h-4 w-4 mr-4" />
                    Back to courses
                </Button>
            </Link>

            <div className="p-6 space-y-2 md:hidden">
                <h1 className="text-2xl font-semibold text-secondaryColor">{chapter.title}</h1>
                <h2 className="text-base text-muted-foreground">{course.title}</h2>
            </div>
            <div className="flex flex-col max-w-4xl mx-auto pb-20">
                <div className="p-4">
                    <VideoPlayer
                        chapterId={chapterId}
                        title={chapter.title}
                        courseId={courseId}
                        nextChapterId={nextChapter?.id}
                        playbackId={muxData?.playbackId!}
                        isLocked={isLocked}
                        completeOnEnd={completeOnEnd}
                    />
                </div>
                <div>
                    <div className="p-4">
                        {purchase ? (
                            <CourseProgressButton
                                chapterId={chapterId}
                                courseId={courseId}
                                nextChapterId={nextChapter?.id}
                                isCompleted={!!userProgress?.isCompleted}
                            />
                        ) : (
                            <CourseEnrollButton
                                courseId={courseId}
                                price={course.price!}
                            />
                        )}
                    </div>
                    <Separator />
                    <div className="p-4">
                        <h1 className="font-semibold">Description</h1>
                        <ReadText value={chapter.description!} />
                    </div>
                    <div>
                        {purchase ? (
                            <div className="p-4">
                                <p className="font-semibold">Instructions</p>
                                <ReadText value={course.instructions!} />
                            </div>
                        ) : null}
                    </div>
                    {!!attachments.length && (
                        <>
                            <Separator />
                            <div className="p-4">
                                {attachments.map((attachment) => (
                                    <a
                                        href={attachment.url}
                                        target="_blank"
                                        key={attachment.id}
                                        className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                                    >
                                        <File />
                                        <p className="line-clamp-1">
                                            {attachment.name}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChapterIdPage;

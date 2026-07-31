import getChapter from "@/actions/get-chapter";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { VideoPlayer } from "./_components/video-player";
import CourseEnrollButton from "./_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, File, Lock } from "lucide-react";
import CourseProgressButton from "./_components/course-progress-button";
import ReadText from "@/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/read-text";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ChapterIdPage = async ({
  params,
}: {
  params: Promise<{ courseId: string; chapterId: string }>;
}) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/browse");
  }

  // Await the dynamic `params` object to handle the async nature
  const { courseId, chapterId } = await params;

  const {
    chapter,
    course,
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
    return redirect("/browse");
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 pb-20 sm:px-6">
      {userProgress?.isCompleted && (
        <Alert variant="success">
          <CheckCircle className="h-4 w-4" style={{ color: "#047857" }} />
          <AlertTitle>Well done!</AlertTitle>
          <AlertDescription>
            You have already completed this chapter
          </AlertDescription>
        </Alert>
      )}
      {isLocked && (
        <Alert variant="warning">
          <Lock className="h-4 w-4" style={{ color: "#f59e0b" }} />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You need to purchase this course to watch this chapter.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-1">
        <p className="font-tertiary text-[0.7rem] tracking-[0.14em] text-muted-foreground">
          {course.title.toUpperCase()}
        </p>
        <h1 className="font-secondary text-2xl leading-snug tracking-[-0.01em] text-secondaryColor sm:text-3xl">
          {chapter.title}
        </h1>
      </div>

      <div className="overflow-hidden rounded-2xl border border-secondaryColor/10 bg-secondaryColor shadow-card">
        <VideoPlayer
          chapterId={chapterId}
          title={chapter.title}
          courseId={courseId}
          nextChapterId={nextChapter?.id}
          videoUrl={chapter.videoUrl}
          isLocked={isLocked}
          completeOnEnd={completeOnEnd}
        />
      </div>

      <div>
        {purchase ? (
          <CourseProgressButton
            chapterId={chapterId}
            courseId={courseId}
            nextChapterId={nextChapter?.id}
            isCompleted={!!userProgress?.isCompleted}
          />
        ) : (
          <CourseEnrollButton courseId={courseId} price={course.price!} />
        )}
      </div>

      <Separator />

      <section className="space-y-2">
        <h2 className="font-semibold text-secondaryColor">Description</h2>
        <ReadText value={chapter.description!} />
      </section>

      {purchase && course.instructions && (
        <section className="space-y-2">
          <h2 className="font-semibold text-secondaryColor">Instructions</h2>
          <ReadText value={course.instructions!} />
        </section>
      )}

      {!!attachments.length && (
        <>
          <Separator />
          <section className="space-y-3">
            <h2 className="font-semibold text-secondaryColor">Attachments</h2>
            <div className="space-y-2">
              {attachments.map((attachment) => (
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={attachment.id}
                  className="group flex w-full items-center gap-3 rounded-xl border border-secondaryColor/10 bg-white p-3.5 text-sm text-secondaryColor transition-colors hover:border-primaryColor/30 hover:bg-primaryColor/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondaryColor/5 text-secondaryColor transition-colors group-hover:bg-primaryColor group-hover:text-white">
                    <File className="h-4 w-4" />
                  </span>
                  <p className="line-clamp-1 font-medium">{attachment.name}</p>
                </a>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ChapterIdPage;

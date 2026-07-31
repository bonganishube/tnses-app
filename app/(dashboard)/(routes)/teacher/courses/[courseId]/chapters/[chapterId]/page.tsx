import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import ChapterTitleForm from "./_components/chapter-title-form";
import ChapterDescriptionForm from "./_components/chapter-description-form";
import ChapterAccessForm from "./_components/chapter-access-form";
import ChapterVideoForm from "./_components/chapter-video-form";
import { ChapterActions } from "./_components/chapter-actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const ChapterIdPage = async (props: {
  params: Promise<{ courseId: string; chapterId: string }>;
}) => {
  const params = await props.params;
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId,
    },
  });

  if (!chapter) {
    return redirect("/");
  }

  const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6 lg:p-8">
      <Link
        href={`/teacher/courses/${params.courseId}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-secondaryColor"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to course setup
      </Link>

      {!chapter.isPublished && (
        <Alert variant="warning">
          <Terminal className="h-4 w-4" style={{ color: "#f59e0b" }} />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This chapter is unpublished. It will not be visible in the course.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="space-y-1">
            <h1 className="font-secondary text-2xl tracking-[-0.01em] text-secondaryColor sm:text-3xl">
              Chapter setup
            </h1>
            <p className="text-sm text-muted-foreground">
              Complete all fields {completionText} to publish this chapter.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-secondaryColor/10">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  isComplete ? "bg-emerald-500" : "bg-primaryColor"
                )}
                style={{ width: `${(completedFields / totalFields) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {completedFields} of {totalFields}
            </span>
          </div>
        </div>
        <ChapterActions
          disabled={!isComplete}
          courseId={params.courseId}
          chapterId={params.chapterId}
          isPublished={chapter.isPublished}
        />
      </div>

      <div className="space-y-5">
        <ChapterTitleForm
          initialData={chapter}
          courseId={params.courseId}
          chapterId={params.chapterId}
        />
        <ChapterDescriptionForm
          initialData={chapter}
          courseId={params.courseId}
          chapterId={params.chapterId}
        />
        <ChapterAccessForm
          initialData={chapter}
          courseId={params.courseId}
          chapterId={params.chapterId}
        />
        <ChapterVideoForm
          initialData={chapter}
          chapterId={params.chapterId}
          courseId={params.courseId}
        />
      </div>
    </div>
  );
};

export default ChapterIdPage;

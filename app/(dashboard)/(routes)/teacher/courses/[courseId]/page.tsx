import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ArrowLeft, Terminal } from "lucide-react";
import TitleForm from "./_components/title-form";
import InstructionsForm from "./_components/instructions-form";
import ImageForm from "./_components/image-form";
import CategoryForm from "./_components/category-form";
import PriceForm from "./_components/price-form";
import AttachmentForm from "./_components/attachment-form";
import ChaptersForm from "./_components/chapters-form";
import { Actions } from "./_components/actions";
import Link from "next/link";
import DescriptionForm from "./_components/description-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const CourseIdPage = async (props: {
  params: Promise<{ courseId: string }>;
}) => {
  const params = await props.params;
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
    course.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6 lg:p-8">
      <Link
        href={`/teacher/courses`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-secondaryColor"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to courses
      </Link>

      {!course.isPublished && (
        <Alert variant="warning">
          <Terminal className="h-4 w-4" style={{ color: "#f59e0b" }} />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This course is unpublished. It will not be visible to the students.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="space-y-1">
            <h1 className="font-secondary text-2xl tracking-[-0.01em] text-secondaryColor sm:text-3xl">
              Course setup
            </h1>
            <p className="text-sm text-muted-foreground">
              Complete all fields {completionText} to publish this course.
            </p>
          </div>
          {/* Completion meter — the count alone gave no sense of how far off it is */}
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
        <Actions
          disabled={!isComplete}
          courseId={params.courseId}
          isPublished={course.isPublished}
        />
      </div>

      <div className="space-y-5">
        <TitleForm initialData={course} courseId={course.id} />
        <DescriptionForm initialData={course} courseId={course.id} />
        <ImageForm initialData={course} courseId={course.id} />
        <CategoryForm
          initialData={course}
          courseId={course.id}
          options={categories.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
        />
        <ChaptersForm initialData={course} courseId={course.id} />
        <PriceForm initialData={course} courseId={course.id} />
        <InstructionsForm initialData={course} courseId={course.id} />
        <AttachmentForm initialData={course} courseId={course.id} />
      </div>
    </div>
  );
};

export default CourseIdPage;

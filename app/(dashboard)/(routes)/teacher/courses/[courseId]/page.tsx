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
import { Banner } from "@/components/banner";
import { Actions } from "./_components/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DescriptionForm from "./_components/description-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
    <>
      {!course.isPublished && (
        <div className="p-6 pb-0">
          <div className="w-full md:w-4/5 xl:w-1/2">
            <Alert variant="warning">
              <Terminal className="h-4 w-4" style={{ color: "#f59e0b" }} />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                This course is unpublished. It will not be visible to the
                students.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full md:w-4/5 xl:w-1/2">
            <Link
              href={`/teacher/courses`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground"
              >
                <ArrowLeft className="h-4 w-4 " />
                Back to courses
              </Button>
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-semibold">Course setup</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <Actions
                disabled={!isComplete}
                courseId={params.courseId}
                isPublished={course.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="md:w-4/5 xl:w-1/2 mt-16 space-y-6">
          <div>
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
            <div>
              <ChaptersForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <PriceForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <InstructionsForm initialData={course} courseId={course.id} />
              <AttachmentForm initialData={course} courseId={course.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;

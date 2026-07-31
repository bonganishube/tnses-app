import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CourseSidebar from "./_components/course-sidebar";
import CourseNavbar from "./_components/course-navbar";

// Per-user and database-backed — see the note in app/(dashboard)/layout.tsx.
export const dynamic = "force-dynamic";

const CourseLayout = async (props: {
  children: React.ReactNode;
  params: Promise<{ courseId: string }>;
}) => {
  const params = await props.params;

  const { children } = props;

  // Await params resolution
  const { courseId } = await Promise.resolve(params);

  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="min-h-screen bg-tertiaryColor-soft">
      <div className="fixed inset-x-0 top-0 z-40 md:pl-80">
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className="fixed inset-y-0 z-50 hidden w-80 flex-col md:flex">
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>
      <main className="pt-20 md:pl-80">{children}</main>
    </div>
  );
};

export default CourseLayout;

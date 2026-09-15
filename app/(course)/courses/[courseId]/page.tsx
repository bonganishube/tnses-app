import EmptyState from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const CourseIdPage = async (
  props: {
    params: Promise<{ courseId: string}>
  }
) => {
  const params = await props.params;
  const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        chapters: {
          where: {
            isPublished: true,
        },
        orderBy: {
          position: "asc"
        }
      }
    }
  });

  if (!course) {
    return redirect("/browse");
  }

  const firstChapter = course.chapters[0];

  // A course can exist with no published chapters yet. Previously this
  // dereferenced chapters[0] straight away and crashed the route.
  if (!firstChapter) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <EmptyState
          icon={BookOpen}
          title="This course has no chapters yet"
          description="Its chapters are still being prepared. Check back soon, or browse the other courses on offer in the meantime."
          action={
            <Link href="/browse">
              <Button className="rounded-full bg-primaryColor text-white hover:bg-primaryColor-600">
                Browse courses
              </Button>
            </Link>
          }
        />
      </div>
    );
  }

  return redirect(`/courses/${course.id}/chapters/${firstChapter.id}`)
}

export default CourseIdPage

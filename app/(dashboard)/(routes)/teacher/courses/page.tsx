import React from 'react'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import { DataTable } from './_components/data-table';
import { columns } from "./_components/columns";
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';

const CoursesPage = async () => {
  const { userId } = await auth();

  if ( !userId ) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-8">
      <PageHeader
        title="Courses"
        description="Create, edit and publish the courses your learners see."
        actions={
          <Link href="/teacher/create">
            <Button className="gap-2 rounded-full bg-primaryColor text-white hover:bg-primaryColor-600">
              <PlusCircle className="h-4 w-4" />
              New course
            </Button>
          </Link>
        }
      />
      <DataTable columns={columns} data={courses} />
    </div>
  )
}

export default CoursesPage

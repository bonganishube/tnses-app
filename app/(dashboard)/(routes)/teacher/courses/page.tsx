import React from 'react'
import { DataTable } from './_components/data-table';
import { columns } from "./_components/columns";
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

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
    <div className="w-full overflow-hidden p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  )
}

export default CoursesPage
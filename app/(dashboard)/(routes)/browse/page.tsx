import { db } from '@/lib/db';
import React, { Suspense } from 'react';
import { Categories } from './_components/categories';
import SearchInput from '../../_components/search-input';
import { getCourses } from '@/actions/get-courses';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';

// Lazy load CoursesList component to be client-side
const CoursesList = dynamic(() => import('@/components/courses-list'), { ssr: false });

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({
  searchParams,
}: SearchPageProps) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/');
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  const { title, categoryId } = searchParams;

  // Server-side fetch to get courses
  const courses = await getCourses({
    userId,
    title,
    categoryId,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput />
        </Suspense>
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        {/* Wrap CoursesList in Suspense */}
        <Suspense fallback={<div>Loading courses...</div>}>
          <CoursesList items={courses} />
        </Suspense>
      </div>
    </>
  );
};

export default SearchPage;

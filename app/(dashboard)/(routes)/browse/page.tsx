import { db } from '@/lib/db';
import React, { Suspense } from 'react';
import { Categories } from './_components/categories';
import SearchInput from '../../_components/search-input';
import PageHeader from '@/components/page-header';
import { Skeleton } from '@/components/ui/skeleton';
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

const CoursesSkeleton = () => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="overflow-hidden rounded-2xl border border-secondaryColor/10 bg-white"
      >
        <Skeleton className="aspect-video w-full rounded-none" />
        <div className="space-y-3 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    ))}
  </div>
);

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
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-8">
      <PageHeader
        title="Browse courses"
        description="Explore the programmes on offer and enrol in the ones that fit your goals."
      />

      {/* The top bar carries the search field from md up */}
      <div className="md:hidden">
        <Suspense fallback={<Skeleton className="h-9 w-full rounded-full" />}>
          <SearchInput />
        </Suspense>
      </div>

      <Categories items={categories} />

      <Suspense fallback={<CoursesSkeleton />}>
        <CoursesList items={courses} />
      </Suspense>
    </div>
  );
};

export default SearchPage;

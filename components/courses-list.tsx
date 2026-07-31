import { Category, Course } from '@prisma/client';
import React from 'react'
import { BookOpen } from 'lucide-react';
import CourseCard from './course-card';
import EmptyState from './empty-state';

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
};

interface CoursesListProps {
    items: CourseWithProgressWithCategory[];
    /** Shown when there is nothing to list */
    emptyTitle?: string;
    emptyDescription?: string;
    emptyAction?: React.ReactNode;
}

const CoursesList = ({
    items,
    emptyTitle = "No courses found",
    emptyDescription = "Try a different category or search term.",
    emptyAction,
}: CoursesListProps) => {
    if (items.length === 0) {
        return (
            <EmptyState
                icon={BookOpen}
                title={emptyTitle}
                description={emptyDescription}
                action={emptyAction}
            />
        );
    }

    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
                <CourseCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl!}
                    chaptersLength={item.chapters.length}
                    price={item.price!}
                    progress={item.progress}
                    category={item?.category?.name!}
                />
            ))}
        </div>
    )
}

export default CoursesList

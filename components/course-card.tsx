import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BookOpen } from 'lucide-react';
import { formatPrice } from '@/lib/format';
import CourseProgress from './course-progress';

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    price: number;
    progress: number | null;
    category: string;
};

const CourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    price,
    progress,
    category
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`} className="group h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-secondaryColor/10 bg-white shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primaryColor/25 group-hover:shadow-lift">
            <div className="relative aspect-video w-full overflow-hidden bg-secondaryColor-100">
                {imageUrl ? (
                    <Image
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        alt=""
                        src={imageUrl}
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-secondaryColor/30">
                        <BookOpen className="h-8 w-8" />
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-4">
                {category ? (
                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-primaryColor-700">
                        {category}
                    </p>
                ) : null}

                <h3 className="mt-1.5 line-clamp-2 font-semibold leading-snug text-secondaryColor transition-colors group-hover:text-primaryColor">
                    {title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>
                        {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
                    </span>
                </div>

                <div className="mt-4 flex-1" />

                {progress !== null ? (
                    <CourseProgress
                        variant={progress === 100 ? "success" : "default"}
                        size="sm"
                        value={progress}
                    />
                ) : (
                    <p className="text-base font-semibold text-secondaryColor">
                        {formatPrice(price)}
                    </p>
                )}
            </div>
        </div>
    </Link>
  )
}

export default CourseCard

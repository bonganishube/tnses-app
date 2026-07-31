"use client"

import { cn } from '@/lib/utils';
import { CheckCircle2, Lock, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface CourseSidebarItemsProps {
    label: string;
    id: string;
    isCompleted: boolean;
    courseId: string;
    isLocked: boolean;
}

const CourseSidebarItem = ({
    label,
    id,
    isCompleted,
    courseId,
    isLocked
}: CourseSidebarItemsProps) => {
    const pathname = usePathname();

    const Icon = isLocked ? Lock : (isCompleted ? CheckCircle2 : PlayCircle);
    const isActive = pathname?.includes(id);

    return (
      <Link
        href={`/courses/${courseId}/chapters/${id}`}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "group relative flex w-full items-center gap-3 px-6 py-3.5 text-sm font-medium text-slate-600 transition-colors hover:bg-secondaryColor/[0.04] hover:text-secondaryColor",
          isActive && "bg-primaryColor/10 text-primaryColor hover:bg-primaryColor/15 hover:text-primaryColor",
          isCompleted && !isActive && "text-emerald-700 hover:text-emerald-800",
          isCompleted && isActive && "bg-emerald-50 text-emerald-700 hover:bg-emerald-100/70 hover:text-emerald-700",
          isLocked && "text-muted-foreground",
        )}
      >
        {/* Active rail */}
        <span
          aria-hidden
          className={cn(
            "absolute inset-y-0 left-0 w-[3px] rounded-r",
            isActive && (isCompleted ? "bg-emerald-500" : "bg-primaryColor")
          )}
        />
        <Icon
          className={cn(
            "h-[18px] w-[18px] shrink-0 text-slate-400 transition-colors group-hover:text-secondaryColor",
            isActive && "text-primaryColor group-hover:text-primaryColor",
            isCompleted && "text-emerald-600 group-hover:text-emerald-600"
          )}
        />
        <span className="text-left leading-snug">{label}</span>
      </Link>
    );
}

export default CourseSidebarItem;

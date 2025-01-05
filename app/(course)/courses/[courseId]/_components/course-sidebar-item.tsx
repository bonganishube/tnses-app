"use client"

import { cn } from '@/lib/utils';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
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
    const router = useRouter();

    // Set the appropriate icon based on lock/completion state
    const Icon = isLocked ? Lock : (isCompleted ? CheckCircle : PlayCircle);

    // Determine if this chapter is the active one based on pathname
    const isActive = pathname?.includes(id);

    // Handle navigation on click
    const onClick = () => {
      router.push(`/courses/${courseId}/chapters/${id}`);
    }

    return (
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 w-full", 
          isActive && "text-primaryColor bg-primaryColor/20 hover:bg-primaryColor/20 hover:text-primaryColor",
          isCompleted && "text-emerald-700  hover:text-emerald-700",
          isCompleted && isActive && "bg-emerald-200/20 hover:text-emerald-700 hover:bg-emerald-300/20",
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon 
            size={22}
            className={cn(
              "text-slate-500",
              isActive && "text-primaryColor",
              isCompleted && "text-emerald-700"
            )}
          />
          {label}
        </div>
      </button>
    );
}

export default CourseSidebarItem;

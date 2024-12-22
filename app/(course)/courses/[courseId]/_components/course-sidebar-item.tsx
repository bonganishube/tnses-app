"use client"

import { CheckCircle, PlayCircle } from 'lucide-react';
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

    const Icon = isLocked ? Lock : (isCompleted ? CheckCircle : PlayCircle)

  return (
    <div>CourseSidebarItem</div>
  )
}

export default CourseSidebarItem
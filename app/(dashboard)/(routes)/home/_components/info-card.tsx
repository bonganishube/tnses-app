import { LucideIcon } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
    numberOfItems: number;
    variant?: "default" | "success";
    label: string;
    icon: LucideIcon;
}

const InfoCard = ({
    variant = "default",
    icon: Icon,
    numberOfItems,
    label
}: InfoCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-secondaryColor/10 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card">
        <span
            className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                variant === "success"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-primaryColor/10 text-primaryColor"
            )}
        >
            <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm text-muted-foreground">
            {label}
          </p>
          <p className="text-2xl font-semibold leading-tight text-secondaryColor">
            {numberOfItems}
            <span className="ml-1.5 text-sm font-normal text-muted-foreground">
              {numberOfItems === 1 ? "course" : "courses"}
            </span>
          </p>
        </div>
    </div>
  )
}

export default InfoCard

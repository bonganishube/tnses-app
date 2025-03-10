import React from 'react';
import { AlertTriangle, CheckCircleIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bannerVariants = cva(
    "border text-center p-4 text-sm flex items-center w-full",
    {
        variants: {
            variant: {
                warning: "bg-red-200/80 border-red-30 text-red-500",
                success: "bg-emerald-700 border-emerald-800 text-secondary",
                }
            },
            defaultVariants: {
                variant: "warning",
            }
        }
    );

    interface BannerProps extends VariantProps<typeof bannerVariants> {
        label: string;
    };

    const iconMap = {
        warning: AlertTriangle,
        success: CheckCircleIcon,
    };

export const Banner = ({
    label,
    variant,
}: BannerProps) => {
    const Icon = iconMap[variant || "warning"];

  return (
    <div className={cn(bannerVariants({ variant }), "text-left")}>
        <Icon className="h-4 w-4 ml-2 mr-4" />
        {label}
    </div>
  );
};


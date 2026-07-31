"use client";

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { IconType } from 'react-icons';
import qs from "query-string";

interface CategoryItemProps {
    label: string;
    value?: string;
    icon?: IconType;
}; 

const CategoryItem: React.FC<CategoryItemProps> = ({ label, value, icon: Icon }) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategoryId = searchParams.get("categoryId");
    const currentTitle = searchParams.get("title");

    const isSelected = currentCategoryId === value;

    const onClick = () => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: currentTitle,
                categoryId: isSelected ? null : value,
            }
        }, { skipNull: true, skipEmptyString: true });

        router.push(url);
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-x-1.5 rounded-full border border-secondaryColor/15 bg-white px-3.5 py-2 text-sm text-secondaryColor transition-colors hover:border-primaryColor/40 hover:bg-primaryColor/5",
                isSelected &&
                    "border-primaryColor bg-primaryColor/10 font-medium text-primaryColor-700 hover:bg-primaryColor/15"
            )}
            type="button"
        >
            {Icon && <Icon size={20} />}
            <div className="truncate">{label}</div>
        </button>
    );
};

export default CategoryItem;

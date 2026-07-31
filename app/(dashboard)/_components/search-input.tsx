"use client"

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/use-debounce';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import qs from "query-string";


const SearchInput = () => {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value);
    
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname()

    const currentCategoryId = searchParams.get("categoryId");

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                categoryId: currentCategoryId,
                title: debouncedValue,
            }
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, currentCategoryId, router, pathname])


  return (
    <div className="relative">
        <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            aria-label="Search for a course"
            className="w-full rounded-full border-secondaryColor/10 bg-tertiaryColor pl-10 text-secondaryColor placeholder:text-muted-foreground focus-visible:border-primaryColor focus-visible:ring-2 focus-visible:ring-primaryColor/25 focus-visible:ring-offset-0 md:w-[260px]"
            placeholder="Search for a course"
        />
    </div>
  )
}

export default SearchInput

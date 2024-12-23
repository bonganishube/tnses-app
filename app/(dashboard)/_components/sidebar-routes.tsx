"use client"

import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import SearchInput from './search-input';

const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isSearchPage = pathname === "/search";

  return (
    <>
        {isSearchPage && (
            <div className="hidden md:block">
                <SearchInput />
            </div>
        )}
        <div className="flex gap-4 p-2 ml-auto">
            {isTeacherPage || isCoursePage ? (
                <Link href="/search">
                    <Button size="sm" variant="ghost">
                        <LogOut className="h-4 w-4 mr-2"/>
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm" variant="ghost">
                        Admin mode
                    </Button>
                </Link>
            )}
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
    </>
  )
}

export default SidebarRoutes
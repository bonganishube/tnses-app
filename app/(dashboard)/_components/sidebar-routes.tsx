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
    const isBrowsePage = pathname === "/browse";

  return (
    <>
        {isBrowsePage && (
            <div className="hidden md:block">
                <SearchInput />
            </div>
        )}
        <div className="flex gap-4 p-2 ml-auto">
            {isTeacherPage || isCoursePage ? (
                <Link href="/home">
                    <Button size="sm" className="bg-primaryColor">
                        <LogOut className="h-4 w-4"/>
                        Student Mode
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm" className="bg-primaryColor">
                        <LogOut className="h-4 w-4" />
                        Admin Mode
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
"use client"

import { Button } from '@/components/ui/button';
import { useAuth, UserButton } from '@clerk/nextjs'
import { isTeacher } from '@/lib/teacher';
import { Book, Lock, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import SearchInput from './search-input';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const SidebarRoutes = () => {
    const { userId }  = useAuth()
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
                
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button size="sm" className="bg-primaryColor">
                            <Lock className="h-4 w-4"/>
                            Admin Mode
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="p-0">
                        <Link href="/home">
                            <Button size="sm" variant="ghost">
                                <Book className="h-4 w-4"/>
                                Student Mode
                            </Button>
                        </Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : isTeacher(userId) ? (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button size="sm" className="bg-primaryColor">
                            <Book className="h-4 w-4"/>
                            Student Mode
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="p-0">
                        <Link href="/teacher/courses">
                            <Button size="sm" variant="ghost">
                                <Lock className="h-4 w-4"/>
                                Admin Mode
                            </Button>
                        </Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : null}
            <div className="flex items-center active:bg-color-0 active:border-0">
                <UserButton 
                    afterSignOutUrl="/"
                />
            </div>
        </div>
    </>
  )
}

export default SidebarRoutes
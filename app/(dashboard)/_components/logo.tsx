"use client"

import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import LogoImage from "@/public/logo.png";  // Correct image import
import { usePathname } from 'next/navigation';
import React from 'react';

const Logo = () => {
  const { userId } = useAuth();  // userId can be string | null | undefined
  const pathname = usePathname();

  // Check if the user is on a teacher page
  const isTeacherPage = pathname?.startsWith("/teacher");

  // Define the logic to determine if the user is a teacher
  const isTeacher = (userId: string | undefined) => {
    // Add more logic here based on your actual implementation
    return userId && userId.startsWith('teacher');  // Example logic
  };

  // Check that userId is not null or undefined before passing it to isTeacher
  const isNotTeacher = userId && !isTeacher(userId);

  return (
    <div className="flex flex-row items-center gap-2 md:hidden">
      {/* {isNotTeacher && !isTeacherPage && (  // Only render if not a teacher and not on a teacher page */}
        <>
          <div className="aspect-square size-8 justify-center rounded-lg text-sidebar-primary-foreground">
            <Image src={LogoImage} alt="Team logo" className="rounded-[5px]" />
          </div>
          <span className="truncate font-medium font-tertiary text-lg text-secondaryColor">
            Ads
          </span>
        </>
      {/* )} */}
    </div>
  );
}

export default Logo;

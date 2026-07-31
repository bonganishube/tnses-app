import getDashboardCourses from '@/actions/get-dashboard-courses'
import CoursesList from '@/components/courses-list'
import PageHeader from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { CheckCircle, Clock, Compass } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import InfoCard from './_components/info-card'

const Dashboard = async () => {
    const { userId } = await auth()

    if(!userId) {
        return redirect("/");
    }

    const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);
    const allCourses = [...coursesInProgress, ...completedCourses];

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-8">
        <PageHeader
            title="My courses"
            description="Pick up where you left off, or browse the catalogue for something new."
            actions={
                <Link href="/browse">
                    <Button className="gap-2 rounded-full bg-primaryColor text-white hover:bg-primaryColor-600">
                        <Compass className="h-4 w-4" />
                        Browse courses
                    </Button>
                </Link>
            }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            <InfoCard
                icon={Clock}
                label="In progress"
                numberOfItems={coursesInProgress.length}
            />
            <InfoCard
                icon={CheckCircle}
                label="Completed"
                numberOfItems={completedCourses.length}
                variant="success"
            />
        </div>

        <CoursesList
            items={allCourses}
            emptyTitle="You have not enrolled in a course yet"
            emptyDescription="Browse the catalogue to find a programme that fits what you are working towards."
            emptyAction={
                <Link href="/browse">
                    <Button className="gap-2 rounded-full bg-primaryColor text-white hover:bg-primaryColor-600">
                        <Compass className="h-4 w-4" />
                        Browse courses
                    </Button>
                </Link>
            }
        />
    </div>
  )
}

export default Dashboard

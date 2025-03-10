import getDashboardCourses from '@/actions/get-dashboard-courses'
import CoursesList from '@/components/courses-list'
import { auth } from '@clerk/nextjs/server'
import { CheckCircle, Clock } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'
import InfoCard from './_components/info-card'

const Dashboard = async () => {
    const { userId } = await auth()

    if(!userId) {
        return redirect("/");
    }

    const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
        <div className="grid grid-cols sm:grid-cols-2 gap-4 w-full lg:w-2/3">
            <InfoCard 
                icon={Clock}
                label="In Progress"
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
            items={[...coursesInProgress, ...completedCourses]}
        />
    </div>
  )
}

export default Dashboard
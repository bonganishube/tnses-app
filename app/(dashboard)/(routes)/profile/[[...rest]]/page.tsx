import PageHeader from '@/components/page-header'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-6 lg:p-8">
        <PageHeader
            title="Profile"
            description="Manage your account details, email address and password."
        />
        <UserProfile />
    </div>
  )
}

export default Profile

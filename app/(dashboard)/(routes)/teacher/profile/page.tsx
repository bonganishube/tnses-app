import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div className="p-6">
        <UserProfile />
    </div>
  )
}

export default Profile
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div className="p-6 h-full overflow-x-auto mx-auto md:ml-auto">
        <UserProfile />
    </div>
  )
}

export default Profile
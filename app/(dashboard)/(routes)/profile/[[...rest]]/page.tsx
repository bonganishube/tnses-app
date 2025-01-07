import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  return (
    <div className="pt-6 px-4 md:p-6 h-full w-full overflow-x-auto mx-auto md:ml-auto">
        <UserProfile />
    </div>
  )
}

export default Profile
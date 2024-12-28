import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className="h-full flex items-center justify-center overflow-y-auto">
        <SignIn />
    </div>
  )
}

export default page
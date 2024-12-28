import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className="h-full flex md:items-center p-5 justify-center overflow-y-auto">
      <SignUp />
    </div>
  )
}

export default page
import { SignUp } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const page = () => {
  const { userId } = auth();
  const isAuth = !!userId
  if (isAuth) {
    redirect("/panel/home")
  } else {
    return (
      <div className='w-screen h-screen bg-gradient-to-br from-violet-100 to-white flex justify-center items-center'>
        <SignUp />
      </div>
    )
  }
}

export default page

import { SignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  const { userId } = auth();
  const isAuth = !!userId
  if (isAuth) {
    redirect("/panel/home")
  } else {
    return (
      <div className='w-screen h-screen bg-gradient-to-br from-red-100 to-white flex flex-col justify-center items-center'>
        <Image src={"/logo.png"} width={500} height={500} className='w-52 h-52' />
        <SignIn />
      </div>
    )
  }
}

export default page
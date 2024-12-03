
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-br from-red-100 to-white flex flex-col justify-center items-center'>
      <Image src={"/logo.png"} width={500} height={500} className='w-52 h-52' />
      <div className='flex gap-4'>
        <UserButton />
        <p>we'll call you later ,Please wait for a response !!!</p>
      </div>

    </div>
  )
}

export default page
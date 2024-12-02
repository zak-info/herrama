import Image from 'next/image'
import React from 'react'
import i3 from "@/public/images/i3.jpg"
import { Input } from '@nextui-org/react'

const SectionSix = () => {
    return (
        <div className='relative w-full  flex flex-col items-center '>
            <Image src={i3} placeholder='blur' width={1980} height={1080} className="absolute w-full h-full -z-20" />
            <div className=' absolute w-full h-full bg-black/30  -z-10'></div>
            <h1 className='text-4xl font-bold mt-32' >Contacter Nous</h1>
            <div className='w-1/2 px-10 py-16 bg-black/20 backdrop-blur-xl border border-gray-400 rounded-lg mb-32 mt-8'>
                <div className='w-full flex flex-col lg:flex-row gap-6 '>
                    <Input type="text" variant={"underlined"} label="Nom et Prenom" className='text-white' />
                    <Input type="email" variant={"underlined"} label="Email" />
                </div>
                <Input type="text" variant={"underlined"} label="Msg" />
                <div className='w-full flex justify-center'>

                <button className='px-6 py-3 rounded-full border border-white mt-4 text-white text-xl'>Suivre</button>
                </div>
            </div>

        </div>
    )
}

export default SectionSix
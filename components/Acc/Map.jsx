import Image from 'next/image'
import React from 'react'
const Map = () => {
    return (
        <div className='flex flex-col bg-white items-center py-16'>
            <h1 className='text-2xl md:text-4xl text-primary-1 font-bold mt-0'>Trouver Nous</h1>
            <p className='w-5/6 text-md z-10  text-center text-neutral-600 font-light mt-4'>Nous mettons à votre disposition divers moyens pour que vous puissiez facilement nous contacter via notre site web ou nos réseaux sociaux</p>
            <div className='w-full -translate-y-16 md:-translate-y-0 px-24 md:mt-16 flex flex-col lg:flex-row  items-center justify-center'>
                <Image src={"/images/map.png"} width={900} height={500} className=' order-2  w-[900px] h-[500px]  mt-20 rounded-md' />
                <div className='hidden  w-2/3 lg:w-full z-40 p-6  lg:p-12 order-1 lg:order-2 bg-white   lg:-translate-x-20 md:flex flex-col gap-6 border rounded-lg shadow-[0_7px_29px_0_rgba(100,100,111,0.2)]'>
                    <h1 className=' text-base text-center lg:text-start lg:text-lg text-neutral-600 font-semibold'>FIND OUR HEADQURTERS</h1>
                    <p className=' text-lg lg:text-xl whitespace-pre-wrap font-light '>Nous sommes heureux de vous recevoir dans notre siège situé à
                        Khemis EL Khechna.</p>
                    <a href={"https://www.google.com/maps/place/36°39'42.0%22N+3°17'56.0%22E/@36.6618164,3.2982734,19.1z/data=!4m4!3m3!8m2!3d36.661674!4d3.298896?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"} target="_blanck" className=' mt-0 text-green-500 no-underline'>Trouver nous <i class="ri-arrow-right-line text-lg"></i></a>
                </div>

            </div>

        </div>
    )
}

export default Map
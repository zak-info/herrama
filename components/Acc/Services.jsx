import Image from 'next/image'
import React from 'react'

const Services = () => {

    const services = [
        { img: "/images/beauro.jpg", h1: "Alrraid Academy", p: "Expand your knowledge by learning from the best instructors out there" },
        { img: "/images/br2.jpg", h1: "Alrraid Marketplace", p: "Make your dreams come true with our talented architects and home designers" },
        { img: "/images/br3.jpg", h1: "Alrraid Etude", p: "Explore the variety of construction materials through our trusted sellers network" },
        { img: "/images/br4.jpg", h1: "Alrraid Lancer", p: "Discover talented freelancers that can help you with your dream projects" },
    ]
    return (
        <div className='w-full bg-white min-h-[50vh] md:min-h-[60vh]  lg:h-[auto]  pt-12 overflow-x-clip  relative flex flex-col items-center '>
            <h1 className='text-2xl md:text-6xl text-orange-500 underline underline-offset-8  font-extrabold'>Nos Bureaux</h1>
            {/* <p className='w-5/6 md:w-1/2 lg:w-3/4 text-sm md:text-md mt-4 lg:mt-[20px] text-center text-[#2D2D2D] font-light'>We are proud to be part of the architectural, educational, as the commercial industry</p> */}
            <div className='w-3/4 md:w-2/3 lg:w-full mt-8 lg:mt-[50px]  lg:px-20   grid grid-cols-2 gap-x-8 md:gap-x-0 gap-y-8 items-center justify-center lg:flex lg:flex-wrap lg:items-start lg:gap-[62px] lg:justify-center'>
                {
                    services.map((service, index) => (
                        <div key={index} className='lg:w-[270px] xxl:w-[360px] flex flex-col gap-[11px] items-center'>
                            <Image src={service.img} width={300} height={300} className='w-28 h-28 md:w-[168px] md:h-[168px] rounded-full !shadow-[0_0.15rem_1.25rem_#d7d7d7]' />
                            {/* <h1 className='text-center text-md md:text-xl lg:text-[22px] xxl:mt-[23px] font-semibold leading-tight   text-primary-1  uppercase'>{service.h1}</h1>
                            <p className='hidden lg:block font-lato  lg:text-[16px] text-center text-neutral-500 '>{service.p} </p> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
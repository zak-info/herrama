import Image from 'next/image'
import React from 'react'

import p1 from "@/public/images/z1.jpg"
import p2 from "@/public/images/z2.jpg"
import p3 from "@/public/images/z3.jpg"
import p4 from "@/public/images/z4.jpg"
import p5 from "@/public/images/z5.jpg"
import p6 from "@/public/images/z6.jpg"


const Partners = () => {
    return (
        <div className='w-full flex flex-col items-center bg-gradient-to-b from-orange-500 to-orange-400'>
            <h1 className='text-[31px] md:text-[48px] text-primary-1 font-bold text-white  '>Visitez Notre Usine</h1>

            <div x-data="{}" x-init="$nextTick(() => {let ul = $refs.logos;ul.insertAdjacentHTML('afterend', ul.outerHTML);ul.nextSibling.setAttribute('aria-hidden', 'true');})" class="w-full py-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <Image src={p1} placeholder="blur" width={500} height={500} className={`  w-48 h-48 lg:w-[270px] lg:h-[270px]  lg:relative  lg:z-[1] transition-all ease-in-out duration-200 rounded-full`} />
                    </li>
                    <li>
                        <Image src={p2} placeholder="blur" width={500} height={500} className={`  w-48 h-48 lg:w-[270px] lg:h-[270px]  lg:relative  lg:z-[1] transition-all ease-in-out duration-200 rounded-full`} />

                    </li>
                    <li>
                        <Image src={p3} placeholder="blur" width={500} height={500} className={`  w-48 h-48 lg:w-[270px] lg:h-[270px]  lg:relative  lg:z-[1] transition-all ease-in-out duration-200 rounded-full`} />

                    </li>
                    <li>
                        <Image src={p4} placeholder="blur" width={500} height={500} className={`  w-48 h-48 lg:w-[270px] lg:h-[270px]  lg:relative  lg:z-[1] transition-all ease-in-out duration-200 rounded-full`} />

                    </li>
                    <li>
                        <Image src={p5} placeholder="blur" width={500} height={500} className={`  w-48 h-48 lg:w-[270px] lg:h-[270px]  lg:relative  lg:z-[1] transition-all ease-in-out duration-200 rounded-full`} />

                    </li>
                    <li>
                        <Image src={p6} placeholder="blur" width={500} height={500} className={`  w-48 h-48 lg:w-[270px] lg:h-[270px]  lg:relative  lg:z-[1] transition-all ease-in-out duration-200 rounded-full`} />

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Partners
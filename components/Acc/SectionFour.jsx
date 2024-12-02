"use client"


import Image from 'next/image'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"


const SectionFour = ({ img, title, paragraphe, dir, x }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <>
            {
                dir == "ltr" ?
                    <div className={`w-full h-[70vh] flex  `} ref={ref}>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ delay: 0.4 }}
                            className='w-1/2 h-full'>
                            <Image src={img} placeholder='blur' width={1980} height={1080} className='w-full h-full object-cover' />
                        </motion.div>
                        <div className={`w-1/2 h-full p-4 lg:p-20 `}>
                            <h1 className='text-xl lg:text-3xl text-green-500 font-bold'>{title}</h1>
                            <p className='text-sm lg:text-md text-gray-400'>{paragraphe} </p>

                        </div>

                    </div>

                    :
                    <div className={`w-full h-[70vh] flex  `} ref={ref}>
                        <div className={`w-1/2 h-full p-4 lg:p-20 `}>
                            <h1 className='text-xl lg:text-3xl text-green-500 font-bold'>{title}</h1>
                            <p className='text-sm lg:text-md text-gray-400'>{paragraphe} </p>

                        </div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ delay: 0.4 }}
                            className='w-1/2 h-full'>
                            <Image src={img} width={1980} height={1080} className='w-full h-full bg-fill' />
                        </motion.div>


                    </div>

            }
        </>
    )
}

export default SectionFour
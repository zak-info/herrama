"use client"

import Image from "next/image"
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import bg1 from "@/public/images/bg1.png"
const SectionOne = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    // bg-fixed  bg-[url("/images/bg1.png")]
    return (
        <div id="home" className='w-screen h-screen  bg-cover bg-no-repeat  flex md:justify-between  flex-col md:flex-row ' ref={ref}>
        <Image src={bg1} placeholder="blur" priority width={1980} height={1080} className="fixed -z-30 w-full h-full"  />
            <motion.div className="w-full h-full justify-center items-center flex flex-col lg:ms-8  px-4 md:pt-28  "   >
                <div className=" w-4/5 lg:w-1/2 lg:min-h-60  bg-white/50 backdrop-blur-lg rounded-xl p-8 shadow-xl">
                    <p className="text-5xl">👋</p>
                    <p className="text-2xl md:text-3xl font-extrabold arabic-font text-[#436850]">Bienvenue chez  <span className="font-inter">Herrama Cosmetiques</span>!</p>
                    <p className="md:text-xl mt-8  font-light text-[#87A922]">Explorez un monde de beauté naturelle et de soins adaptés à tous les besoins. Chez Herrama Cosmetics, nous croyons en des produits qui révèlent votre éclat intérieur tout en respectant l’environnement.</p>
                </div>
                <div className="w-full flex justify-center  mt-24 ">
                    <Link href={"/login"} className="w-32 py-3 bg-[#436850] border border-[#436850] text-white text-xl hover:text-[#436850] hover:bg-[#edf2f8]  transition-all ease-in-out duration-150  rounded-full shadow-lg hover:shadow-none flex justify-center items-center " > Services</Link>
                    <Link href={"/register"} className="w-32 py-3 ms-4 bg-[#436850] border border-[#436850] text-white text-xl hover:text-[#436850] hover:bg-[#edf2f8]  transition-all ease-in-out duration-150  rounded-full shadow-lg hover:shadow-none flex justify-center items-center " > Payments</Link>

                </div>
            </motion.div>

            <motion.div className="relative flex justify-center   md:justify-start items-center" variants={{ hidden: { opacity: 0, x: -280 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate={mainControls} transition={{ duration: 0.5 }}>
                {/* <Image src={"/andraw.svg"} width={600} height={600} className="z-10 w-72 h-72 md:w-[70vh] md:h-[70vh]" /> */}
                {/* <Devices /> */}
            </motion.div>

        </div>
    )
}

export default SectionOne
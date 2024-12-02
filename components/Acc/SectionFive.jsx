import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'


import p1 from "@/public/images/p1.jpg"
import p2 from "@/public/images/p2.jpg"
import p3 from "@/public/images/p3.jpg"
import p4 from "@/public/images/p4.jpg"
import p5 from "@/public/images/p5.jpg"
import p6 from "@/public/images/p6.jpg"
import p7 from "@/public/images/p7.jpg"

const SectionFive = () => {
    return (
        <div className='w-full min-h-screen bg-[#f8f4f0] flex flex-col items-center py-20'>
            <h1 className=' text-amber-400 text-3xl  font-bold underline underline-offset-8'>Produits</h1>
            <div className='w-full lg:px-32 flex flex-wrap items-center justify-center mt-12 gap-6 '>
               <ProductCard img={p1} />
               <ProductCard img={p2} />
               <ProductCard img={p3} />
               <ProductCard img={p4} />
               <ProductCard img={p5} />
               <ProductCard img={p6} />
               <ProductCard img={p7} />

            </div>


        </div>
    )
}

export default SectionFive
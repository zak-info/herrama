import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'


import p1 from "@/public/images/s1.jpg"
import p2 from "@/public/images/w1.jpg"
import p3 from "@/public/images/wb1.jpg"
import p4 from "@/public/images/b1.jpg"
import p5 from "@/public/images/cl1.jpg"
import p6 from "@/public/images/cb1.jpg"
import p7 from "@/public/images/c1.jpg"
import p8 from "@/public/images/d1.jpeg"
import p9 from "@/public/images/p5.jpg"

const SectionFive = () => {
    return (
        <div className='w-full min-h-screen bg-[#f8f4f0] flex flex-col items-center py-20'>
            <h1 className=' text-amber-400 text-3xl  font-bold underline underline-offset-8'>Produits</h1>
            <div className='w-full lg:px-32 flex flex-wrap items-center justify-center mt-12 gap-6 '>
               <ProductCard qte={48} imgs={[p1,"/images/s2.jpg","/images/s3.jpg"]} title={"Witch Savon 90g"} />
               <ProductCard qte={72} imgs={[p2,"/images/w2.jpg","/images/w3.jpg","/images/w4.jpg","/images/w5.jpg","/images/w6.jpg"]}  title={"Witch Savon 60g"} />
               <ProductCard qte={48} imgs={[p3,"/images/wb2.jpg","/images/wb3.jpg"]} title={"Witch savon 125g"} />
               <ProductCard qte={48} imgs={[p4,"/images/b2.jpg","/images/b3.jpg","/images/b4.jpg"]} title={"Savon Baby Witch"} />
               <ProductCard qte={12} imgs={[p5,"/images/cl2.jpg","/images/cl3.jpg","/images/cl4.jpg","/images/cl5.jpg"]} title={"EAU DE COLOGNE WITCH FRAICHEUR 250 ML"} />
               <ProductCard qte={96} imgs={[p6,"/images/cb2.jpg","/images/cb3.jpg"]} title={"Eau De Toilette Baby Bones 50 ML"} />
               <ProductCard qte={32} imgs={[p9,"/images/p4.jpg"]} title={"EAU DE PARFUM HELLOTRIAMPHE 100 ML"} />
               <ProductCard qte={96} imgs={[p7,"/images/c2.jpg","/images/c3.jpg","/images/c4.jpg","/images/c5.jpg","/images/c6.jpg","/images/c7.jpg","/images/c8.jpg","/images/c9.jpg","/images/c10.jpg"]} title={"EAU DE TOILETTE GANJACOS 50 ML HOMME / FEMME"} />
               <ProductCard qte={"XX"} imgs={[p8,"/images/d2.jpeg","/images/perfume.jpg","/images/m1.jpg","/images/m2.jpg"]} title={"Diversité"} />
            </div>


        </div>
    )
}

export default SectionFive
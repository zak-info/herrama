import Image from 'next/image'
import React from 'react'

import p1 from "@/public/images/cl1.jpg"
import p2 from "@/public/images/d2.jpeg"
import p3 from "@/public/images/p4.jpg"
import p4 from "@/public/images/s1.jpg"


const SectionTow = () => {
    return (
        <div id="home" className='w-screen h-screen bg-white  flex md:justify-between p-8  md:ps-40 md:pt-40  flex-col md:flex-row ' >
            <div className='w-full lg:w-3/5'>
                <h1 className='text-xl lg:text-4xl font-light text-neutral-700 '><span className='font-bold text-3xl lg:text-6xl text-green-500'>Nos Produits</span> , Votre Éclat</h1>
                <p className='text-sm lg:text-md text-neutral-500 mt-6'>Chez Herrama Cosmetics, chaque produit est une promesse de qualité et d’efficacité, élaboré à partir d’ingrédients soigneusement sélectionnés. Nous nous engageons à vous offrir des solutions qui allient innovation, bien-être et respect de la nature.</p>
                <div className='w-full grid grid-cols-2 gap-y-6  mt-16'>
                    <div className='flex gap-6  h-24   '>
                        <span className='w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-500 text-2xl font-bold'>1</span>
                        <div className='h-full flex flex-col gap-4'>
                            <h1 className='text md lg:text-xl font-bold'>Soins du visage</h1>
                            <p className='text-xs lg:text-md text-neutral-500'>Crèmes, sérums et masques.</p>
                        </div>
                    </div>
                    <div className='flex gap-6  h-24   '>
                        {/* <span className='w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-500 text-2xl font-bold'>2</span> */}
                        <Image src={p1} placeholder='blur' width={500} height={500} className='w-16 h-16 object-fill rounded-full' />
                        <div className='h-full flex flex-col gap-4'>
                            <h1 className='text md lg:text-xl font-bold'>Colonei</h1>
                            <p className='text-xs lg:text-md text-neutral-500'>Soins de luxe exclusifs.</p>
                        </div>
                    </div>
                    <div className='flex gap-6  h-24   '>
                        {/* <span className='w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-500 text-2xl font-bold'>3</span> */}
                        <Image src={p3} placeholder='blur' width={500} height={500} className='w-16 h-16 object-fill rounded-full' />

                        <div className='h-full flex flex-col gap-4'>
                            <h1 className='text md lg:text-xl font-bold'>Parfums</h1>
                            <p className='text-xs lg:text-md text-neutral-500'>Fragrances élégantes et uniques.</p>
                        </div>
                    </div>
                    <div className='flex gap-6  h-24   '>
                        <span className='w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-500 text-2xl font-bold'>4</span>
                        <div className='h-full flex flex-col gap-4'>
                            <h1 className='text md lg:text-xl font-bold'>Produits capillaires</h1>
                            <p className='text-xs lg:text-md text-neutral-500'>Shampoings, masques, soins.</p>
                        </div>
                    </div>
                    <div className='flex gap-6  h-24   '>
                        {/* <span className='w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-500 text-2xl font-bold'>5</span> */}
                            <Image src={p2} placeholder='blur' width={500} height={500} className='w-16 h-16 object-fill rounded-full' />
                        <div className='h-full flex flex-col gap-4'>
                            <h1 className='text md lg:text-xl font-bold'>Soins du corps</h1>
                            <p className='text-xs lg:text-md text-neutral-500'>Gommages et hydratants.</p>
                        </div>
                    </div>
                    <div className='flex gap-6  h-24   '>
                        {/* <span className='w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-500 text-2xl font-bold'>6</span> */}
                        <Image src={p4} placeholder='blur' width={500} height={500} className='w-16 h-16 object-fill rounded-full' />
                        <div className='h-full flex flex-col gap-4'>
                            <h1 className='text md lg:text-xl font-bold'>Savons</h1>
                            <p className='text-xs lg:text-md text-neutral-500'>Naturels et doux pour la peau.</p>
                        </div>
                    </div>
                   

                </div>


            </div>
            <div className='hidden lg:block w-full lg:w-3/5 '>
                <Image src={"/images/blob.png"} width={1500} height={1500} className='w-full h-[40vh] translate-x-10' />

            </div>
        </div>
    )
}

export default SectionTow
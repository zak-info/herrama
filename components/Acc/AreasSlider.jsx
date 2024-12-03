"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import '@/styles/swipy.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'next/image';

const AreasSlider = ({ areas }) => {
    return (
        <div className=' w-full flex items-center  min-h-[50vh] md:min-h-[70vh]'>
            <div className='w-full '>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-8">
                    <SwiperSlide >
                        <div className=''>
                            <Image src={areas[0]} placeholder='blur' width={300} height={530} className='w-24 h-48 rounded-xl' />
                        </div>
                    </SwiperSlide>
                    {
                        areas.map((area, index) => (

                            <SwiperSlide key={index}>
                                <div key={index} className=''>
                                    <LazyLoadImage
                                        alt={"comment"}
                                        height={530}
                                        src={areas[index + 1]}
                                        effect="blur"
                                        className="w-32 h-52 rounded-xl"
                                        width={300} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default AreasSlider
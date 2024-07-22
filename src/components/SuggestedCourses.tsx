'use client'
import React from 'react';
import Link from 'next/link';
import Course from './Course';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const SuggestedCourses: React.FC = () => {
    return (
        <div className='mb-96'>
            <div className="my-12 flex flex-row justify-between">
                <div className="flex space-x-2 rtl:space-x-reverse items-center">
                    <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                    <p className="font-bold min-[420px]:text-xl">دوره های پیشنهادی</p>
                </div>
                <Link className='text-[#FF865C] text-center border-[2px] border-[#FF865C] px-1 py-2 min-[420px]:px-2 text-xs min-[420px]:text-base rounded-md' href="#">
                    <span className='rounded-lg border-[1px] me-2 border-[#FF865C] px-1 font-bold'>AI</span>
                    اختصاصی برای شما
                </Link>
            </div>
            <Swiper
                className="mySwiper"
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
                navigation={true}
                breakpoints={{
                    600: {
                        slidesPerView: 2
                    }
                }}
                modules={[Autoplay, Navigation]}
            >
                {[1, 2, 3, 4].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-10/12 mx-auto'>
                            <Course />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default SuggestedCourses;
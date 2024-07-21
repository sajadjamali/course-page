import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import coverA from "../assets/img/course/courseA.png";
import ScheduleIcon from '@mui/icons-material/Schedule';
import teacherA from "../assets/img/course/teacherA.png";

function convertToPersianNumber(number: number): String {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

const Course: React.FC = () => {
    return (
        <div className='w-5/12 mb-40 rounded-md border-2 border-gray-200'>
            <div className="relative aspect-video overflow-hidden">
                <Image src={coverA} fill className="object-cover" alt="دوره ی" />
            </div>
            <div className='p-2'>
                <div className='text-[#8b8a8a] flex justify-between text-sm'>
                    <p>فنی و مهندسی</p>
                    <p>
                        ساعت
                        <ScheduleIcon className='ms-2' />
                    </p>
                </div>
                <p>...1</p>
                <hr className='my-2 h-[1.35px] bg-black' />
                <div className='flex justify-between'>
                    <div className='flex space-x-2 rtl:space-x-reverse'>
                        <Image src={teacherA} width={30} height={50} alt="teacher's avatar" />
                        <Link target="_blank" href="https://linom.org/instructors/12">
                            <p className="text-[#787878]">محمد رجبی</p>
                        </Link>
                    </div>
                    <p className='line-through text-[#313030]'>{convertToPersianNumber(499000)} تومان</p>
                </div>
                <div className='flex justify-between mt-2 text-[#313030]'>
                    <div dir='ltr' className='flex items-center'>
                        <Rating sx={{ color: '#8D90FF' }} value={4} readOnly precision={0.5} />
                    </div>
                    <span className='text-sm ms-2'>بازخورد)</span>
                    <p>{convertToPersianNumber(399000)} تومان</p>
                </div>
            </div>
        </div>
    )
}

export default Course;
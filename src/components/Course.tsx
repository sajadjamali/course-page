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
        <div className='rounded-md border-2 border-gray-200'>
            <div className="relative aspect-video overflow-hidden">
                <Image src={coverA} fill className="object-cover" alt="دوره ی" />
            </div>
            <div className='p-1 text-xs'>
                <div className='text-[#8b8a8a] flex justify-between text-sm'>
                    <p>فنی و مهندسی</p>
                    <p>
                        ساعت
                        <ScheduleIcon className='ms-2' />
                    </p>
                </div>
                <p className='text-[#565554] text-lg'>ریاضی عمومی یک</p>
                <hr className='my-2 h-[1.4px] bg-gray-300' />
                <div className='flex justify-between'>
                    <div className='flex space-x-2 rtl:space-x-reverse'>
                        <Image src={teacherA} width={30} height={50} alt="teacher's avatar" />
                        <Link target="_blank" href="https://linom.org/instructors/12">
                            <p className="text-[#787878]">محمد رجبی</p>
                        </Link>
                    </div>
                    <p className='line-through font-bold text-[#565554]'>{convertToPersianNumber(499000)} تومان</p>
                </div>
                <div className='flex justify-between items-center mt-2 text-[#313030]'>
                    <div dir='ltr' className='flex space-x-1 items-center'>
                        <span className='text-[#A5A5A5]'>(100 بازخورد)</span>
                        <Rating sx={{ color: '#8D90FF' }} value={4} size='small' readOnly precision={0.5} />
                    </div>
                    <p className='font-bold text-[#565554]'>{convertToPersianNumber(399000)} تومان</p>
                </div>
            </div>
        </div>
    )
}

export default Course;
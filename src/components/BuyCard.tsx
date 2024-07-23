import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { convertToPersianNumber } from '@/utils';
import cover from "../assets/img/course/cover.png";
import ScheduleIcon from '@mui/icons-material/Schedule';
import teacherA from "../assets/img/course/teacherA.png";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const BuyCard: React.FC = () => {
    return (
        <section className='rounded-lg mx-auto w-72 p-2 shadow-xl sticky top-5 bg-slate-100'>
            <div className="relative w-full rounded-lg aspect-video overflow-hidden">
                <Image src={cover} fill className="object-cover" alt="course's cover" />
            </div>
            <div className='text-[#8b8a8a] text-sm mt-4 flex justify-between'>
                <p>فنی و مهندسی</p>
                <div dir='ltr'>
                    <Rating sx={{ color: '#8D90FF' }} value={4} size='small' readOnly precision={0.5} />
                </div>
            </div>
            <p className='text-lg font-bold'>ریاضی عمومی {convertToPersianNumber(1)}</p>
            <hr className='my-4 h-[1.4px] bg-gray-300' />
            <div className='flex space-x-3 rtl:space-x-reverse'>
                <Image src={teacherA} width={30} height={50} alt="teacher's avatar" />
                <Link target="_blank" href="https://linom.org/instructors/12">
                    <p className="text-[#787878]">امیر ساکی</p>
                </Link>
            </div>
            <div className='text-[#8b8a8a] my-4'>
                <ScheduleIcon fontSize='large' className='me-2' />
                {convertToPersianNumber(10)}ساعت
            </div>
            <div className='flex items-center text-zinc-900 space-x-2 rtl:space-x-reverse font-bold text-xl'>
                <AttachMoneyIcon fontSize='large' className='text-[#8b8a8a]' />
                <p className='line-through decoration-red-600 decoration-2'>{convertToPersianNumber(499000)}</p>
                <p>{convertToPersianNumber(399000)} تومان</p>
            </div>
            <button className='bg-[#FF865C] w-full font-bold rounded-lg py-3 mt-4 text-white'>افزودن به سبد خرید</button>
        </section>
    )
}

export default BuyCard;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { convertToPersianNumber } from '@/utils';
import cover from "../assets/img/course/cover.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import backgroundImage from '../assets/img/course/backgroundImage.png';

const Introduction: React.FC = () => {
    return (
        <div>
            <nav className='text-[#646363] text-sm space-x-2 rtl:space-x-reverse min-[600px]:hidden'>
                <Link href="#" className='hover:text-black'>دوره‌ها
                    <ArrowBackIosIcon fontSize='small' />
                </Link>
                <Link href="#" className='hover:text-black'>فنی و مهندسی
                    <ArrowBackIosIcon fontSize='small' />
                </Link>
                <span>ریاضی عمومی 1</span>
            </nav>

            <div className="relative aspect-video overflow-hidden my-6 rounded-lg min-[960px]:hidden">
                <Image src={cover} fill className="object-cover" alt="course's cover" />
            </div>
            <div
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${backgroundImage.src})`
                }}
                className="xl:w-10/12 2xl:w-7/12 mx-auto h-64 my-6 overflow-hidden rounded-lg hidden min-[960px]:block"
            >
                <div className='p-8 introduction-cover text-white w-full h-full'>
                    <nav className='text-xs space-x-2 rtl:space-x-reverse'>
                        <Link href="#" className='hover:text-black'>دوره‌ها
                            <ArrowBackIosIcon fontSize='small' />
                        </Link>
                        <Link href="#" className='hover:text-black'>فنی و مهندسی
                            <ArrowBackIosIcon fontSize='small' />
                        </Link>
                        <span>ریاضی عمومی 1</span>
                    </nav>
                    <p className='font-black mt-4 text-2xl'>ریاضی عمومی {convertToPersianNumber(1)}</p>
                    <div dir='ltr' className='mt-2 flex justify-end'>
                        <p className='me-2 text-sm'>
                            ( {convertToPersianNumber(124)} بازخورد )
                        </p>
                        <Rating sx={{ color: '#8D90FF' }}
                            emptyIcon={<StarIcon style={{ color: "white" }} fontSize="inherit" />}
                            value={3.5} size='small' readOnly precision={0.5} />
                    </div>
                    <p className='mt-3 w-8/12 text-sm leading-7'>
                        مشکل مهم دانشجوها موقع روبرو شدن با ریاضی عمومی1  انتگرال هست که این مبحث جداگانه به طور کامل بررسی میشه.البته تو این آموزش همه مفاهیم به روش میکرولرنینگ تدریس شدن و با مثال‌های کاربردی که حل میشه شما به درک کاملی از تمامی سرفصل‌ها میرسین.
                    </p>
                </div>
            </div>

            <div className='min-[960px]:hidden'>
                <p className='font-bold text-2xl'>ریاضی عمومی {convertToPersianNumber(1)}</p>
                <p className='mt-2 leading-6 text-sm text-[#666464]'>
                    مشکل مهم دانشجوها موقع روبرو شدن با ریاضی عمومی1  انتگرال هست که این مبحث جداگانه به طور کامل بررسی میشه.البته تو این آموزش همه مفاهیم به روش میکرولرنینگ تدریس شدن و با مثال‌های کاربردی که حل میشه شما به درک کاملی از تمامی سرفصل‌ها میرسین.
                </p>
                <hr className='mt-3 h-[1.9px] bg-gray-300' />
            </div>
        </div>
    )
}

export default Introduction;
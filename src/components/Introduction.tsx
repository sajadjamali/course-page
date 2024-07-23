import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                // style={{
                //     width: "100px",
                //     height: "100px",
                //     backgroundSize: "100% 100%",
                //     border: "2px solid red",
                //     backgroundImage: require('url(../assets/img/course/backgroundImage.png)')
                // }}
                className="relative xl:w-10/12 2xl:w-7/12 mx-auto h-64 my-6 overflow-hidden rounded-lg hidden min-[960px]:block"
            >
                <Image src={backgroundImage} fill className="object-cover" alt="course's cover" />
            </div>

            <div className='min-[960px]:hidden'>
                <p className='font-bold text-3xl'>ریاضی عمومی {convertToPersianNumber(1)}</p>
                <p className='mt-2 leading-6 text-sm text-[#666464]'>کامل بررسی میشه.البته تو این آموزش همه مفاهیم به روش میکرولرنینگ تدریس شدن و با مثال‌های
                    کاربردی که حل میشه شما به درک کاملی از تمامی سرفصل‌ها میرسین.
                    کاربردی که حل میشه شما به درک کاملی از تمامی سرفصل‌ها میرسین.
                </p>
                <hr className='mt-2 h-[1.9px] bg-gray-300' />
            </div>
        </div>
    )
}

export default Introduction;
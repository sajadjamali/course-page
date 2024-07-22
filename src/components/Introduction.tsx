import React from 'react';
import Image from 'next/image';
import backgroundImage from '../assets/img/course/backgroundImage.png';
import cover from "../assets/img/course/cover.png";
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
            <div className="relative w-full h-72 overflow-hidden rounded-lg hidden min-[960px]:block">
                <Image src={backgroundImage} fill className="object-contain" alt="course's cover" />
            </div>
        </div>
    )
}

export default Introduction;
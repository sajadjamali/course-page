'use client'
import React from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { convertToPersianNumber } from '@/utils';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#e2e8f0"
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#FF865C"
    },
}));

const Score: React.FC = () => {
    return (
        <div className='my-16 pb-96'>
            <section className="flex space-x-2 rtl:space-x-reverse items-center">
                <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                <p className="font-bold min-[420px]:text-xl">امتیاز این آموزش</p>
            </section>
            <section className='mt-10 flex flex-col min-[600px]:flex-row min-[600px]:justify-between'>
                <div className='flex justify-between items-center text-[#565554]'>
                    <p className='text-[#FF865C] font-bold text-4xl'>{convertToPersianNumber(3.7)}</p>
                    <p>{convertToPersianNumber(122)}بازخورد</p>
                    <div dir='ltr' className='pt-2'>
                        <Rating sx={{ color: '#8D90FF' }} value={3.5} readOnly precision={0.5} />
                    </div>
                </div>
                <section className='mt-3 space-y-5'>
                    <div className='flex justify-between items-center space-x-2 rtl:space-x-reverse'>
                        <BorderLinearProgress className='w-full' variant="determinate" value={50} />
                        <div dir='ltr' className='flex items-center text-xs'>
                            <Rating size='small' sx={{ color: '#8D90FF' }} value={3.5} readOnly precision={0.5} />
                            <span className='text-[#000000DE]'>43%</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center space-x-2 rtl:space-x-reverse'>
                        <BorderLinearProgress className='w-full' variant="determinate" value={50} />
                        <div dir='ltr' className='flex items-center text-xs'>
                            <Rating size='small' sx={{ color: '#8D90FF' }} value={3.5} readOnly precision={0.5} />
                            <span className='text-[#000000DE]'>43%</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center space-x-2 rtl:space-x-reverse'>
                        <BorderLinearProgress className='w-full' variant="determinate" value={50} />
                        <div dir='ltr' className='flex items-center text-xs'>
                            <Rating size='small' sx={{ color: '#8D90FF' }} value={3.5} readOnly precision={0.5} />
                            <span className='text-[#000000DE]'>43%</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center space-x-2 rtl:space-x-reverse'>
                        <BorderLinearProgress className='w-full' variant="determinate" value={50} />
                        <div dir='ltr' className='flex items-center text-xs'>
                            <Rating size='small' sx={{ color: '#8D90FF' }} value={3.5} readOnly precision={0.5} />
                            <span className='text-[#000000DE]'>43%</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center space-x-2 rtl:space-x-reverse'>
                        <BorderLinearProgress className='w-full' variant="determinate" value={50} />
                        <div dir='ltr' className='flex items-center text-xs'>
                            <Rating size='small' sx={{ color: '#8D90FF' }} value={3.5} readOnly precision={0.5} />
                            <span className='text-[#000000DE]'>43%</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Score;
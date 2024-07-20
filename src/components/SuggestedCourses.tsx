import Link from 'next/link';
import React from 'react';

const SuggestedCourses: React.FC = () => {
    return (
        <div className='mb-20'>
            <div className="mt-16 flex flex-col space-y-7 min-[420px]:space-y-0 min-[420px]:flex-row justify-between">
                <div className="flex space-x-4 rtl:space-x-reverse items-center">
                    <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                    <p className="font-bold text-xl">دوره های پیشنهادی</p>
                </div>
                <Link className='text-[#FF865C] text-center border-[2px] border-[#FF865C] p-2 rounded-md' href="#">
                    <span className='rounded-lg border-[1px] me-2 border-[#FF865C]  px-1 font-bold'>AI</span>
                    اختصاصی برای شما
                </Link>
            </div>
        </div>
    )
}

export default SuggestedCourses;
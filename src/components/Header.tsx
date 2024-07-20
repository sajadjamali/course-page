import React from "react";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header: React.FC = () => {
    return (
        <div className="flex space-y-7 sm:space-x-5 rtl:space-x-reverse sm:space-y-0 flex-col sm:flex-row sm:justify-between items-center py-10">
            <section className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <Link href="#" className="flex justify-center py-2 items-center px-2 text-white bg-[#FF865C] rounded-lg">
                    <KeyboardArrowDownIcon />
                    <p className="text-center">دوره های آموزشی</p>
                </Link>
                <div className="relative w-72">
                    <SearchIcon className="text-sky-600 absolute right-3 top-2" />
                    <input dir="rtl" type="text" placeholder="چی دوست داری یاد بگیری؟" className="bg-gray-200 p-2 ps-10 rounded-full w-full" />
                </div>
            </section>

            <section className="flex items-center space-x-4 rtl:space-x-reverse">
                <Link href="#" className="border-[1px] rounded-full border-gray-400 p-2"><ShoppingCartIcon fontSize="medium" className="text-blue-700" /></Link>
                <div className="text-[#565554] border-[1px] rounded-lg border-gray-400 flex items-center">
                    <Link href="#" className='py-2 px-3 hover:text-black hover:scale-105'>
                        <p>ورود</p>
                    </Link>
                    <span className="font-bold">/</span>
                    <Link href="#" className='py-2 px-3 hover:text-black hover:scale-105'>
                        <p>ثبت نام</p>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default Header;
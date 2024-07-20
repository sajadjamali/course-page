import React from "react";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header: React.FC = () => {
    return (
        <div className="flex space-y-7 flex-col items-center justify-between py-10">
            <section className="flex items-center space-x-5">
                <div className="text-[#565554] border-[1px] rounded-lg border-gray-400 flex items-center">
                    <Link href="#" className='py-2 px-3 hover:text-black hover:scale-105'>
                        <p>ثبت نام</p>
                    </Link>
                    <span className="font-bold">/</span>
                    <Link href="#" className='py-2 px-3 hover:text-black hover:scale-105'>
                        <p>ورود</p>
                    </Link>
                </div>
                <Link href="#" className="border-[1px] rounded-full border-gray-400 p-2"><ShoppingCartIcon fontSize="medium" className="text-blue-700" /></Link>
            </section>
            <section className="flex flex-col justify-center space-y-5 space-x-5">
                <div className="relative w-72">
                    <SearchIcon className="text-sky-600 absolute right-3 top-2" />
                    <input dir="rtl" type="text" placeholder="چی دوست داری یاد بگیری؟" className="bg-gray-200 p-2 ps-10 rounded-full w-full" />
                </div>
                <Link href="#" className="flex justify-center py-2 items-center px-3 text-white bg-[#FF865C] rounded-lg">
                    <p>دوره های آموزشی</p>
                    <KeyboardArrowDownIcon />
                </Link>
            </section>
        </div>
    )
}

export default Header;
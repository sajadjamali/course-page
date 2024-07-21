import React from "react";
import Link from "next/link";
import Image from "next/image";
import DoneIcon from '@mui/icons-material/Done';
import teacher from "../assets/img/course/teacher.png";

const Properties: React.FC = () => {
    return (
        <>
            <section>
                <div>
                    <div className="flex space-x-4 rtl:space-x-reverse items-center">
                        <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                        <p className="font-bold text-xl">ویژگی های برجسته‌ی این آموزش</p>
                    </div>
                </div>

                <div className="text-[#565554] p-10 rounded-lg flex mt-10 border-[1px] border-[#8D90FF]">
                    <ul className="w-6/12 space-y-5">
                        <li className="flex items-center space-x-4 rtl:space-x-reverse">
                            <DoneIcon fontSize="large" className="text-[#8D90FF]" />
                            <p>ساعت در صورت</p>
                        </li>
                        <li className="flex items-center space-x-4 rtl:space-x-reverse">
                            <DoneIcon fontSize="large" className="text-[#8D90FF]" />
                            <p>عدم رضایت</p>
                        </li>
                        <li className="flex items-center space-x-4 rtl:space-x-reverse">
                            <DoneIcon fontSize="large" className="text-[#8D90FF]" />
                            <p>حل نمونه سوالات کاربردی</p>
                        </li>
                    </ul>

                    <ul className="w-6/12 space-y-5">
                        <li className="flex items-center space-x-4 rtl:space-x-reverse">
                            <DoneIcon fontSize="large" className="text-[#8D90FF]" />
                            <p>ارزیابی با حل سوالات امتحانی</p>
                        </li>
                        <li className="flex items-center space-x-4 rtl:space-x-reverse">
                            <DoneIcon fontSize="large" className="text-[#8D90FF]" />
                            <p>% مبلغ به کیف پول</p>
                        </li>
                        <li className="flex items-center space-x-4 rtl:space-x-reverse">
                            <DoneIcon fontSize="large" className="text-[#8D90FF]" />
                            <p>پاسخ گویی در سریع ترین زمان ممکن</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="mt-16">
                    <div className="flex space-x-4 rtl:space-x-reverse items-center">
                        <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                        <p className="font-bold text-xl">مدرس دوره</p>
                    </div>
                </div>

                <div className="flex mt-12 ms-4 items-center space-x-3 rtl:space-x-reverse">
                    <Image src={teacher} width={70} height={50} alt="teacher's avatar" />
                    <Link target="_blank" href="https://linom.org/instructors/8">
                        <p className="font-bold text-lg">امیر ساکی</p>
                        <p className="text-gray-600 text-sm">دکترای ریاضیات محض از دانشگاه امیر کبیر</p>
                    </Link>
                </div>

                <div className="text-[#000000DE] ms-4 mt-7">
                    از دور منطقی و جدی، از نزدیک شوخ‌طبع و طناز. لحظاتی وجود دارن که هنر، ادبیات و فسلفه رو به ریاضیات ترجیح میدم؛ اما در کل، نشونه‌هایی -افسانه‌ای-  از «عشق» رو می‌شه حول عواطف بی‌قید و شرط من به ریاضیات رصد کرد.
                </div>

            </section>

        </>
    )
}

export default Properties;
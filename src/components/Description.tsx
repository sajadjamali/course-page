'use client'
import React, { useState } from "react";
import { getLessText } from "@/utils";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const description = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."

const Description: React.FC = () => {

    const [isShowMore, setIsShowMore] = useState<boolean>(false);

    return (
        <div className='mt-7 mb-10'>
            <div className="flex space-x-4 rtl:space-x-reverse items-center">
                <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                <p className="font-bold text-xl">این دوره چه کمکی به من میکنه؟</p>
            </div>
            <p className='mt-7 text-[#565554] leading-7 text-justify'>
                {
                    isShowMore ? description : getLessText(description)
                }
            </p>
            <button className="text-[#7b7feb] mt-4 text-lg font-bold" onClick={() => setIsShowMore(x => !x)}>
                {
                    isShowMore ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />
                }
                {
                    isShowMore ? "میخوام کمتر بدونم" : "میخوام بیشتر بدونم"
                }
            </button>
        </div>
    )
}

export default Description;
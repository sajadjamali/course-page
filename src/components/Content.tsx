import React from "react";
import Image from "next/image";
import cover from "../assets/img/course/cover.png";
import AccordionContent from "@/components/AccordionContent";

const Content: React.FC = () => {
    return (
        <div>
            <section>
                <div className="mt-16">
                    <div className="flex space-x-4 rtl:space-x-reverse items-center">
                        <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                        <p className="font-bold text-xl">این دوره چی به من یاد میده؟</p>
                    </div>
                </div>
                <div className="relative w-full aspect-video overflow-hidden mt-10">
                    <Image src={cover} fill className="object-cover" alt="course's cover" />
                </div>
            </section>

            <section>
                <div className="mt-16">
                    <div className="flex space-x-4 rtl:space-x-reverse items-center">
                        <div className="w-[3px] h-8 bg-[#FF865C]"></div>
                        <p className="font-bold text-xl">محتوای دوره</p>
                    </div>
                </div>
                <AccordionContent />
            </section>


        </div>
    )
}

export default Content;
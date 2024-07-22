import React from 'react';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const AccordionContent: React.FC = () => {
  return (
    <div className='mt-10 space-y-4 w-full'>
      <Accordion defaultExpanded>
        <AccordionSummary
          className='rounded-md'
        >
          <div className='flex w-full text-sm items-center justify-between'>
            <div className='flex'>
              <ExpandMoreIcon fontSize='large' className='text-[#FF865C] text-5xl' />
              <p className='mt-3 font-bold text-[#000000DE]'>بخش اول:</p>
              <span className='mt-3 ms-1'>اعداد مختلط</span>
            </div>
            <p className='text-[#696dec]'>بخش رایگان</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='pb-5 flex flex-col space-y-8 justify-center md:mx-10 text-xs min-[460px]:text-sm sm:text-base'>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>1</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>2</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>3</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className='rounded-md'
        >
          <div className='flex w-full text-sm items-center justify-between'>
            <div className='flex'>
              <ExpandMoreIcon fontSize='large' className='text-[#FF865C] text-5xl' />
              <p className='mt-3 font-bold text-[#000000DE]'>بخش دوم:</p>
              <span className='mt-3 ms-1'>حد و پیوستگی توابع</span>
            </div>
            <p className='text-[#000000DE]'>ویدیو</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pb-5 flex flex-col space-y-8 justify-center md:mx-10 text-xs min-[460px]:text-sm sm:text-base'>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>1</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>2</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>3</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className='rounded-md'
        >
          <div className='flex w-full text-sm items-center justify-between'>
            <div className='flex'>
              <ExpandMoreIcon fontSize='large' className='text-[#FF865C] text-5xl' />
              <p className='mt-3 font-bold text-[#000000DE]'>بخش دوم:</p>
              <span className='mt-3 ms-1'>مشتق توابع</span>
            </div>
            <p className='text-[#000000DE]'>ویدیو</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pb-5 flex flex-col space-y-8 justify-center md:mx-10 text-xs min-[460px]:text-sm sm:text-base'>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>1</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>2</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
            <li className='hover:text-black text-[#656565]'>
              <Link href="#" className='flex justify-between'>
                <p>
                  <span className='border-[3px] border-dashed border-[#FF865C] px-2 py-1 min-[420px]:px-4 min-[420px]:py-2 rounded-full me-1 min-[420px]:me-3'>3</span>
                  مفاهیم اولیه در اعداد مختلط
                </p>
                <div className='flex'>
                  <div className='me-2'>آزمونک: ___</div>
                  <div className='h-8 w-[1px] bg-gray-800'></div>
                  <div className='ms-2'>
                    دقیقه
                    <ScheduleIcon className='ms-2' />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionContent;
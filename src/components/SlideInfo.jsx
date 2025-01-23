/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
import { IoMdBookmark } from 'react-icons/io';
import OtherInfo from './OtherInfo.jsx';

export default function SlideInfo({transitionData, currentSlideData}) {
  return (
    <>
        <motion.span layout className='mb-2 h-1 w-5 rounded-full bg-white'/>
        <OtherInfo data={transitionData ? transitionData.data : currentSlideData.data}/>
        <motion.div layout className='mt-5 flex items-center gap-3'>
            <button className='flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs transition-duration-300 ease-in-out hover:opacity-80'>
                <IoMdBookmark className='text-xl'/>
            </button>
            <button className='w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition-ease-in-out hover:bg-white hover:text-black'>
                DISCOVER LOCATION
            </button>
        </motion.div>
    </>
  )
}

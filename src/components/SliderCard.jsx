/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
export default function SliderCard({data}) {
  return (
    <motion.div
        className='relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[250px]'
        layout
        initial={{scale:0.8,opacity:0}}
        animate={{scale:1,opacity:1,transition:{duration:0.4}}}
        exit={{scale:0.8,opacity:0,transition:{type:'spring',damping:20, stiffness:100}}}
        >
        <motion.img
            layoutId={data.img}
            alt='Transition Image'
            src={data.img}
            className='absolute h-full w-full rounded-2xl object-cover brightness-75'
        />
        <motion.div className='absolute z-10 flex h-full items-end p-4'>
            
        </motion.div>
    </motion.div>
  )
}

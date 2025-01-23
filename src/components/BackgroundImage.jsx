/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'motion/react';

export default function BackgroundImage({transitionData,currentSlideData}) {
  return (
    <>
    {/*Background Transition Animation*/}
        {transitionData && (
            <motion.img
                key={transitionData.img}
                layoutId={transitionData.img}
                alt={'Transition Image'}
                transition={{opacity:{ease:"linear"}, layout:{duration:0.6}}}
                className='absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50'
                src={transitionData.img}
            />
        )}
        {/*Background Image*/}
        <motion.img
            alt={'Current Slide Image'}
            key={currentSlideData.data.img+'transition'}
            src={currentSlideData.data.img}
            className='absolute left-0 top-0 h-full w-full object-cover brightness-50'/>
    </>
  )
}

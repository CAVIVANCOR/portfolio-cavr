/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
const item={
    hidden:{
        y:"100%",
        transition:{ease:[0.455,0.03,0.515,0.955],duration:0.85},
    },
    visible:{
        y:0,
        transition:{ease:[0.455,0.03,0.515,0.955],duration:0.75},
    },
};
export default function OtherInfo({data}) {
  return (
    <motion.div>
        <AnimatedText className="spacing overflow-hidden text-[#D5D5D6]" data={data?.location}/>
        <AnimatedText className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]" data={data?.title}/>
        <AnimatedText className="text-xs text-[#D5D5D6]" data={data?.description}/>
    </motion.div>
  )
};

const AnimatedText=({data,className})=>{
    return(
        <span style={{overflow:"hidden", display:"inline-block"}}>
            <motion.p className={`${className}`} variants={item} key={data}>{data}</motion.p>
        </span>
    );
};

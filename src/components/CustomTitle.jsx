/* eslint-disable react/prop-types */
import {motion, useInView} from 'motion/react';
import {useRef} from 'react';
export default function CustomTitle({children}) {
    const ref=useRef(null);
    const isInView=useInView(ref,{triggerOnce:true, threshold:0.5});
  return (
    <motion.h1
    ref={ref}
    initial={{y:'250%'}} 
    animate={isInView?{y:20}:{}}
    transition={{ease:[0.42,0,0.58,1],duration:1}}
    className='font-bold text-3xl md:text-5xl lg:text-6xl text-white text-center mt-32'
    >{children}</motion.h1>
  )
};

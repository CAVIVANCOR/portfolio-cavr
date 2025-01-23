import { motion } from 'motion/react';
import logoCerebro from '../assets/logoCerebro13.png';
import {zoomInVariants} from './data/animation.js';
export default function Footer() {
    const sentence = "All Rights Reserved";
    const letters = sentence.split("");
    const variants = {
        hidden: { opacity: 0, y: 10},
        visible: { opacity: 1, y: 0},
    }
  return (
    <footer className='relative z-10 text-white border-t-2 border-t-white mt-20'>
        <div className='container p-4 flex justify-items-center items-center'>
            <div className='flex ml-1'>
                            <motion.img 
                                src={logoCerebro} 
                                alt={'Logo'} 
                                className="w-20 rounded-full"
                                initial="hidden"
                                whileInView="visible"
                                variants={zoomInVariants}
                                whileHover={{ scale: 1.4, transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
                            />
            </div>
            <nav className='flex ml-4'>
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`inline-block ${letter === " " ? "mr-1" : "mr-0"} font-extralight`}
                    >
                        {letter}
                    </motion.span>
                ))}
            </nav>
        </div>
    </footer>
  )
}

/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { motion, AnimatePresence } from "motion/react";
import CustomTitle from './CustomTitle.jsx';
import {projects} from './data/config.js';


export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length); 
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex===0 ? projects.length-1 : prevIndex-1);
    };
    return (
    <section className='relative mt-40' id='work'>
        <CustomTitle><span>Mi Trabajo</span></CustomTitle>
        <article className='relative flex h-full justify-center intems-center w-full p-4 mt-10'>
            <nav>
                <button onClick={prevSlide} className='absolute left-1 lg:left-4  z-10 hover:scale-105'>
                    <img src='https://img.icons8.com/sf-black/100/FFC107/circled-chevron-left.png' alt='circle-chevron-left' width={100} height={100}/>
                </button>
            </nav>
            <article className='relative w-full h-screen flex items-center justify-center'>
                <AnimatePresence initial={false}>
                    {projects.map((project,index)=>index === currentIndex && (
                        <motion.article key={project.id}
                            initial={{opacity:0, scale:0.8, x:100}}
                            animate={{opacity:1, scale:1, x:0, rotateY:0}}
                            exit={{opacity:0, scale:0.8, x:-100}}
                            transition={{duration:0.6, type:'spring', bounce:0.3}}
                            className='absolute w-[85%] h-full p-6 border border-primary bg-transparent rounded-3xl text-white'
                            style={{perspective:1000}}
                            >
                                <img src={project.imgUrl} alt={project.title} className='w-full h-[300px] lg:h-full object-contain rounded-t-lg mb-8'/>
                                <h2 className='uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>{project.title}</h2>
                                <p className='font-light mt-2'>{project.description}</p>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </article>
            <nav>
                <button onClick={nextSlide} className='absolute right-1 lg:right-4 z-10 hover:scale-105'>
                    <img src='https://img.icons8.com/sf-black/100/FFC107/circled-chevron-right.png' alt='circle-chevron-right' width={100} height={100}/>
                </button>
            </nav>
        </article>
    </section>    
    )
};
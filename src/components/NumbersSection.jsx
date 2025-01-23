/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";
import {numbers} from './data/config';

export default function NumbersSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry])=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.1}
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return()=>{
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); 
            }
        };
    }, []);
    return (
        <section className="mx-auto w-full relative text-white m-0 flex justify-center 2xl:mt-2">
            <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block'>
            </header>
            <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block'>
            </header>
            <motion.section
                ref={sectionRef}
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease:"easeOut"}}
                viewport={{once:true, amount:0.5}}
                className="relative z-1 mx-auto w-11/12 lg:mx-0 p-5 sm:p-6 sm:py-4 rounded-3xl border border-primary bg-[#ffffff29] shadow-lg 
                divide-x divide-primary grid grid-cols-4 md:grid-cols-4 gap-2 lg:gap-12"
                >
                    {numbers.map((item)=>(
                        <article key={item.id} className="text-center">
                            <header>
                                <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl">
                                    +{isVisible && (
                                        <CountUp
                                            start={0}
                                            end={item.number}
                                            duration={7.5}
                                            separator=","
                                        />
                                    )}
                                </h2>
                            </header>
                            <p className="mx-1 mt-1 font-extralight text-xs md:text-xl">{item.title}</p>
                        </article>
                    ))}
            </motion.section>
        </section>
    )
}
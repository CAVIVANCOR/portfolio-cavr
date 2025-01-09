import { motion } from 'motion/react';
import logoCerebro from '../assets/logoCerebro13.png';

export default function Footer() {
    const sentence = "Todos los derechos reservados.";
    const letters = sentence.split("");
    const variants = {
        hidden: { opacity: 0, y: 10},
        visible: { opacity: 1, y: 0},
    }
  return (
    <footer className='relative z-10 text-white border-t-2 border-t-white mt-20'>
        <div className='container p-8 flex justify-between items-center'>
            <div className='flex ml-2'>
                            <motion.img 
                                src={logoCerebro} 
                                alt={'Logo'} 
                                className="w-20 rounded-full"
                                whileHover={{ scale: 1.1, transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' } }}
                            />
            </div>
            <nav className='flex ml-2'>
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={variants}
                        initial="hidden"
                        whileInView={"visible"}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`inline-block ${letter === " " ? "mr-4" : "mr-1"}`}
                    >
                        {letter}
                    </motion.span>
                ))}
            </nav>
        </div>
    </footer>
  )
}

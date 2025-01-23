import { useEffect, useState } from 'react';
import { useAnimate, stagger, motion } from 'motion/react'; // Importa motion para usar motion.path
import logo13 from '../assets/logoredondoGrande.png';
import {zoomInVariants} from './data/animation.js';
const Path = (props) => (
    <path 
        fill='transparent' 
        strokeWidth='3' 
        stroke='white' 
        strokeLinecap='round' 
        {...props}
    />
);

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    'nav', 
                    {transform:'translateX(0%)'}, 
                    {ease:[0.08,0.65,0.53,0.96],duration:0.6}
                ],
                [
                    'li', 
                    {transform:'scale(1)',opacity:1,filter:'blur(0px)'}, 
                    {delay:stagger(0.05),at:'-0.1'}
                ],
            ]
            : [
                [
                    'li', 
                    {transform:'scale(0.5)',opacity:0,filter:'blur(10px)'}, 
                    {delay:stagger(0.05,{from:'last'}),at:'<'}
                ],
                [
                    'nav', 
                    {transform:'translateX(-100%)'}, 
                    {at:'-0.1'}],
            ];
            //animate path and menu
        animate([
            [
                'path.top', 
                {d:isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}, 
                {at: '<' }
            ],
            [
                'path.middle', 
                {opacity:isOpen ? 0:1}, 
                {at:'<' }
            ],
            [
                'path.bottom', 
                {d:isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}, 
                {at:'<'}
            ],
            ...menuAnimations
        ]);
    }, [isOpen, animate]);
    

    const handleNavItemClick = (sectionId) => {
        setIsOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        })
    };

    const NavItems = [
        { id: 'services', text: 'Lo que Ofrezco' },
        { id: 'skills', text: 'Mis Habilidades' },
        { id: 'experiencie', text: 'Educación & Experiencia' },
        { id: 'work', text: 'Mi Trabajo' },
        { id: 'contact', text: 'Contáctame' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full flex justify-between px-2 md:px-8 py-3 z-50">
            <div ref={scope} className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-4 z-40 left-1 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary 
                    flex items-center justify-center"
                >
                    <svg width={23} height={18} viewBox="0 0 23 18">
                        <Path d="M 2 2.5 L 20 2.5" className="top" />
                        <Path d="M 2 9.423 L 20 9.423" opacity={1} className="middle" />
                        <Path d="M 2 16.346 L 20 16.346" className="bottom" />
                    </svg>
                </button>
                <nav className={`fixed top-0 left-0 h-full w-72 z-30 flex items-center bg-gradient-to-br from-primary
                                to-secondary transform 
                                ${
                                    isOpen ? 'translate-x-0' : '-translate-x-full'
                                } transition-transform duration-300
                    `}>
                    <ul className="flex flex-col p-6">
                        {NavItems.map((item) => (
                            <li key={item.id} className="text-white text-3xl lg:text-4xl md:text-3xl font-bold mt-10">
                                <a 
                                href={`#${item.id}`}
                                onClick={() => handleNavItemClick(item.id)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <motion.img 
                src={logo13} 
                alt={'Logo'} 
                className="w-20 mt-2 mr-0"
                initial="hidden"
                whileInView="visible"
                variants={zoomInVariants}
                whileHover={{ scale: 1.5, transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
            />
        </div>
    );
}

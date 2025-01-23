/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {AnimatePresence, motion} from 'motion/react';
import {services} from './data/config.js';
import { useState } from 'react';
import BackgroundImage from './BackgroundImage.jsx';
import SlideInfo from './SlideInfo.jsx';
export default function ServicesCarrusel() {
    const initData = services[0];
    const [data, setData] = useState(services.slice(1));
    const [transition, setTransition] = useState(services[0]);
    const [currentSlideData, setCurrentSlideData] = useState({data: initData, index: 0});
  return (
    <motion.div className='relative min-h-screen select-none overflow-hidden text-white antialiased'>
        <AnimatePresence>
            <BackgroundImage transitionData={transition} currentSlideData={currentSlideData}/>
            <div className='absolute z-20 h-full w-full'>
                {/*Header Section*/}
                <div className='flex h-full w-full grid-cols-10 flex-col md:grid'>
                    {/*Slider left Section Content*/}
                    <div className='col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10'>
                        <SlideInfo transitionData={transition} currentSlideData={currentSlideData}/>
                    </div>
                    {/*Slider right Carrousel Content*/}
                    <div className='col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10'>
                        <Slides data={data}/>
                        <Controls
                            currentSlideData={currentSlideData}
                            data={data}
                            transitionData={transitionData}
                            initData={initData}
                            handleData={setData}
                            handleTransitionData={setTransitionData}
                            handleCurrentSlideData={setCurrentSlideData}
                            sliderData={sliderData}
                        />
                    </div>
                </div>
            </div>
        </AnimatePresence>
    </motion.div>
  )
}

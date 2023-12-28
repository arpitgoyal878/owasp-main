import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll } from "framer-motion"
import { IoLocationSharp } from "react-icons/io5";
import ScheduleData from '../data/ScheduleData';

function Item(props) {
    const scroll = useRef(null);
    const isInView = useInView(scroll, { once: true });
    const { scrollYProgress } = useScroll({
        target: scroll,
        offset: ["start end", "center center"]
    });

    return (
        <li ref={scroll} className='border-l-8 relative my-2 max-w-150 flex border-black border-dashed justify-center items-center'>
            <motion.div className={scrollYProgress.current === 1 ? ' absolute checkpoint w-6 h-6 rounded-full bg-red-600 -left-4' : ' absolute checkpoint w-6 h-6 rounded-full bg-green-600 -left-4'}></motion.div>
            <motion.div style={{
                transform: isInView ? "translateX(0)" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
                className=' origin-left glass-morph w-full overflow-hidden m-4 p-6 text-white'>
                <p className='text-3xl '>{props.data.timing}</p>
                <h1 className='font-bold my-2'>{props.data.heading}</h1>
                <p className='italic'>{props.data.details}</p>
            </motion.div>
        </li>
    )
}

const Schedule = (props) => {
    const scroll = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scroll,
        offset: ["start center", "end center"]
    });
    return (
        <div className='w-full h-auto  pt-16 pb-5 bg-gradient-to-tl from-blue-950 to-sky-600'>
            <div className="schedule flex justify-center m-auto px-4 lg:p-10">
                <ul ref={scroll} className='relative' id='schedule-list'>
                    <motion.i style={{ top: (scrollYProgress.current * 100 - 4) + '%' }} className='absolute transition-all duration-100 linear text-red-600 text-[40px] z-10 -left-4' id='location-icon'><IoLocationSharp /></motion.i>
                    {ScheduleData.map((data, index) => {
                        return (<Item data={data} />)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Schedule
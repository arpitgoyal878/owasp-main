import { useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const Mission = () => {
  const scroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scroll,
    offset: ['start end', 'start start']
  })
  return (
    <div  className='w-full h-screen lg:h-[calc(100vh-160.8px)] pt-20 pb-5 bg-gradient-to-tl from-blue-950 to-sky-600'>
      {/* <div ref={scroll} className="mission h-[95%] w-[95%] m-auto glass-morph py-6 px-4 lg:p-10">
        <div className='lg:my-10 my-5 w-full flex flex-col items-center'>
          <h1 className='text-black py-4 text-center text-[30px] italic query-text'>Our Vission</h1>
          <div className='relative'>
            {/* <div style={{backgroundSize: scrollYProgress.current*100 + '%'}} className='lg:text-[50px] m-auto text-[35px] bg-gradient-to-r lg:w-3/4 from-sky-400 to-sky-400 mission-design text-center absolute inset-0 h-full w-full'>No more insecure software.</div> */}
            {/* <p className='lg:text-[50px] m-auto text-[35px] text-transparent bg-white bg-clip-text text-center w-full lg:w-3/4'>No more insecure software.</p> */}
          {/* </div> */}
        {/* </div> */ }
        <div className='lg:my-10 my-5 flex flex-col items-center'>
          {/* <h1 className='text-black py-4 text-[30px] text-center italic query-text'>Our Mission</h1> */}
          <div className='relative'>
          {/* <div style={{backgroundSize: scrollYProgress.current*100 + '%'}} className='lg:text-[50px] m-auto lg:w-3/4 text-[35px] bg-gradient-to-r from-sky-400 to-sky-400 mission-design text-center absolute inset-0 h-full w-full'>To be the global open community that power secure software through education, tools and collaboration.</div> */}
          <p className='lg:text-[40px] m-auto text-[35px] text-white text-center lg:w-3/4 w-full'>OWASP Chapter MANIT, your gateway to the exciting world of cybersecurity! At NIT Bhopal, we explore cutting-edge topics like network security, ethical hacking, and more. Don't miss out on the chance to enhance your cybersecurity skills, connect with like-minded enthusiasts, and stay updated with the latest trends. Join us today and let's secure the digital world together!</p>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Mission
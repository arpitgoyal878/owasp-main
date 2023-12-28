import React, { useEffect, useRef, useState } from 'react'
import UpcomingEv from './UpcomingEv'
import News from './News';
import Faqs from './Faqs';
import Projects from './Projects';
import Team from './Team';
import Mission from './Mission';
import Schedule from './Schedule';
import { motion, useScroll } from "framer-motion"

const Home = () => {
  const [text, setText] = useState('')
  const scroll = useRef(null);
  let i = 0, j = 0, clutter = '';

  const typeWriter = () => {
    let texts = ['Hacking', 'Cyber Security', 'Ethical Hacking','Networking','Development'];
    setInterval(() => {
      if (i < texts[j].length) {
        clutter = clutter + texts[j].charAt(i)
        i = i + 1;
      }
      else if (i === texts[j].length + 5) {
        j = j + 1;
        if (j < texts.length) {
          i = 0;
          clutter = ''
        }
        else {
          j = 0;
          i = 0;
          clutter = ''
        }
      }
      else {
        i = i + 1
      }
      setText(clutter)
    }, 200)
  }


  useEffect(() => {
    typeWriter();
  }, [])

  return (

    <div className='home-page' >
      <section className='first-section w-full h-screen relative flex items-center px-6 justify-center'>
        <div className="hero-heading">
          <div className=" text-white">
            <p className='lg:text-[200px] text-[90px] society-name leading-none font-extrabold'>OWASP</p>
            <p className='w-full text-right text-[20px] lg:text-[50px] font-bold'>Chapter MANIT</p>
          </div>
          <div className='text-green-600 lg:text-[30px] text-[20px] my-6 font-semibold w-min m-auto text-center py-2 flex gap-4 steps justify-center glass-morph px-6'>$ <p className='changing-text w-min text-left whitespace-nowrap'>{text}</p></div>
        </div>
      </section>
      <section className="upcoming-events-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>Upcoming Events</div>
        <div>
          <UpcomingEv />
        </div>
      </section>
      <section className="mission-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>Our Mission</div>
        <div>
          <Mission />
        </div>
      </section>
      <section className="projects-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>Projects</div>
        <div>
          <Projects />
        </div>
      </section>
      {/* <section className="projects-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>Schedule</div>
        <div>
          <Schedule/>
        </div>
      </section> */}
      <section className="news-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>News</div>
        <div>
          <News />
        </div>
      </section>
      <section className="About-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>About Us</div>
        <div>
          <Team />
        </div>
      </section>
      <section className="faqs-section w-full">
        <div className=' bg-gradient-to-bl from-black to-blue-950 text-center whitespace-nowrap text-white py-6 font-semibold'>Faqs</div>
        <div>
          <Faqs />
        </div>
      </section>
    </div>

  )
}

export default Home;
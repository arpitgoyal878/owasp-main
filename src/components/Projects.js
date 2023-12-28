import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProjectData from '../data/ProjectData';
import { useInView } from 'framer-motion';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "translateY(0) scaleX(1)" : "translateY(200px) scaleX(0.8)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        {children}
      </div>
    </section>
  );
}

const Projects = () => {
  const location = useLocation();
  return (
    <div className={location.pathname === '/' ? 'projects-container w-full h-auto flex justify-center items-end py-6 pt-10' : 'projects-container w-full h-screen flex justify-center items-end py-6 pt-10'}>
      <div className={location.pathname === '/' ? 'h-[95%] w-[95%] py-6 rounded-lg scroll-bar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'h-[95%] w-[95%] py-6 rounded-lg overflow-y-scroll scroll-bar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
        {ProjectData.map((data, index) => {
          return (
            <Section>
              <div className='grid grid-rows-2 glass-morph project-container overflow-hidden text-white h-min'>
                <div className='h-full w-full overflow-hidden  project-image relative'>
                  <img className='h-full transition-all duration-500 w-full rounded-lg object-cover' src={data.image} alt="" />
                </div>
                <div className='p-3 h-full project-details relative'>
                  <h2 className="project-name text-3xl mb-2 font-semibold">{data.name}</h2>
                  <div>
                    <p className="project-details text-sm max-h-[100px] overflow-hidden">{data.details}</p>
                    <span className='text-sm text-red-500 italic'><Link to={data.link}>Read More</Link></span>
                  </div>
                </div>
              </div>
            </Section>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
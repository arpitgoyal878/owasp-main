import React, { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [events, setEvents] = useState(false)
  return (
    <>
      <div className='fixed top-4 w-full h-fit flex flex-col items-center gap-6 lg:flex-row lg:justify-center z-50'>
        <div className='items-center flex justify-between px-10 py-2 glass-morph w-[95%]'>
          <div className="logo h-8 w-8 rounded-full logo">
          </div>
          <ul className='nav-items-container hidden lg:flex text-white gap-10' >
            <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/'>Home</Link></li>
            <li className='nav-item relative cursor-pointer flex justify-center items-center gap-2 border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500' onClick={e=>{
              setEvents(!events);
            }}>Events<GoChevronDown className={events ? "rotate-180 transition-all duration-500" : "rotate-0 transition-all duration-500"} />
              <ul className={events ? 'absolute mt-12 top-0 max-h-96 overflow-hidden transition-all duration-1000 ease-in-out glass-morph px-4 ' : 'absolute mt-12 top-0 max-h-0 overflow-hidden border-none transition-all duration-1000 ease-in-out glass-morph px-4 '}>
                <li className='m-2 w-max '><Link to='/events'>Past Events</Link></li>
                <li className='m-2 w-max'><Link to='/upcoming'>Upcoming Events</Link></li>
              </ul>
            </li>
            <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/mission'>Our Mission</Link></li>
            <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/team'>Team</Link></li>
            <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/project'>Projects</Link></li>
            {/* <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/schedule'>Schedule</Link></li> */}
            <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/news'>News</Link></li>
            <li className='nav-item border-b-4 border-transparent px-2 hover:border-white transition-all py-1 duration-500'><Link to='/faqs'>Faqs</Link></li>
          </ul>
          <div className='relative lg:hidden'>
            <div className="text-white font-extrabold text-2xl cross" onClick={e => {setNavbar(!navbar); setEvents(false)}}>{navbar ? <RxCross1 /> : <RxHamburgerMenu />}</div>
          </div>
        </div>
        <div className={navbar ? "hamburger-nav relative flex justify-end w-[95%] max-h-[500px] transition-all duration-700 lg:hidden ease-in overflow-hidden z-50" : "hamburger-nav relative flex justify-end w-[95%] max-h-0 overflow-hidden ease-in transition-all duration-700 lg:hidden z-50"}>
          <ul className='nav-items-container flex flex-col glass-morph w-full sm:w-72  text-white gap-6 p-6 justify-start' >
            <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/'>Home</Link></li>
            <li className='nav-item relative cursor-pointer  border-transparent px-2 transition-all duration-500' onClick={e=>{
              setEvents(!events);
            }}> <div className='flex justify-between items-center'>Events<GoChevronDown className={events ? "rotate-180 transition-all duration-500" : "rotate-0 transition-all duration-500"}/></div>
              <ul className={events ? 'flex flex-col max-h-24 transition-all duration-700 overflow-hidden ease-out px-4 gap-6':'flex flex-col max-h-0 transition-all duration-700 ease-out overflow-hidden  px-4 gap-6'}>
                <li className=' w-max mt-6 '><Link to='/events'>Past Events</Link></li>
                <li className=' w-max'><Link to='/upcoming'>Upcoming Events</Link></li>
              </ul>
            </li>
            <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/mission'>Our Mission</Link></li>
            <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/team'>Team</Link></li>
            <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/project'>Projects</Link></li>
            {/* <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/schedule'>Schedule</Link></li> */}
            <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/news'>News</Link></li>
            <li className='nav-item border-b-4 text-left border-transparent px-2'><Link to='/faqs'>Faqs</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
import React, { useEffect, useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
// import TeamData from '../data/TeamData';
import GautamDP from "../assets/gautam.jpg";
import ArpitDP from "../assets/arpit.png";

import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "translateY(0)" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const Team = () => {
  const handleClick = (e) => {
    let i = 0;
    let elements = document.getElementsByClassName("work-name");
    while (i < elements.length) {
      elements[i].classList.remove("work-button");
      i++;
    }
    e.target.classList.add("work-button");
  };

  return (
    <div className=" faqs-page flex justify-center items-center min-h-screen pt-20 bg-gradient-to-tr pb-5 from-blue-600 to-black">
      <div className=" h-[95%] w-[95%] m-auto flex flex-col items-center">
        <div className="font-bold text-[30px] text-white lg:my-6 my-3 ">
          Team
        </div>
        {/* <div className="team-work lg:w-1/2 w-full whitespace-nowrap overflow-x-scroll my-4 scroll-bar">
          {work.map((data, index) => {
            return (
              <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white work-button' onClick={e => handleClick(e)}>{data}</span>
            )
          })}
        </div> */}
        <div className="team-members grid grid-cols-2 sm:flex lg:flex lg:flex-row lg:justify-center lg:flex-wrap sm:flex-row sm:justify-center sm:flex-wrap lg:gap-20 sm:gap-20 gap-2 w-full lg:w-3/4 ">
          
          <Section>
            <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
              <div className="h-3/4 w-full relative">
                <div className="team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80">
                  <a
                    href="https://www.instagram.com/_gautampratap/"
                    target="_blank"
                    className="p-2 bg-white rounded-lg cursor-pointer"
                  >
                    <BsInstagram className="text-xl text-pink-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gautampratap/"
                    target="_blank"
                    className="p-2 bg-white rounded-lg cursor-pointer"
                  >
                    <FaLinkedinIn className="text-xl fill-sky-600" />
                  </a>
                </div>
                <img
                  className="h-full w-full object-cover"
                  src={GautamDP}
                  alt=""
                />
              </div>
              <div className="pt-4 text-white">
                <p className="font-bold whitespace-nowrap text-sm w-full text-center">
                  Gautam Pratap
                </p>
                <p className="font-medium text-xs w-full text-center">Member</p>
              </div>
            </div>
          </Section>
          <Section>
            <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
              <div className="h-3/4 w-full relative">
                <div className="team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80">
                  <a
                    href="https://www.instagram.com/_gautampratap/"
                    target="_blank"
                    className="p-2 bg-white rounded-lg cursor-pointer"
                  >
                    <BsInstagram className="text-xl text-pink-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gautampratap/"
                    target="_blank"
                    className="p-2 bg-white rounded-lg cursor-pointer"
                  >
                    <FaLinkedinIn className="text-xl fill-sky-600" />
                  </a>
                </div>
                <img
                  className="h-full w-full object-cover"
                  src={ArpitDP}
                  alt=""
                />
              </div>
              <div className="pt-4 text-white">
                <p className="font-bold whitespace-nowrap text-sm w-full text-center">
                  ARPIT GOYAL
                </p>
                <p className="font-medium text-xs w-full text-center">Member</p>
              </div>
            </div>
          </Section>
          
          {/* {TeamData.map((data, index) => {
            return (
              <Section>
                <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
                  <div className='h-3/4 w-full relative'>
                    <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                      <a href={data.insta} className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                      <a href={data.linkdin} className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
                    </div>
                    <img className='h-full w-full object-cover' src={data.dp} alt="" />
                  </div>
                  <div className='pt-4 text-white'>
                    <p className='font-bold whitespace-nowrap text-sm w-full text-center'>{data.name}</p>
                    <p className='font-medium text-xs w-full text-center'>{data.post}</p>
                  </div>
                </div>
              </Section>
            )
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Team;

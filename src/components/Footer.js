import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaMeetup } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full py-3 text-white text-sm bg-gradient-to-br from-zinc-950 to-blue-950">
      <div className="flex justify-between w-full py-2 px-6  lg:px-16">
        <div className="flex flex-col items-center">
          <div className="footer-logo w-8 h-8 mb-2 rounded-full"></div>
          <p className="font-bold text-xl">OWASP</p>
          <p>Chapter MANIT</p>
        </div>
        <div className="contact-us">
          <p className="text-xl w-full text-center font-bold mb-2">
            Contact Us
          </p>
          <div className="flex justify-end w-full">
            <i className="border-r-[1px] border-white px-3">
              <a href="https://www.instagram.com/owasp_nitb/" target="_blank">
                <BsInstagram className="text-xl text-pink-600" />
              </a>
            </i>
            <i className="border-r-[1px] border-white px-3">
              <a href="https://www.linkedin.com/company/owaspnitb" target="_blank">
                <FaLinkedinIn className="text-xl fill-sky-600" />
              </a>
            </i>
            <i className="border-r-[1px] border-white px-3">
              <a href="https://twitter.com/owasp_nitb" target="_blank">
                <RiTwitterXLine className="text-xl" />
              </a>
            </i>
            <i className="border-r-[1px] border-white px-3">
              <a href="https://www.meetup.com/owasp-maulana-azad-national-institute-of-technology-chapter/#" target="_blank">
                <FaMeetup className="text-xl fill-red-500" />
              </a>
            </i>
          </div>
        </div>
      </div>
      <p className="text-center text-xs border-t-[1px]  lg:px-16 border-white py-2 px-3 whitespace-nowrap w-full">
        Copyright © {new Date().getFullYear()}, all rights reserved by <br />
        OWASP chapter MANIT
      </p>
    </div>
  );
};

export default Footer;

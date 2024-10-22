import React from 'react'
import './Footer.scss'
// import { Link } from 'react-router-dom'
import FooterLogo from '../../Assets/logow 1.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

export default function Footer() {
    return <footer className="mt-5 p-7">
        <div className="flex flex-wrap justify-center px-3 w-full gap-3">
            <div className="FooterLogo">
                <img src={FooterLogo} alt="Al-Amira Logo" width={114} height={114} />
                <p>Al-Amir Foreign Employment Company is one of the largest recruitment companies in the Arab world.
                    Just search for your dream job and you will find it with us.
                </p>
                <div className="flex gap-2 items-center mt-4">

                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                     bg-[#fb8b24] text-white">
                        <FaFacebookF className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                     bg-[#fb8b24] text-white">
                        <FaWhatsapp className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                     bg-[#fb8b24] text-white">
                        <IoLogoInstagram className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                     bg-[#fb8b24] text-white">
                        <FaLinkedinIn className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                     bg-[#fb8b24] text-white">
                        <FaTwitter className='text-lg' />
                    </div>
                </div>
            </div>
            <div className="FooterLinks">
                <h1>Contact us</h1>
                <ul className='list-none'>
                    <li className='flex items-center gap-3'><FaCaretRight /> Home</li>
                    <li className='flex items-center gap-3'><FaCaretRight /> Who we are</li>
                    <li className='flex items-center gap-3'><FaCaretRight /> Our Jobs</li>
                    <li className='flex items-center gap-3'><FaCaretRight /> Gallary</li>
                </ul>
            </div>
            <div className="FooterLinks">
                <h1>Our Services</h1>
                <ul className='list-none'>
                    <li className='flex items-center gap-3'><FaCaretRight /> Home</li>
                    <li className='flex items-center gap-3'><FaCaretRight /> Who we are</li>
                    <li className='flex items-center gap-3'><FaCaretRight /> Our Jobs</li>
                    <li className='flex items-center gap-3'><FaCaretRight /> Gallary</li>
                </ul>
            </div>
            <div className="FooterLinks">
                <h1>Contact Information</h1>
                <p>
                    Do not hesitate to contact us, as we are available 24 hours a day to respond to your inquiries as
                    quickly as possible.
                </p>
            </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center FooterFoot mt-8">
            <hr className='border-[#fb8b24] ' />
            <div className="text-center mt-4">
                <p>© 2024 Al-Amira. All rights reserved</p>
                <p>Designed By A To Z Tech</p>
            </div>

        </div>
    </footer>

}

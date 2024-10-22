import React from 'react'
import './ContactForm.scss'
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import ContactImage from '../../../Assets/contact 1.png'

export default function ContactForm() {
    return (
        <div className='ContactForm container mx-auto px-3'>

            <form className="">
                <div>
                    <input type="text" id="first_name" className="bg-gray-50 border border-[#14213d]
                    text-gray-900 text-sm  block w-full p-2.5" placeholder="Email" />
                </div>
                <div>
                    <input type="text" id="first_name" className="bg-gray-50 border border-[#14213d]
                    text-gray-900 text-sm  block w-full p-2.5" placeholder="Email" />
                </div>
                <div>
                    <input type="text" id="first_name" className="bg-gray-50 border border-[#14213d]
                    text-gray-900 text-sm  block w-full p-2.5" placeholder="Email" />
                </div>
                <div>
                    <textarea type="text" id="first_name" className="bg-gray-50 border border-[#14213d]
                    text-gray-900 text-sm block w-full p-2.5" placeholder="Email" />
                </div>
                <button type='submit'>Send</button>
            </form>

            <div className="ContactForm_Desc p-3">
                <h1>Contact us now</h1>
                <p>
                    Leave your message to us and we will respond to you as soon as possible,
                </p>
                <p>or by communicating  through social media</p>
                <div className="flex gap-2 items-center mt-4">

                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                    border bg-[#fb8b24] text-white">
                        <FaFacebookF className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                    border bg-[#fb8b24] text-white">
                        <FaWhatsapp className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                    border bg-[#fb8b24] text-white">
                        <IoLogoInstagram className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                    border bg-[#fb8b24] text-white">
                        <FaLinkedinIn className='text-lg' />
                    </div>
                    <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center 
                    border bg-[#fb8b24] text-white">
                        <FaTwitter className='text-lg' />
                    </div>
                </div>
                <img src={ContactImage} alt="Al-Amira Contact" loading='lazy' />
            </div>


        </div>
    )
}

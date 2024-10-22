import React from 'react'
import './ContactInto.scss'
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactInto() {
    return <>
        <div className='ContactInto'>
            <h1 className='text-white'>Contact Us</h1>
        </div>
        <div className="ContactInto2 container mx-auto px-3">
            <div className="ContactCard flex justify-center items-center gap-4 flex-col">
                <div className="w-full flex justify-center items-center flex-col gap-2">
                    <FaPhone />
                    <h2>Phone</h2>
                </div>


                <p>01144246583 - 01093971184</p>

            </div>
            <div className="ContactCard flex justify-center items-center gap-4 flex-col">
                <div className="w-full flex justify-center items-center flex-col gap-2">
                    <FaLocationDot />
                    <h2>Location</h2>
                </div>

                <p className='text-center  px-6'>
                    Al-Haram, next to Meshaal Station, behind Al-Sabah Mosque, Al-Badrawi
                    Street, Building 14, First Floor, Apartment 4
                </p>
            </div>
            <div className="ContactCard flex justify-center items-center gap-4 flex-col">
                <div className="w-full flex justify-center items-center flex-col gap-2">
                    <MdEmail />
                    <h2>Email</h2>
                </div>


                <p>Elamira402.cv@gmail.com</p>

            </div>
        </div>
    </>
}

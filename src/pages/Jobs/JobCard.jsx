import React from 'react'
import './Jobs.scss'
import { MdLocationOn } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMoneyDuotone } from "react-icons/pi";

export default function JobCard({ JobImage }) {
    return <div className="Job_card">
        <div className="Job_card_image">
            <div className="JobLogo">
                <img src={JobImage} alt="Job Logo"
                    className='rounded-full w-[59px] h-[59px]' loading='lazy' />
                <div className="JobLogo_text">
                    <h1>The Egyptian company</h1>
                    <h2 className='flex gap-2 items-center'>Egypt
                        <MdLocationOn className='text-[#fb8b24] w-[24px] h-[24px]' /></h2>
                </div>
            </div>
            <span>Full Time <PiBagSimpleFill /></span>

        </div>
        <div className="Job_card_decs">
            <h3>An architect is required to work in a Saudi company</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit necessitatibus, eligendi ut
                voluptatibus praesentium esse nihil non blanditiis saepe unde, beatae minus vel excepturi illo cumque,
                ab reiciendis atque!
            </p>
        </div>
        <div className="Job_Footer">
            <button>Apply now</button>
            <div className="flex flex-col gap-2">
                <p className='flex items-center gap-2'>7000<PiMoneyDuotone /> </p>
            </div>
        </div>
    </div>
}


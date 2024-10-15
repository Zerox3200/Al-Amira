import React from 'react'
import './About.scss'
import AboutImage from '../../../Assets/pic2home.png'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiBagSimpleDuotone } from "react-icons/pi";
import JobLogo from '../../../Assets/Company Logo.png'
import { CiLocationOn } from "react-icons/ci";

export default function About() {
    return <section className='About container mx-auto'>
        <div className="About_Desc px-5">
            <article>
                <h1>About us</h1>
                <h2>Al Amira Foreign Labor Company</h2>
                <p>It is a company specialized in the field of manpower recruitment. And processing visa papers,
                    it was established by a distinguished group of businessmen with long experience in this field.
                </p>
                <div className="w-full flex justify-end mt-10">
                    <button>More Details</button>
                </div>
            </article>
            <img src={AboutImage} alt="About" loading='lazy' />
        </div>

        <div className="About_Jobs w-full">
            <h1 className='w-full flex flex-col justify-center items-center'>
                Latest Jobs
            </h1>
            <div className="flex justify-end items-center px-10 my-3">
                <Link className='flex items-center gap-2'>
                    More
                    <FaLongArrowAltRight />
                </Link>
            </div>
            <div className="About_Jobs_Cards mt-10">


                <div className="About_Jobs_Card">
                    <div className="w-full p-6 ">
                        <div className='FullJob flex gap-2 items-center'>
                            Full Time
                            <PiBagSimpleDuotone style={{ position: "relative", top: "1.5px" }} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={JobLogo} alt="Work" className='rounded-full' loading='lazy' width={100} height={100} />

                        <div className="mt-10 mb-12 w-full text-center">
                            <h2>Search for Graphic designer</h2>
                            <h3 className='flex justify-center items-center gap-2 mt-2'>Egypt - Cairo <CiLocationOn /></h3>
                        </div>

                        <Link>Discover Job</Link>
                    </div>
                </div>

                <div className="About_Jobs_Card">
                    <div className="w-full p-6 ">
                        <div className='FullJob flex gap-2 items-center'>
                            Full Time
                            <PiBagSimpleDuotone style={{ position: "relative", top: "1.5px" }} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={JobLogo} alt="Work" className='rounded-full' loading='lazy' width={100} height={100} />

                        <div className="mt-10 mb-12 w-full text-center">
                            <h2>Search for Graphic designer</h2>
                            <h3 className='flex justify-center items-center gap-2 mt-2'>Egypt - Cairo <CiLocationOn /></h3>
                        </div>

                        <Link>Discover Job</Link>
                    </div>
                </div>

                <div className="About_Jobs_Card">
                    <div className="w-full p-6 ">
                        <div className='FullJob flex gap-2 items-center'>
                            Full Time
                            <PiBagSimpleDuotone style={{ position: "relative", top: "1.5px" }} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={JobLogo} alt="Work" className='rounded-full' loading='lazy' width={100} height={100} />

                        <div className="mt-10 mb-12 w-full text-center">
                            <h2>Search for Graphic designer</h2>
                            <h3 className='flex justify-center items-center gap-2 mt-2'>Egypt - Cairo <CiLocationOn /></h3>
                        </div>

                        <Link>Discover Job</Link>
                    </div>
                </div>

                <div className="About_Jobs_Card">
                    <div className="w-full p-6 ">
                        <div className='FullJob flex gap-2 items-center'>
                            Full Time
                            <PiBagSimpleDuotone style={{ position: "relative", top: "1.5px" }} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={JobLogo} alt="Work" className='rounded-full' loading='lazy' width={100} height={100} />

                        <div className="mt-10 mb-12 w-full text-center">
                            <h2>Search for Graphic designer</h2>
                            <h3 className='flex justify-center items-center gap-2 mt-2'>Egypt - Cairo <CiLocationOn /></h3>
                        </div>

                        <Link>Discover Job</Link>
                    </div>
                </div>


                <div className="About_Jobs_Card">
                    <div className="w-full p-6 ">
                        <div className='FullJob flex gap-2 items-center'>
                            Full Time
                            <PiBagSimpleDuotone style={{ position: "relative", top: "1.5px" }} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={JobLogo} alt="Work" className='rounded-full' loading='lazy' width={100} height={100} />

                        <div className="mt-10 mb-12 w-full text-center">
                            <h2>Search for Graphic designer</h2>
                            <h3 className='flex justify-center items-center gap-2 mt-2'>Egypt - Cairo <CiLocationOn /></h3>
                        </div>

                        <Link>Discover Job</Link>
                    </div>
                </div>
                <div className="About_Jobs_Card">
                    <div className="w-full p-6 ">
                        <div className='FullJob flex gap-2 items-center'>
                            Full Time
                            <PiBagSimpleDuotone style={{ position: "relative", top: "1.5px" }} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={JobLogo} alt="Work" className='rounded-full' loading='lazy' width={100} height={100} />

                        <div className="mt-10 mb-12 w-full text-center">
                            <h2>Search for Graphic designer</h2>
                            <h3 className='flex justify-center items-center gap-2 mt-2'>Egypt - Cairo <CiLocationOn /></h3>
                        </div>

                        <Link>Discover Job</Link>
                    </div>
                </div>

            </div>
        </div>
    </section>

}

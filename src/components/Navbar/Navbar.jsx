import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../Assets/logo1 2.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200  fixed w-full px-4 top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={Logo}
                        className="object-cover"
                        alt="Al-Amira Logo"
                        loading="lazy"
                        width={90}
                        height={90}
                    />
                </div>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${isMenuOpen ? 'block MobileBackground' : 'hidden'
                        } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link className="block py-2 px-3  rounded  md:p-0" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="block py-2 px-3  rounded  md:p-0" aria-current="page">
                                Our Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to={"/Aboutus"} className="block py-2 px-3  rounded  md:p-0" aria-current="page">
                                Who we are
                            </Link>
                        </li>
                        <li>
                            <Link className="block py-2 px-3  rounded  md:p-0" aria-current="page">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    <div className="block py-2 px-3 rounded  md:text-black md:p-0">
                        العربية
                    </div>
                </div>
            </div>
        </nav>
    );
}

import React from 'react'
import './Intro.scss'
import CountrySlider from '../CountrySlider/CountrySlider'

export default function Intro() {

    return <section className='Intro'>
        <div className="Intro_text">
            <h1>Al Amira Foreign Works Company</h1>
            <h2 className='capitalize'>for a safer and easier employment journey</h2>
            <h3>
                We are dedicated to providing the best jobs and services to our valued customers, so always choose the best,
                because you deserve it.
            </h3>
            <button type="button" className="text-white bg-[#FB8B24] focus:ring-4 font-medium rounded-lg text-sm
               dark:hover:bg-[#FB8B24] focus:outline-none">Latest Jobs</button>
        </div>

        <CountrySlider />
    </section>

}

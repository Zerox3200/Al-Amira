import React from 'react'
import './Jobs.scss'

export default function Jobs() {

    return <section className='Jobs'>
        <div className="Jobs_Intro">
            <h1>
                Our Jobs
            </h1>
            <p>The recruitment process usually goes through several stages that require great attention and
                require necessary time and effort. You may not find the time needed to follow up on the progress
                of each stage due to the large number of administrative processes in an environment.
            </p>
            <form className='w-full'>
                <input type="text" placeholder='Search for your job' />
                <select >
                    <option value={null}>City</option>
                </select>
                <select >
                    <option value={null}>Job Type</option>
                </select>
                <button>Search</button>
            </form>
        </div>
    </section>

}

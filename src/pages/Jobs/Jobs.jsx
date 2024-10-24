import React from 'react'
import './Jobs.scss'
import JobImage from '../../Assets/73bce5c7-50ab-4252-a67f-ff2950f8aa0c (2).png'
import JobCard from './JobCard'

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
        <div className="Job_cards container mx-auto">
            <JobCard JobImage={JobImage} />
            <JobCard JobImage={JobImage} />
            <JobCard JobImage={JobImage} />
            <JobCard JobImage={JobImage} />
            <JobCard JobImage={JobImage} />
            <JobCard JobImage={JobImage} />
        </div>
        <div className="w-full flex justify-center gap-2 items-center my-4 Pagination flex-wrap">
            <div className='Active'>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
    </section>

}

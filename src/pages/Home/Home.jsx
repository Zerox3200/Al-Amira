import React from 'react'
import Intro from '../../components/Home/Intro/Intro'
import About from '../../components/Home/About/About'
import Companies from '../../components/Home/Companies/Companies'
import Gallary from '../../components/Home/Gallary/Gallary'
// import Special from '../../components/Special/Special'

export default function Home() {
    return <>
        <Intro />
        <About />
        {/* <Special /> */}
        <Companies />
        <Gallary />
    </>
}

import React from 'react'
import './Gallary.scss'
import Gallary1 from '../../../Assets/2a84b393-84a2-4327-b578-ac97a32de92f.png'
import Gallary2 from '../../../Assets/783c376d-4f4b-4cd9-bd9b-49614c6efa6d.png'
import Gallary3 from '../../../Assets/a64f8495-07bd-4225-9c6e-94370ef9f5fe.png'
import Gallary4 from '../../../Assets/d0bb2f65-dba0-49dd-b243-7ce9fcb84b66 (2).png'

export default function Gallary() {

    return <section className='Gallary'>
        <div className="w-full p-5 flex justify-center items-center">
            <h1>Gallary</h1>
        </div>
        <div className="flex w-full justify-center gap-8 Gallary_Images">
            <img src={Gallary1} alt="Gallary" loading='lazy' />
            <img src={Gallary2} alt="Gallary" loading='lazy' />
            <img src={Gallary3} alt="Gallary" loading='lazy' />
            <img src={Gallary4} alt="Gallary" loading='lazy' />
        </div>
    </section>

}

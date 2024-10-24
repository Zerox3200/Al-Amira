import React from 'react'
import './Contact.scss'
import ContactInto from '../../components/Contact/Intro/ContactInto'
import ContactForm from '../../components/Contact/Form/ContactForm'

export default function Contact() {

    return <section className='Contact'>
        <ContactInto />
        <ContactForm />
        <div className="container mx-auto px-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.678668977064!2d31.144006199999993!3d29.988663400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845939449234f%3A0xe0d615388e109618!2z2LTYsdmD2Kkg2KfZhNij2YXZitix2Kkg2YTYpdmE2K3Yp9mCINin2YTYudmF2KfZhNipINin2YTZhdi12LHZitipINio2KfZhNiu2KfYsdis!5e0!3m2!1sar!2seg!4v1729792307041!5m2!1sar!2seg" allowFullScreen="" loading="lazy" title='Al-Amira Location' referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

}

import React from 'react'
import './Contact.scss'
import ContactInto from '../../components/Contact/Intro/ContactInto'
import ContactForm from '../../components/Contact/Form/ContactForm'

export default function Contact() {

    return <section className='Contact'>
        <ContactInto />
        <ContactForm />
    </section>

}

import React from 'react'
import Image from '../Image/Image'
import logo from  "../../assets/logo.webp"
import "./About.css"

function About() {
  return (
    <section className="section-about">
        <div className='about-brand flex flex-col items-start justify-around gap-4'>
            <Image url={logo} alt='Brand-logo' className='w-[20%] h-[100%]'/>
            <h1 className='text-2xl font-thin'>Your Trusted Solar Partner for a Greener Future.</h1>
        </div>
        <div className='about-contact-links flex items-center justify-between'>
            <div className='quick-links flex flex-col gap-6'>
                <h1 className='font-bold text-3xl mb-6'>Quick Links</h1>
                <a>Projects</a>
                <a>About Us</a>
                <a>Products</a>
            </div>

            <div className='our-solutions flex flex-col gap-6'>
                <h1 className='font-bold text-3xl  mb-6'>Our Solutions</h1>
                <p>Homes</p>
                <p>Hospitals</p>
                <p>Industries</p>
            </div>  
        </div>
    </section>
  )
}

export default About
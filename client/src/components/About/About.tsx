import React from 'react'
import Image from '../Image/Image'
import logo from  "../../assets/logo.webp"
import "./About.css"
import Button from '../Button/Button'

function About() {
  return (
    <section className="section-about">
        <div className='about-brand flex flex-col items-start  gap-12'>
            {/* <Image url={logo} alt='Brand-logo' className='w-[15%] h-[100%]'/> */}
            <div>
                <h1 className='text-3xl font-bold uppercase tracking-widest mb-4'>Powertracks</h1>
                <h1 className='text-xl font-thin'>Your Trusted Solar Partner for a Greener Future.</h1>
            </div>
            
            <div className='social-logos text-3xl flex items-center gap-8 cursor-pointer '>
                <i className="ri-facebook-circle-fill "></i>
                <i className="ri-whatsapp-fill"></i>
                <i className="ri-twitter-x-fill"></i>
                <i className="ri-linkedin-box-fill"></i>
            </div>
            <Button text='Contact us' className='bg-black text-white px-16 py-3 font-bold'></Button>
        </div>
        <div className='about-contact-links '>
            <div className='quick-links flex flex-col gap-6'>
                <h1 className='font-bold text-xl mb-6 uppercase'>Quick Links</h1>
                <a>Projects</a>
                <a>About Us</a>
                <a>Products</a>
            </div>

            <div className='our-solutions flex flex-col gap-6 '>
                <h1 className='font-bold text-xl  mb-6 uppercase'>Our Solutions</h1>
                <p>Homes</p>
                <p>Hospitals</p>
                <p>Industries</p>
            </div> 

            <div className='contact-info flex flex-col gap-6 '>
                <h1 className='font-bold text-xl  mb-6 uppercase'>Contact us</h1>
                <p>info@powertracksolar.net</p>
                <p>Factory & Store 30/309,EMS Road Iringappuram,Thrissur,Kerala 680103</p>
                <p>Office: +91 9497171141</p>
            </div> 

            <h4 className='text-gray-500 copyright'>{`© ${new Date().getFullYear()}, Inc. All rights reserved.`} <span className='underline cursor-pointer'>Privacy, Terms of use, Security Overview</span></h4> 
        </div>
    </section>
  )
}

export default About
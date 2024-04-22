import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Image from '../../../components/Image/Image'
import coverImage from "../../../assets/home-cover.webp"
import "./Home.css"

function Home() {
  return (
    <section className='section-home relative'>
      
        <Navbar />
        <Image url={coverImage} alt='home solar' className='h-[100vh] w-[100vw]' />
        <div className='dark-overlay'/>
      
        
        
    </section>
  )
}

export default Home
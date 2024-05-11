// import { Suspense, lazy } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Image from '../../../components/Image/Image'
import coverImage from "../../../assets/home-cover.webp"
import "./Home.css"
import Title from '../../../components/Title/Title'
import WhyUs from '../../../components/WhyUs/WhyUs'

// const Service = lazy(()=>import("../../../components/Service/Service"));
// const Products = lazy(()=>import("../../../components/Products/Products"));
// const How = lazy(()=>import("../../../components/HowItWorks/How"));
// const ContactUs = lazy(()=>import("../../../components/ContactUs/ContactUs"));
import Service from '../../../components/Service/Service'
import Products from '../../../components/Products/Products'
import Projects from '../../../components/Projects/Projects'
import How from '../../../components/HowItWorks/How'
import Testimonial from '../../../components/Testimonial/Testimonial'
import Counter from '../../../components/Counter/Counter'
import ContactUs from '../../../components/ContactUs/ContactUs'
import About from '../../../components/About/About'

function Home() {
  return (
    <section className='section-home '>
        <div className='landing-page relative'>
            <Navbar />
            <Image url={coverImage} alt='home solar' className='h-[100vh] w-[100vw]' />
            <Title/>
            <div className='dark-overlay'/>
        </div>
        {/* <Suspense fallback = {<h1 className='text-6xl'>Loading....</h1>}> */}
            <WhyUs/>
            <Counter/>
            <Service/>
            <Products/>
            <Projects />
            <How/>
            <ContactUs/>
            <Testimonial/>
            <About />
        {/* </Suspense> */}
      
        
    </section>
  )
}

export default Home

import Navbar from '../../../components/Navbar/Navbar'
import Image from '../../../components/Image/Image'
import coverImage from "../../../assets/home-cover.webp"
import "./Home.css"
import Title from '../../../components/Title/Title'
import WhyUs from '../../../components/WhyUs/WhyUs'
import Service from '../../../components/Service/Service'
import Products from '../../../components/Products/Products'

function Home() {
  return (
    <section className='section-home '>
        <div className='landing-page relative'>
            <Navbar />
            <Image url={coverImage} alt='home solar' className='h-[100vh] w-[100vw]' />
            <Title/>
            <div className='dark-overlay'/>
        </div>
        <WhyUs/>
        <Service/>
        <Products/>
        
        
        
      
        
        
    </section>
  )
}

export default Home
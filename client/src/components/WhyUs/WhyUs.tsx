import "./WhyUs.css"

import expImg from "../../assets/why-us/exp.png"
import expertImg from "../../assets/why-us/expert.png"
import qualityImg from "../../assets/why-us/quality.png"
import boostImg from "../../assets/why-us/boost.png"
import Image from "../Image/Image"

function WhyUs() {
  return (
    <section className='section-why-us'>
        <h1 className="uppercase font-bold text-4xl">Why choose us </h1>
        <ul>
            <li>
                <Image url={expImg} alt="Experience icon" />
                <p>
                    <h1>Leading Solar Product Supplier and Integrator Since 2012</h1>
                    <h3>Since 2012, we has been a top supplier and system integrator for solar products including water heaters, panels, batteries and charge controllers etc.</h3>
                </p>

            </li>

            <li>
                <Image url={expertImg} alt="expert icon" />
                <p>
                    <h1>Expertly Crafted, Quality Solar Products</h1>
                    <h3>Our products are crafted by expert professionals using top-notch raw materials and advanced technology, ensuring quality and reliability.</h3>
                    
                </p>

            </li>

            <li>
                <Image url={qualityImg} alt="quality icon" />
                <p>
                    <h1>Top-Quality Solar Solutions for Every Need</h1>
                    <h3>Adhering to international standards, we offer a diverse range of solar solutions for both domestic and commercial use.</h3>
                    
                </p>

            </li>

            <li>
            <Image url={boostImg} alt="Efficieny icon" />
                <p>
                    <h1>Valued for Durability, Efficiency, and Eco-Friendly Design</h1>
                    <h3>Clients value our products for their extended functional life, efficient performance, low maintenance, and eco-friendly design.</h3>
                    
                </p>

            </li>
            
           
        </ul>
    </section>
  )
}

export default WhyUs
import "./WhyUs.css"

function WhyUs() {
  return (
    <section className='section-why-us'>
        <h1 className="uppercase font-bold text-4xl">Why choose us ?</h1>
        <ul>
            <li>
                <span><i className="ri-building-line text-3xl"></i></span>
                <p>
                    <span className="font-bold">S</span>ince 2012, we has been a top supplier and system integrator for solar products including lights, water heaters, panels, batteries, fencing, surge protection, arresters, and charge controllers.
                </p>

            </li>

            <li>
                <span><i className="ri-vip-diamond-line text-3xl"></i></span>
                <p>
                    <span className="font-bold">O</span>ur products are crafted by expert professionals using top-notch raw materials and advanced technology, ensuring quality and reliability.
                </p>

            </li>

            <li>
                <span><i className="ri-verified-badge-line text-3xl"></i></span>
                <p>
                    <span className="font-bold">A</span>dhering to international standards, we offer a diverse range of solar solutions for both domestic and commercial use.
                </p>

            </li>

            <li>
                <span><i className="ri-medal-line text-3xl"></i></span>
                <p>
                    <span className="font-bold">C</span>lients value our products for their extended functional life, efficient performance, low maintenance, and eco-friendly design.
                </p>

            </li>
            
           
        </ul>
    </section>
  )
}

export default WhyUs
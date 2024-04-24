import { useState } from "react";
import ServiceTitle from "./ServiceTitle/ServiceTitle"
import "./Service.css"
import homeImg from "../../assets/services/home.webp"
import officeImg from "../../assets/services/offices.webp"
import hospitalImg from "../../assets/services/hospitals.webp"
import industryImg from "../../assets/services/industry.webp"
import ServiceBody from "./ServiceBody/ServiceBody";


function Service() {

    const services = [
      {
        id:"01",
        title:"Home",
        desc: "Seasoned industry professional with 15 years of expertise in residential solar solutions, specializing in designing, installing, and maintaining solar energy systems for homes. Proven track record of delivering cost-effective and sustainable solar solutions tailored to meet individual client needs.",
        imgSrc : homeImg
      },
      {
        id:"02",
        title:"Office",
        desc:"Expertise in designing, implementing, and managing solar installations for offices, optimizing energy savings and environmental impact. Proven track record of helping businesses reduce operational costs, achieve sustainability goals, and enhance their brand image through innovative solar solutions.",
        imgSrc : officeImg
      },
      {
        id:"03",
        title:"Hospital",
        desc:"Improving energy efficiency, reducing operating costs, and enhancing environmental sustainability for hospitals. Committed to delivering reliable and cost-effective solar solutions that contribute to a healthier planet and support critical healthcare operations.",
        imgSrc : hospitalImg
      },
      {
        id:"04",
        title:"Industry",
        desc:"Designing and deploying customized solar energy systems to meet the specific energy needs of industrial facilities",
        imgSrc:industryImg
      }

    ]

    
    const [currService,setCurrService] = useState<number>(0);

    const updateCurrTitles = (title:number):void=>{
        setCurrService(title);
    }
  return (
    <section className="service">
        <div className="service-content">
            <ServiceTitle services={services} currentTitle={currService} updateCurrTitle={updateCurrTitles}/>
            <ServiceBody service={services[currService]}/>
        </div>
        
    </section>
  )
}

export default Service
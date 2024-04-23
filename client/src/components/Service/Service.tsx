import { useState } from "react";
import ServiceTitle from "./ServiceTitle/ServiceTitle"
import "./Service.css"

function Service() {

    const titles = ["Home","Offices","Hospitals","Industry"];
    const [currTitles,setCurrTitles] = useState<string>("Home");

    const updateCurrTitles = (title:string):void=>{
        setCurrTitles(title);
    }
  return (
    <section className="service">
        <div className="service-content">
            <ServiceTitle titles={titles} currentTitle={currTitles} updateCurrTitle={updateCurrTitles}/>
        </div>
        
    </section>
  )
}

export default Service
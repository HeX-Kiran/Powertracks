import { ComponentPropsWithoutRef, ReactNode } from "react";
import "./ServiceBody.css"
import { type Service } from "../ServiceTitle/ServiceTitle";
import Image from "../../Image/Image";
import Button from "../../Button/Button";


type ServiceBodyProps = {
    service: Service;
    children? : ReactNode;
} & ComponentPropsWithoutRef<"div">

function ServiceBody({service,children,...otherProps}:ServiceBodyProps) {
  return (
    <main className="service-body" {...otherProps}>
        <div className="service-body-content pt-4">
            <h3 className="">{service.id}</h3>
            <h1>{`Solar power at  ${service.title}!`}</h1>
            
                <p>{service.desc}</p>
            
            <Button text="Know more"   />
        </div>
        <div className="service-img-container">
          <Image url={service.imgSrc} alt={service.title} className="h-[50vh] w-[100%] service-img" />
        </div>
    </main>
  )
}

export default ServiceBody
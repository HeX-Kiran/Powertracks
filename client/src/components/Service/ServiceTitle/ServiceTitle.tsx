import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import "./ServiceTitle.css"

export type Service = {
  id: string,
  title: string,
  desc: string,
  imgSrc: string
}

type ServiceTitleProps = {
    services:Service[];
    children? : ReactNode;
    currentTitle: number;
    updateCurrTitle(currentTitle: number):void
} & ComponentPropsWithoutRef<"div">

function ServiceTitle({services,children,updateCurrTitle,currentTitle,...otherProps}:ServiceTitleProps) {
  return (
    <main className='service-title' {...otherProps}>
       {
        services.map((service,index)=>{
            return <p className={currentTitle === index ? "isActive" : ""} onClick={()=>updateCurrTitle(index)}>{service.title}</p>
        })
       }
       {children}
    </main>
  )
}

export default ServiceTitle
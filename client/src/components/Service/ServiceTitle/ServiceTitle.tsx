import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import "./ServiceTitle.css"

type ServiceTitleProps = {
    titles: string[];
    children? : ReactNode;
    currentTitle: string;
    updateCurrTitle(currentTitle: string):void
} & ComponentPropsWithoutRef<"div">

function ServiceTitle({titles,children,updateCurrTitle,currentTitle,...otherProps}:ServiceTitleProps) {
  return (
    <main className='service-title' {...otherProps}>
       {
        titles.map((title)=>{
            return <p className={currentTitle === title ? "isActive" : ""} onClick={()=>updateCurrTitle(title)}>{title}</p>
        })
       }
       {children}
    </main>
  )
}

export default ServiceTitle
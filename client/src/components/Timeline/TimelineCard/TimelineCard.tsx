import { ReactNode } from "react"
import { type TimelineProps } from "../Timeline"
import "./TimelineCard.css"
import Image from "../../Image/Image"

type TimeLineCardProps = {
    details: TimelineProps,
    isLeft: boolean
}

function TimelineCard({details,isLeft}: TimeLineCardProps) {

    
   
  return (
    <div className={isLeft ? "timeline--card items-end" : "timeline--card items-start"}>
        <Image url={details.img} alt={details.title} className="h-[125px]"/>
        <h1 className={isLeft ? "text-3xl font-bold text-end" : "text-3xl font-bold text-start"}>{details.title}</h1>
        <p className={isLeft ? "text-lg font-thin text-end" : "text-lg font-thin text-start"}>{details.desc}</p>
        {details.children}
    </div>
  )
}

export default TimelineCard
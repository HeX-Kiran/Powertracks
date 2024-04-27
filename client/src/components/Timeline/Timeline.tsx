import { ReactNode } from "react"
import "./Timeline.css"
import TimelineCard from "./TimelineCard/TimelineCard"

export type TimelineProps = {
    title: string,
    desc: string,
    img: string,
    children?: ReactNode
}

type TimeLineInputs = {
    timeLineDetails:TimelineProps[]
}


function Timeline({timeLineDetails}:TimeLineInputs) {
  return (
    <div>
        {
            timeLineDetails.map((details,index)=>{
                return<div className="timeline">
                    {
                        index % 2 == 0
                        ?
                        <div className="timeline--left">
                            <TimelineCard details={details} isLeft={true}/>
                        </div>
                        :
                        <div>

                        </div>
                    }
                    <div className="timeline-middle">
                       
                        <div className="timeline-round"></div>
                    </div>
                    
                    {
                        index % 2 != 0
                        ?
                        <div className="timeline--right">
                            <TimelineCard details={details} isLeft={false}/>
                        </div>
                        :
                        <div>
                            
                        </div>
                    }

                </div>
            })
        }
    </div>
  )
}

export default Timeline
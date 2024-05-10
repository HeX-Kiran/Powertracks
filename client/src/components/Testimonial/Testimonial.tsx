import { useState } from "react"
import Carousel, { Feedback } from "../Carousel/Carousel"
import "./Testimonial.css"

function Testimonial() {

    const feedbacks: Feedback[] = [
        {
            comment:"Powertracksolar offered us first class service, their staff was professional and knowledgeable",
            username:"Mathew Abraham",
            place:"Kozhikode"
        },
        {
            comment:"I had a great experience. I was well informed at every step of the process. This is a well run local business.",
            username:"Nikhil",
            place:"Shornur,Palakkad"
        },
        {
            comment:"I highly recommend PowerTracks for solar installations. They provided excellent service from start to finish.",
            username:"Manoj",
            place:"Guruvayur,Thrissur"
        },
        {
            comment:"PowerTracks exceeded our expectations with their expertise and attention to detail during the solar setup. We couldn't be happier!",
            username:"Soman",
            place:"Perinthalmana,Malappuram"
        },
        {
            comment:"Thanks to PowerTracks, our home is now powered by clean, renewable energy. The installation was professional and hassle-free",
            username:"Smitha",
            place:"Mannarkkad,Palakkad"
        },
        {
            comment:"Thanks to PowerTracks, our home is now powered by clean, renewable energy. The installation was professional and hassle-free",
            username:"Kiran",
            place:"Wayanad"
        },

    ]

    const [currentFeedback,setCurrentFeedbacks] = useState<number>(1);

    const updateCurrentFeedback = (newFeedback: number)=>{
       
        if(newFeedback<0) setCurrentFeedbacks(0)
        else  setCurrentFeedbacks(newFeedback);
       
    }
  return (
    <section className="section-testimonial">
        <header className="text-6xl font-bold">Lets hear from our customer</header>
        <Carousel feebacks={feedbacks} currentFeedback={currentFeedback} updateCurrentFeedback={updateCurrentFeedback} />
    </section>
  )
}

export default Testimonial
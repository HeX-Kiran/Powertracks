import Timeline, { TimelineProps } from "../Timeline/Timeline"
import "./How.css"
import consultantImg from "../../assets/steps/consultation.webp"
import proposal from "../../assets/steps/proposal.webp"
import paperwork from "../../assets/steps/paperwork.webp"
import installation from "../../assets/steps/installation.webp"
import grid from "../../assets/steps/grid.webp"
import solarHome from "../../assets/steps/solar-home.webp"
import maintainence from "../../assets/steps/maintainence.webp"
import Button from "../Button/Button"


function How() {

    const steps: TimelineProps[] = [
        {
            title:"Free on-site consultation",
            desc:"Our team will survey your home,answer all your queries and present you the digial outline of the system.",
            img:consultantImg
        },
        {
            title:"Tailored solar proposal and action plans",
            desc:"In response to your specifications, our team will develop a personalized proposal. We'll outline actionable plans and keep you informed throughout every stage of the process.",
            img:proposal
        },
        {
            title:"Documentation and subsidy facilitation",
            desc:"We handle the entire paperwork process from start to finish, ensuring seamless coordination with the local electricity distribution company and securing subsidies for you.",
            img:paperwork
        },
        {
            title:"Methodical and secure installation by certified professionals",
            desc:"Upon receipt of your advance payment, your rooftop system will be delivered in sleek vans and installed promptly, with a focus on cleanliness and professional execution.",
            img:installation
        },
        {
            title:"Grid integration",
            desc:"We manage the process of linking your system to the power grid through collaboration with the local electricity distributor, including the installation of a new electricity meter.",
            img:grid
        },
        {
            title:"Activation of your new system",
            desc:"Activate your system for lower electricity costs and a future powered by sustainable energy!",
            img:solarHome
        },
        {
            title:"Thorough cleaning and upkeep",
            desc:"We'll contact you to arrange regular deep cleaning and preventive maintenance checks for your system over the course of five years.",
            img:maintainence
        },

    ]
  return (
    <section className='section-how'>
        <header >Transform into solar</header>
        <h3>Swtiching to solar made simple in few steps.Let's get started</h3>
        <Timeline timeLineDetails={steps} />
        {/* <Button text="Get consultation"/> */}
    </section>
  )
}

export default How
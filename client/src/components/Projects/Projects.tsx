import Image from "../Image/Image"
import "./Project.css"
import projectImg1 from "../../assets/projects/project-1.webp"
import projectImg2 from "../../assets/projects/project-2.webp"
import projectImg3 from "../../assets/projects/project-3.webp"
import Button from "../Button/Button"

function Projects() {
  return (
    <section className="section-projects">
        <div className="projects-layout">
            <Image url={projectImg1} alt="Products" className="h-[100%]"/>
            <Image url={projectImg3} alt="Products" className="h-[100%]"/>
            <Image url={projectImg2} alt="Products" className="h-[100%]"/>
            <div className="project-heading">
                <h1 className="project-title">Our Projects</h1>
                <Button text="See Details" />
            </div>
            <div className='dark-overlay'/>
        </div>
        
    </section>
  )
}

export default Projects
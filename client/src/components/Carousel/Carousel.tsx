import "./Carousel.css"

export type Feedback = {
    comment: string,
    username: string,
    place: string,
}

type CarouselProps = {
    feebacks: Feedback[],
    currentFeedback: number,
    updateCurrentFeedback(index:number):void
}

function Carousel({feebacks,currentFeedback,updateCurrentFeedback}:CarouselProps) {
    

    
    const selectedFeedback = currentFeedback === 1 || currentFeedback === 0 ? feebacks.slice(0,3) :feebacks.slice(currentFeedback-1,currentFeedback+2)
    const totalPagination = Array.from(Array(feebacks.length-2).keys())

    
    
        
    
    
  return (
    <div className="carousel">
        <div className="carousel-container">
            {
                selectedFeedback.map((feeback,index)=>{
                    return(
                        <div className={currentFeedback === currentFeedback+index-1 ? "feedback-card feedback-card-active" : "feedback-card"} onClick={()=>updateCurrentFeedback( currentFeedback+index-1)}>
                            <h1 className="carousel-comment">"{feeback.comment}"</h1>
                            <p><span className="carousel-username">{feeback.username}</span> - <span>{feeback.place}</span></p>
                        </div>  
                    )
                })
            }
        </div>
        
        <div className="carousel-paginagion">
            {
                totalPagination.map((page)=>{
                    
                    
                    return (
                        <div className={page === currentFeedback-1 ? "caurosel-page carousel-page-active" : "caurosel-page"}>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Carousel
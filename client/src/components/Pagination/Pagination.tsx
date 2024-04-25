import "./Pagination.css"

type PaginationProps = {
    paginationLimit: number
    currentPage: number | string;
    onClick(newPage: number | string):void
}

function Pagination({paginationLimit,currentPage,onClick}:PaginationProps) {

    const pages = Array.from(Array(paginationLimit).keys())
  return (
    <div className='pagination flex items-start gap-12 mt-8'>
        {
            pages.map((page)=>{
                return <p className={currentPage === page ? "pagination-button page-active" : "pagination-button"} onClick={()=>onClick(page)}>{paginationLimit < 10 ? `0${page+1}`: page+1}</p>
            })
        }
    </div>
  )
}

export default Pagination
import "./ProductNavbar.css"
import searchIcon from "../../../../../assets/icons/search.webp"
import Searchbar from "../../../../../components/Searchbar/Searchbar"
import { useState } from "react"


type ProductNavbarProps = {
  inputValue: string
  handleInputChange(text: string): void,
  categoryList: (string |undefined) [];
}

function ProductNavbar({inputValue,handleInputChange,categoryList} : ProductNavbarProps) {

    const [currentSelectedCategory,setCategory] = useState(0);
  return (
    <nav className='product-nav-bar'>
         <h1 className='text-3xl font-bold uppercase tracking-widest'>Powertracks</h1>
         <Searchbar icon={searchIcon} className="product-search-bar" placeholder="Search" value={inputValue} onChange={(e)=>handleInputChange(e.target.value)}/>
         <div className="category-list">
              {
                  categoryList.map((category,index)=>{
                    return (
                      <a onClick={()=>setCategory(index)} className={index === currentSelectedCategory ? "font-bold underline text-xl cursor-pointer":"text-md font-normal cursor-pointer"}>{category}</a>
                    )
                  })
              }
         </div>
    </nav>
  )
}

export default ProductNavbar
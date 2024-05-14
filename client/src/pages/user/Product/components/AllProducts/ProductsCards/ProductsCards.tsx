import Image from "../../../../../../components/Image/Image"
import { ProductDetails } from "../../../../../../components/Products/ProductLayout/ProductLayout"
import "./ProductsCards.css"

type ProductCardsProps = {
   
    
} & ProductDetails

function ProductsCards({imgURL,name,desc,spec,subText,category}:ProductCardsProps) {
  
    
  return (
    <div className="product-cards mt-20">
        <div className="product-card bg-violet-200">
                <Image url={imgURL} alt={name} height={"300px"} width={"300px"}/>
        </div>
        <div className="product-card-details">
            <div className="product-card-heading w-[100%] flex flex-col items-center justify-center gap-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-lg font-thin">{category}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductsCards
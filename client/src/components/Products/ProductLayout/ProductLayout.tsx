import "./ProductLayout.css"

import abb3 from "../../../assets/products/abb 3.webp"
import abb5 from "../../../assets/products/abb5.webp"
import goldiePanels from "../../../assets/products/goldi.webp"
import wareePanels from "../../../assets/products/waree.webp"
import { useState } from "react"
import Image from "../../Image/Image"
import Pagination from "../../Pagination/Pagination"
import Button from "../../Button/Button"

type ProductDetails = {
    id:number,
    name:string,
    desc: string
    spec:string,
    subText: string,
    imgURL: string,
}

function ProductLayout() {

    const products: ProductDetails[] = [
        {
            id:1,
            name:"Waree Panels",
            desc:"Waree solar panels are high-performance, eco-friendly solar panels known for their efficiency, durability, and environmentally conscious manufacturing processes, making them a popular choice for sustainable energy solutions.",
            spec:"450kW - 900kW Panels",
            subText:"Waree solar panels are advanced, eco-friendly panels known for their high efficiency, durability, and sustainable manufacturing practices.",
            imgURL:wareePanels
        },
        {
            id:2,
            name:"Goldie Green Panels",
            desc:"Goldie Green solar panels are high-performance, eco-friendly solar panels known for their efficiency, durability, and environmentally conscious manufacturing processes, making them a popular choice for sustainable energy solutions.",
            spec:"350kW - 800kW Panels",
            subText:"Goldie Green solar panels are advanced, eco-friendly panels known for their high efficiency, durability, and sustainable manufacturing practices.",
            imgURL:goldiePanels
        },
        {
            id:3,
            name:"ABB Inverter",
            desc:"An ABB 3kW inverter stands out for its high efficiency, reliability, advanced technology including MPPT and grid-tie capabilities, comprehensive monitoring and control features, and strict safety standards such as anti-islanding protection. These qualities make it a top choice for renewable energy systems and electrical installations.",
            spec:"3kW",
            subText:"The ABB 3kW inverter is a high-efficiency, reliable device with advanced technology and safety features, ideal for renewable energy systems and electrical installations.",
            imgURL:abb3
        },
        {
            id:4,
            name:"ABB Inverter",
            desc:"An ABB 5kW inverter stands out for its high efficiency, reliability, advanced technology including MPPT and grid-tie capabilities, comprehensive monitoring and control features, and strict safety standards such as anti-islanding protection. These qualities make it a top choice for renewable energy systems and electrical installations.",
            spec:"5kW",
            subText:"The ABB 5kW inverter is a high-efficiency, reliable device with advanced technology and safety features, ideal for renewable energy systems and electrical installations.",
            imgURL:abb5
        },
       
       
    ]

    const [currProduct,setCurrProduct] = useState<number>(0);

    function updateCurrProduct(newProduct: number | string){
        if(typeof newProduct === "number") setCurrProduct(newProduct);
    }
  return (
    <main className="product-layout">
        <div className="product-image-container">
            {/* Product image header and image */}
            {/* product description */}
            <div className="product-image-details flex items-center justify-between pb-2">
                {/* product id and name */}
                <div className="flex items-start gap-2 flex-col">
                    <h3>0{products[currProduct].id}</h3>
                    <p className="text-lg font-bold">{products[currProduct].name}</p>
                </div>
                {/* product specs */}
                <div className="flex items-start gap-2 flex-col">
                    <h3>Capacity</h3>
                    <p className="text-lg font-bold">{products[currProduct].spec}</p>
                </div>
            </div>
            {/* Image */}
            <Image url={products[currProduct].imgURL} alt={products[currProduct].name} className="h-[56vh] w-[100%]"/>
        </div>  
        <div className="product-details-container">
            <div className="product-details-body">
                <h1>{`${products[currProduct].name} is one of our best product`}</h1>
                <p>{products[currProduct].desc}</p>
                <Button text="More Info"/>
            </div>
            <div className="pagination-container ">

                <Pagination paginationLimit={4} currentPage={currProduct} onClick={updateCurrProduct}/>
            </div>
        </div>
    </main>
  )
}

export default ProductLayout
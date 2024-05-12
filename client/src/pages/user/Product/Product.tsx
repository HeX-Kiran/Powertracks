import "./Product.css"

import ProductNavbar from "./components/ProductNavbar/ProductNavbar"
import { type ProductDetails } from "../../../components/Products/ProductLayout/ProductLayout"
import abb3 from "../../../assets/products/abb 3.webp"
import abb5 from "../../../assets/products/abb5.webp"
import goldiePanels from "../../../assets/products/goldi.webp"
import wareePanels from "../../../assets/products/waree.webp"
import { useMemo, useState } from "react"
import ProductInfo from "./components/ProductInfo/ProductInfo"



function Product() {

    
    const products: ProductDetails[] = [
        {
            id:1,
            category:"Panel",
            name:"Waree Panels",
            desc:"Waree solar panels are high-performance, eco-friendly solar panels known for their efficiency, durability, and environmentally conscious manufacturing processes, making them a popular choice for sustainable energy solutions.",
            spec:"450kW - 900kW Panels",
            subText:"Waree solar panels are advanced, eco-friendly panels known for their high efficiency, durability, and sustainable manufacturing practices.",
            imgURL:wareePanels
        },
        {
            id:2,
            category:"Panel",
            name:"Goldie Green Panels",
            desc:"Goldie Green solar panels are high-performance, eco-friendly solar panels known for their efficiency, durability, and environmentally conscious manufacturing processes, making them a popular choice for sustainable energy solutions.",
            spec:"350kW - 800kW Panels",
            subText:"Goldie Green solar panels are advanced, eco-friendly panels known for their high efficiency, durability, and sustainable manufacturing practices.",
            imgURL:goldiePanels
        },
        {
            id:3,
            category:"Invertor",
            name:"ABB Inverter",
            desc:"An ABB 3kW inverter stands out for its high efficiency, reliability, advanced technology including MPPT and grid-tie capabilities, comprehensive monitoring and control features, and strict safety standards such as anti-islanding protection. These qualities make it a top choice for renewable energy systems and electrical installations.",
            spec:"3kW",
            subText:"The ABB 3kW inverter is a high-efficiency, reliable device with advanced technology and safety features, ideal for renewable energy systems and electrical installations.",
            imgURL:abb3
        },
        {
            id:4,
            name:"ABB Inverter",
            category:"Invertor",
            desc:"An ABB 5kW inverter stands out for its high efficiency, reliability, advanced technology including MPPT and grid-tie capabilities, comprehensive monitoring and control features, and strict safety standards such as anti-islanding protection. These qualities make it a top choice for renewable energy systems and electrical installations.",
            spec:"5kW",
            subText:"The ABB 5kW inverter is a high-efficiency, reliable device with advanced technology and safety features, ideal for renewable energy systems and electrical installations.",
            imgURL:abb5
        },
       
       
    ];

    const[inputValue,setInputValue] = useState("");

    const [currentProduct,setCurrentProduct] = useState(0);

    const handleSearchBar = (searchString: string)=>{
        setInputValue(searchString);
    }

    const categoryList  = useMemo(()=>{
        const categorys = products.map((item)=>item.category);
        const filteredCategory = new Set([...categorys]);
        return [...filteredCategory]
    },[products]) 



    console.log(categoryList);
    


  return (
    <section className='product-page'>
        <ProductNavbar inputValue={inputValue} handleInputChange={handleSearchBar} categoryList={categoryList}/>
            
        
        
    </section>
  )
}

export default Product
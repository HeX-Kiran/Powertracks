import "./Product.css"

import ProductNavbar from "./components/ProductNavbar/ProductNavbar"
import About from "./../../../components/About/About"

import AllProducts from "./components/AllProducts/AllProducts"




function Product() {

    
    


  return (
    <section className='product-page'>
        <ProductNavbar />
        {/* <About /> */}
        <AllProducts />
        
        
        
    </section>
  )
}

export default Product
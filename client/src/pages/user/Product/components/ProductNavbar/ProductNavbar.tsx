import { useNavigate } from "react-router-dom"
import "./ProductNavbar.css"




  

function ProductNavbar() {

  const navigate = useNavigate();
   
  return (
    <nav className='product-nav-bar'>
         <h1 className='text-2xl font-bold uppercase cursor-pointer' onClick={()=>navigate("/")}>Powertracks</h1>
         <ul >
              <li><a>Home</a></li>
              <li><a>Products</a></li>
              <li><a>About Us</a></li>
              <li><a>Cart(0)</a></li>
         </ul>
    </nav>
  )
}

export default ProductNavbar
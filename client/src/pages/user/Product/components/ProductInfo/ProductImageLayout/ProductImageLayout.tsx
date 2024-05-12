import { useState } from "react";
import Image from "../../../../../../components/Image/Image";

type ProductImageLayoutProps = {
    images : string[];
}
function ProductImageLayout({images}:ProductImageLayoutProps) {

    const [currImage,setCurrImage] = useState(0);

  return (
    <aside className='product-image-layout'>
        <div className="main-image">
                <Image url={images[currImage]} alt="solar products" />
        </div>
        {
            images.map((url,index)=>{
                return(
                    <Image url={url} alt="solar-products" onClick={()=>setCurrImage(index)}/>
                )
            })
        }
    </aside>
  )
}

export default ProductImageLayout
import ProductImageLayout from "./ProductImageLayout/ProductImageLayout"
import { type ProductDetails } from "../../../../../components/Products/ProductLayout/ProductLayout"

type ProductInfoProps = {
    productDetails: ProductDetails[];
}

function ProductInfo() {
  return (
    <main className="product-info-layout">
        {/* <ProductImageLayout></ProductImageLayout> */}
    </main>
  )
}

export default ProductInfo
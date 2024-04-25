import "./Product.css"
import ProductLayout from "./ProductLayout/ProductLayout"

function Products() {
  return (
    <section className="section-products">
        <header className="uppercase font-bold mb-16">Top products</header>
        <ProductLayout/>
    </section>
  )
}

export default Products
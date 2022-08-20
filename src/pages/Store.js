import ProductItem from "../components/ProductItem"
import ProductContext from "../context/ProductContext"
import { useContext, useState } from "react"
import CategoryFilter from "../components/CategoryFilter"

const Store = () => {
  const { products, setProducts } = useContext(ProductContext)
  setProducts(products)
  const [filterCategory, setFilterCategory] = useState(products)
  const [activeCategory, setActiveCategory] = useState("ALL")

  return (
    <section className="min-h-screen pt-12 bg-neutral-100 px-2 py-4">
      <h2 className="text-center text-2xl">BROWSER OUR WATCHES</h2>
      <CategoryFilter
        setFilterCategory={setFilterCategory}
        products={products}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ul className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filterCategory.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default Store

import { createContext, useState } from "react"
import data from "../data"

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data)
  const values = { products, setProducts }
  return (
    <>
      <ProductContext.Provider value={values}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export default ProductContext

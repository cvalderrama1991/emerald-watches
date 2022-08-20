import ProductContext from "../context/ProductContext"
import { useContext, useEffect, useState } from "react"

const Carousel = () => {
  const { products } = useContext(ProductContext)
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImg === products.length - 1) {
        return setCurrentImg(0)
      } else {
        return setCurrentImg((current) => current + 1)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [products, currentImg])

  return (
    <div>
      <img
        src={products[currentImg].image}
        alt={products[currentImg].category}
      />
    </div>
  )
}

export default Carousel

import formatCurrency from "../utilities/formatCurrency"
import CartContext from "../context/CartContext"
import { useContext } from "react"

const ProductItem = ({ product }) => {
  const { addToCart, cartItems, increase } = useContext(CartContext)

  const isInCart = (product) =>
    cartItems?.find((item) => item.id === product.id)

  return (
    <li className="flex flex-col items-center justify-between bg-black/5 gap-1 p-2 rounded">
      <div>
        <img src={product.image} alt={product.category} />
      </div>
      <h3>{product.category}</h3>
      <p className="text-xs text-center text-neutral-600">{product.desc}</p>
      <p className="text-sm">{formatCurrency(product.price)}</p>
      {isInCart(product) ? (
        <button
          className="border-2 border-green-700 bg-white text-green-700 rounded px-3 py-1 active:scale-95"
          onClick={() => increase(product)}
        >
          Add More
        </button>
      ) : (
        <button
          className="bg-green-700 text-white font-bold px-3 py-1 rounded active:scale-95"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      )}
    </li>
  )
}

export default ProductItem

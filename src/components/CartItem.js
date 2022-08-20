import { useContext } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import CartContext from "../context/CartContext"
import formatCurrency from "../utilities/formatCurrency"

const CartItem = ({ item }) => {
  const { increase, removeFromCart, decrease } = useContext(CartContext)

  return (
    <li className="h-24 container mx-auto grid grid-cols-3 bg-black/10 rounded relative">
      {/* imag */}
      <div className="w-full">
        <img src={item.image} alt={item.category} className="h-24" />
      </div>
      {/* Name and Desc */}
      <div className="flex flex-col justify-center text-sm md:text-md">
        <h3>{item.category}</h3>
        <p>{item.desc}</p>
      </div>
      {/* Quantity and Price */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm md:text-md">{formatCurrency(item.price)}</p>
        <div className="border border-neutral-500 px-1 py-2 rounded flex gap-2 items-center">
          {/* Decrease Item Quantity Button */}
          <button
            className="bg-red-400 px-2 py-1 rounded flex items-center justify-center active:scale-95"
            onClick={() => decrease(item)}
          >
            <FaMinus />
          </button>
          <span className="w-6 text-center">{item.quantity}</span>
          {/* Increase Item Quantity Button */}
          <button
            className="bg-blue-400 px-2 py-1 rounded flex items-center justify-center active:scale-95"
            onClick={() => increase(item)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <button
        className="text-red-600 bg-red-200 h-8 w-8 rounded-full absolute right-[-4px] top-[-12px]"
        onClick={() => removeFromCart(item)}
      >
        x
      </button>
    </li>
  )
}

export default CartItem

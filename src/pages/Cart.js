import CartContext from "../context/CartContext"
import { useContext } from "react"
import CartItem from "../components/CartItem"
import formatCurrency from "../utilities/formatCurrency"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cartItems, clearCart, checkout, itemCount, itemTotalPrice } =
    useContext(CartContext)

  return (
    <section className="pt-12 min-h-screen px-2 flex flex-col gap-2">
      <h2 className="text-center font-bold text-green-700 text-2xl md:text-3xl m-2">
        ITEMS IN CART
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center">No Items In Cart</p>
      ) : (
        <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="container mx-auto w-full max-w-sm h-full flex flex-col gap-2 mb-4 mt-2">
          <div className="bg-neutral-900 text-white py-2 flex flex-col items-center rounded">
            <p>Products In Cart: {itemCount}</p>
            <p>Cart Total: {formatCurrency(itemTotalPrice)}</p>
          </div>
          <button
            className="w-full bg-red-600 rounded py-2 text-white font-bold"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link to="/checkout" onClick={checkout}>
            <div className="w-full bg-yellow-400 rounded py-2 text-black font-bold text-center">
              Checkout
            </div>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Cart

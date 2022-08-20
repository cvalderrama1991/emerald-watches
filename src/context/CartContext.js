import { createContext, useReducer } from "react"
import { sumCartItems, cartReducer } from "./cartReducer"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    ...sumCartItems,
    checkout: false,
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload })
  }
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload })
  }
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload })
  }
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_FROM_CART", payload })
  }
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }
  const checkout = (payload) => {
    dispatch({ type: "CHECKOUT", payload })
  }

  const values = {
    cartItems: state.cartItems,
    ...state,
    addToCart,
    increase,
    decrease,
    removeFromCart,
    clearCart,
    checkout,
  }
  return (
    <>
      <CartContext.Provider value={values}>{children}</CartContext.Provider>
    </>
  )
}

export default CartContext

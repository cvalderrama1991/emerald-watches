export const sumCartItems = (cartItems) => {
  let itemCount = cartItems.reduce(
    (total, item) => (total = total + item.quantity),
    0
  )
  let itemTotalPrice = cartItems.reduce(
    (total, item) => (total = total + item.quantity * item.price),
    0
  )

  return { itemCount, itemTotalPrice }
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        ...sumCartItems([
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ]),
        checkout: false,
      }
    case "INCREASE":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        ...sumCartItems(
          state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        ),
        checkout: false,
      }
    case "DECREASE":
      let decreaseArr = []
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      if (cartItem.quantity === 1) {
        decreaseArr = state.cartItems.filter((item) => item.id !== cartItem.id)
      } else {
        decreaseArr = state.cartItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      return {
        ...state,
        cartItems: decreaseArr,
        ...sumCartItems(decreaseArr),
        checkout: false,
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        ...sumCartItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        checkout: false,
      }
    case "CLEAR_CART":
      return { ...state, checkout: false, cartItems: [], ...sumCartItems }
    case "CHECKOUT":
      return {
        ...state,
        checkout: !state.checkout,
        cartItems: [],
        ...sumCartItems,
      }
    default:
      return new Error(`Unknown action type: ${action.type}`)
  }
}

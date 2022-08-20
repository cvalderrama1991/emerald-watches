import { Routes, Route } from "react-router-dom"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Cart from "./pages/Cart"
import { ProductProvider } from "./context/ProductContext"
import { CartProvider } from "./context/CartContext"
import Checkout from "./components/Checkout"

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/emerald-watches" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  )
}

export default App

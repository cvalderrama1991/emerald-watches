import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
import { useContext } from "react"
import { FaCartPlus } from "react-icons/fa"

const Header = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="bg-black h-12 w-full fixed top-0 left-0 z-20">
      <header className="container mx-auto h-full flex justify-between items-center px-2">
        <div className="text-green-500 font-bold text-xl">
          <Link to="/emerald-watches">EMERALD</Link>
        </div>
        <nav>
          <ul className="text-white font-bold flex items-center gap-3">
            <li>
              <Link to="/store">STORE</Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="flex items-center gap-1 text-md relative mr-6">
                  <FaCartPlus size={24} />
                  {cartItems?.length > 0 && (
                    <span className="bg-green-700 h-6 w-6 rounded-full flex items-center justify-center text-sm absolute top-[-6px] right-[-20px]">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

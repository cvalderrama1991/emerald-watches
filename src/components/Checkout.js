import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/emerald-watches")
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen pt-12 flex items-center justify-center flex-col gap-2">
      <p className="text-green-700 text-center font-bold max-w-sm">
        Thank you for your purchase!, Your watch will be delivered to you with
        in 24 hours!
      </p>
      <p className="text-green-700 text-center font-bold max-w-sm">
        Redirecting to Home Page...
      </p>
    </div>
  )
}

export default Checkout

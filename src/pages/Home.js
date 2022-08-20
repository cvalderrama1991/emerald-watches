import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"

const Home = () => {
  return (
    <section className="relative container mx-auto h-screen px-2 pt-12 flex items-center justify-center flex-col md:flex-row ">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className="font-bold text-2xl md:text-4xl text-black">
          EMERALD WATCHES
        </h1>
        <h2 className="text-neutral-600">
          Its the right time to to buy your dream watch. Do not wait any longer.
        </h2>
        <div className="bg-green-500 px-8 py-2 rounded text-white max-w-max">
          <Link to="/store">Shop</Link>
        </div>
      </div>
      <div className="">
        <Carousel />
      </div>
    </section>
  )
}

export default Home

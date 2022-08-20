import { useEffect } from "react"

const CAT = {
  ALL: "ALL",
  GMT: "GMT-MASTER II",
  SKY: "SKY-DWELLER",
  SEA: "SEA-DWELLER",
  DEEPSEA: "DEEPSEA",
}

const CategoryFilter = ({
  setFilterCategory,
  products,
  activeCategory,
  setActiveCategory,
}) => {
  useEffect(() => {
    if (activeCategory === CAT.ALL) {
      setFilterCategory(products)
    } else {
      const filtered = products.filter((product) =>
        product.category.includes(activeCategory)
      )
      setFilterCategory(filtered)
    }
  }, [activeCategory, products, setFilterCategory])

  return (
    <>
      <p className="text-center">Categories</p>
      <div className="max-w-md mx-auto py-2">
        <div className="grid grid-cols-5 gap-1">
          <button
            className={`border-2 border-black rounded text-sm md:text-md ${
              activeCategory === CAT.ALL
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveCategory(CAT.ALL)}
          >
            All
          </button>
          <button
            className={`border-2 border-black rounded text-sm md:text-md ${
              activeCategory === CAT.GMT
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveCategory(CAT.GMT)}
          >
            GMT
          </button>
          <button
            className={`border-2 border-black rounded text-sm md:text-md ${
              activeCategory === CAT.SKY
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveCategory(CAT.SKY)}
          >
            SKY
          </button>
          <button
            className={`border-2 border-black rounded text-sm md:text-md ${
              activeCategory === CAT.SEA
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveCategory(CAT.SEA)}
          >
            SEA
          </button>
          <button
            className={`border-2 border-black rounded text-sm md:text-md ${
              activeCategory === CAT.DEEPSEA
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveCategory(CAT.DEEPSEA)}
          >
            DEEPSEA
          </button>
        </div>
      </div>
    </>
  )
}

export default CategoryFilter

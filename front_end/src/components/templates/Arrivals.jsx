import Product_grid from '../organisms/Product_grid'

const Arrivals = ({ arrivals }) => {
  
  return (
    <div className="pt-16 pb-16 relative">
      <h1 className="z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-right uppercase absolute top-6 right-6">new arrivals</h1>
      <Product_grid arrivals={arrivals} className="z-9" />
    </div>

  )
}

export default Arrivals
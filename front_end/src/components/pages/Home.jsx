import Hero from '../organisms/Hero'
import Recommandations from '../templates/Recommandations'
import Arrivals from '../templates/Arrivals'
import Categories from '../organisms/Categories'
import Product_details from "../atoms/Product_details"
import Price from '../atoms/Price'


const Home = () => {
  return (
    <div>
        <Hero />
        <Recommandations />
        <Arrivals />
        <Categories />
        <Product_details/>
        <Price/>
    </div>
  )
}

export default Home
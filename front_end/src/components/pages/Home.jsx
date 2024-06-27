import Hero from '../organisms/Hero'
import Recommandations from '../templates/Recommandations'
import Arrivals from '../templates/Arrivals'
import Categories from '../organisms/Categories'
import Product_card from '../molecules/Product_card';


const Home = () => {
  return (
    <div>
        <Hero />
        <Recommandations />
        <Arrivals />
        <Categories />
        <Product_card/>
    </div>
  )
}

export default Home
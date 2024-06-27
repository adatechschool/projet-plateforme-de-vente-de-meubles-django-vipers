import Hero from '../organisms/Hero'
import Recommandations from '../templates/Recommandations'
import Arrivals from '../templates/Arrivals'
import Categories from '../organisms/Categories'
import Product_details from "../atoms/Product_details";
import Product_card from '../molecules/Product_card';
import Price from '../atoms/Price'


const Home = () => {
  return (
    <div>
        <Hero />
        <Recommandations />
        <Arrivals />
        <Categories />
        <Product_details/>
        <Product_card/>
        <Price/>
    </div>
  )
}

export default Home
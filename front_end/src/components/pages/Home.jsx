import Hero from '../organisms/Hero'
import Recommandations from '../templates/Recommandations'
import Arrivals from '../templates/Arrivals'
import Categories from '../organisms/Categories'



const Home = () => {
  return (
    <div>
        <Hero />
        <Recommandations />
        <Arrivals />
        <Categories />
    </div>
  )
}

export default Home
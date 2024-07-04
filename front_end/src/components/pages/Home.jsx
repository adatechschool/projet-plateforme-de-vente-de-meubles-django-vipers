import Hero from "../organisms/Hero";
import Recommandations from "../templates/Recommandations";
import Arrivals from "../templates/Arrivals";
import Categories from "../organisms/Categories";

const Home = ({products}) => {
  return (
    <div>
      <Hero />
      <Recommandations recommandations = {products} />
      <Arrivals arrivals = {products} />
      <Categories />
    </div>
  );
};

export default Home;

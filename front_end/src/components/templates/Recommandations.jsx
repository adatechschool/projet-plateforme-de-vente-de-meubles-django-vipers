import Product_card from "../molecules/Product_card";
import Product_carroussel from "../organisms/Product_carroussel";

const Recommandations = ({ arrivals }) => {
  return (
    <>
      <div className="pt-16 pb-16">
        <h1 className="text-4xl font-thin text-center">just for you</h1>
        <Product_carroussel arrivals={arrivals} />
      </div>
    </>
  );
};

export default Recommandations;

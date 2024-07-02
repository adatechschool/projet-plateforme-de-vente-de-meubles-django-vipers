import Add2cart from "../atoms/Add2cart";
import Add2favourite from "../atoms/Add2favourite";
import Product_price from "../atoms/Product_price";
import Product_details from "../atoms/Product_details";
import Product_photo from "../atoms/Product_photo";


const Product_card = ({ arrival }) => {
  return (
    <div>
      <div className="relative group box-content w-64 h-96">
        <figure className="h-full transition duration-500 ease-in-out group-hover:blur-md">
          <Product_photo arrival={arrival} className="" />
        </figure>
        <div className="absolute inset-0 flex flex-col items-center opacity-0 group-hover:opacity-100">
          <div className="card-body items-center">
            <h2 className="font-bold text-black text-lg">{arrival.name}</h2>
            <Product_price arrival={arrival} />
          </div>
          <div className="flex flex-wrap flex-row gap-0.5 w-full">
            <Add2cart />
            <Add2favourite />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Product_card;

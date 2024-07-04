import Add2cart from "../atoms/Add2cart";
import Add2favourite from "../atoms/Add2favourite";
import Product_price from "../atoms/Product_price";
import Product_photo from "../atoms/Product_photo";
import { Link } from "react-router-dom";


const Product_card = ({ product }) => {
  return (
    <div>
      <div className="relative group box-content w-64 h-96">
        <figure className="h-full transition duration-500 ease-in-out group-hover:blur-md">
          <Product_photo product={product} className="" />
        </figure>
        <div className="absolute inset-0 flex flex-col items-center opacity-0 group-hover:opacity-100">
          <div className="card-body items-center">
            <Link to={"/product?id="+ product.id}><h2 className="font-bold text-black text-lg">{product.name}</h2></Link>
            <Product_price product={product} />
          </div>
          <div className="flex w-full gap-12">
            <Add2cart />
            <Add2favourite />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Product_card;
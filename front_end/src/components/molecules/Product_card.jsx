import Add2cart from "../atoms/Add2cart";
import Add2favourite from "../atoms/Add2favourite";
import Product_price from "../atoms/Product_price";
import Product_details from "../atoms/Product_details";
import Product_photo from "../atoms/Product_photo";


const Product_card = ({
  product
}) => {
  return (
    <div>
      <div className="relative group box-content w-64 h-96">
        <figure className="h-full transition duration-500 ease-in-out group-hover:blur-md">
          <Product_photo className="" image={image} />
        </figure>
        <div className="absolute inset-0 flex flex-col items-center opacity-0 group-hover:opacity-100">
          <div className="card-body items-center">
            <Product_details
              name={name}
              dimensions={dimensions}
              description={description}
              available={available}
              type={type}
              colors={colors}
              materials={materials}
            />
            <Product_price price={price} />
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

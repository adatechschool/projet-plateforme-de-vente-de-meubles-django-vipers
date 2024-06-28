import Add2cart from "../atoms/Add2cart";
import Add2favourite from "../atoms/Add2favourite";
import Product_price from "../atoms/Product_price";
import Product_details from "../atoms/Product_details";
import Product_photo from "../atoms/Product_photo";


const Product_card = ({
  name,
  price,
  dimensions,
  description,
  available,
  image,
  type,
  colors,
  materials,
}) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
   
     <div>
        <figure>
          <Product_photo image={image} />
        </figure>
        <div className="card-body">
          <Product_price price={price} />
          <Product_details
            name={name}
            dimensions={dimensions}
            description={description}
            available={available}
            type={type}
            colors={colors}
            materials={materials}
          />
        </div>
        <div className="card-actions flex">
          <Add2cart />
          <Add2favourite />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product_card;

const Product_price = ({ product }) => {
  return (
    <div>
      <p className="Price font-bold "> price : {product.price}€ </p>
    </div>
  );
};

export default Product_price;

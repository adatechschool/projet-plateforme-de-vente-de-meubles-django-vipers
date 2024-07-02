import Product_card from "../molecules/Product_card";

const Product_carroussel = ({ arrivals }) => {
  return (
    <>
      <div className="carousel space-x-4 w-full pt-5 pb-5 scroll-smooth relative">
      {arrivals.slice(0, 10).map((arrival, index) => (
        <div key={index} className="carousel-item w-64 relative group">
          <Product_card arrival={arrival} />
        </div>
        ))}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            className="btn btn-circle"
            onClick={(e) => alert("Scroll left")}
          >
            ❮
          </button>
          <button
            className="btn btn-circle"
            onClick={(e) => alert("Scroll right")}
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default Product_carroussel;

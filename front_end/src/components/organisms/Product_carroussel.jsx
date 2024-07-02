import Product_card from "../molecules/Product_card";
import { useRef } from 'react';

const Product_carroussel = ({ products }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full pt-5">
      <div ref={carouselRef} className="carousel space-x-4 w-full overflow-x-auto scroll-smooth relative">
        {products.slice(0, 20).map((product, index) => (
          <div key={index} className="carousel-item w-64 relative group">
            <Product_card product={product} />
          </div>
        ))}
        </div>
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-4">
          <button
            className="btn btn-circle"
            onClick={scrollLeft}
          >
            ❮
          </button>
          <button
            className="btn btn-circle"
            onClick={scrollRight}
          >
            ❯
          </button>
        </div>
      </div>
  );
};

export default Product_carroussel;
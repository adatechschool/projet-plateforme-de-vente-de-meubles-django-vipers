import React, { useState, useRef } from "react";
import Add2cart from "./Add2cart";
import Add2favourite from "./Add2favourite";
import Favourites from '../atoms/Favourites';

const Product_details = ({ product }) => {

  const addToFavourites = (product) => {
    setFavouriteItems([...favouriteItems, product]);
  };

  const [favouriteItems, setFavouriteItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const images = [product.image1, product.image2];
  
  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-3 ml-3 flex">
      <div className="w-2/5 relative">
        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden carousel-item  h-90 w-90">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="object-cover rounded-box w-full transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded-l"
              onClick={scrollLeft}
            >
              ❮
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded-r"
              onClick={scrollRight}
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      <div className="border-l border-gray-300 mx-4"></div>

      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-black text-center">
          {product.name}
        </h2>
        <div className="mt-2 mb-2 space-y-2">
          <div>Dimensions: {product.dimensions}cm</div>
          <div>Description: {product.description}</div>
          <div>Category: {product.type}</div>
          <div>Color: {product.colors}</div>
          <div>Material: {product.materials}</div>
          <div>Price: {product.price}€</div>
          <div className='flex flex-wrap flex-row gap-0.5 w-full'>
            <Add2cart />
            <Add2favourite item={product} onAddToFavourites={addToFavourites} />
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div>
          <Favourites favouriteItems={favouriteItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_details;
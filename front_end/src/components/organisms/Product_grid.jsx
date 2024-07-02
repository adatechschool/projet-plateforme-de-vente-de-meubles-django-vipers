import React from 'react';
import Product_card from '../molecules/Product_card';

const ProductGrid = ({ arrivals }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 pl-20 pr-20 pt-5">
      {arrivals.slice(0, 6).map((arrival, index) => (
      <div key={index} className="relative group">
        <Product_card arrival={arrival} />
      </div>
      ))}
    </div>
  );
};

export default ProductGrid;

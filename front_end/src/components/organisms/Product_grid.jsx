import React from 'react';

const ProductGrid = ({ arrivals }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 pl-20 pr-20 pt-5">
      {arrivals.map((arrival, index) => (
      <div key={index} className="relative group">
        <img src={arrival.image1} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>{arrival.name}</p>
        <p className='font-thin'>{arrival.materials.name}</p>
        <p className='font-thin'>{arrival.price}</p>
        </div>

      </div>
      ))}
    </div>
  );
};

export default ProductGrid;

import React from 'react';
import arrival1 from '../../assets/newarrivals/arrival1.jpg';
import arrival2 from '../../assets/newarrivals/arrival2.jpg';
import arrival3 from '../../assets/newarrivals/arrival3.jpg';
import arrival4 from '../../assets/newarrivals/arrival4.jpg';
import arrival5 from '../../assets/newarrivals/arrival5.jpg';
import arrival6 from '../../assets/newarrivals/arrival6.jpg';

const ProductGrid = (id) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 pl-20 pr-20 pt-5">

      <div className="relative group">
        <img src={arrival1} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>meuble</p>
        <p className='font-thin'>material</p>
        <p className='font-thin'>price</p>
        </div>

      </div>

      <div className="relative group">
        <img src={arrival2} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>meuble</p>
        <p className='font-thin'>material</p>
        <p className='font-thin'>price</p>
        </div>

      </div>
      <div className="relative group">
        <img src={arrival3} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>meuble</p>
        <p className='font-thin'>material</p>
        <p className='font-thin'>price</p>
        </div>

      </div>
      <div className="relative group">
        <img src={arrival4} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>meuble</p>
        <p className='font-thin'>material</p>
        <p className='font-thin'>price</p>
        </div>

      </div>
      <div className="relative group">
        <img src={arrival5} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>meuble</p>
        <p className='font-thin'>material</p>
        <p className='font-thin'>price</p>
        </div>

      </div>
      <div className="relative group">
        <img src={arrival6} alt="arrival1" className="rounded-md w-full h-[580px] object-cover transition duration-500 ease-in-out group-hover:blur-md" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-center pointer-events-none group-hover:opacity-100">
        <p className='text-2xl font-bold'>meuble</p>
        <p className='font-thin'>material</p>
        <p className='font-thin'>price</p>
        </div>

      </div>
    </div>
  );
};

export default ProductGrid;

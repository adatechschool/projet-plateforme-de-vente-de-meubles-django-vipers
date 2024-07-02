import React from 'react'

const Product_details = ({ product }) => {
  return (
    <div>
        <div className=" mt-3 ml-3 flex flex-col gap-[60px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black">{product.name}</h2>
        <div className="mt-2 mb-2 flex space-x-2 items-center">
        <div className="">
            {product.dimensions}
          </div>
          <div className="">
            {product.description}
          </div>
          <div className="">
            {product.available}
          </div>
          <div className="">
            {product.types}
          </div>
          <div className="">
            {product.colors}
          </div>
        </div>

        <div className="mt-4 text-gray-600">
          </div>
          <span className="font-bold text-black">{product.materials}</span>
    
      </div>
    </div>

    </div>
  )
}

export default Product_details
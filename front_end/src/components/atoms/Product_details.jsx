import React from 'react'

const Product_details = ({ arrival }) => {
  return (
    <div>
        <div className=" mt-3 ml-3 flex flex-col gap-[60px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black">{arrival.name}</h2>
        <div className="mt-2 mb-2 flex space-x-2 items-center">
        <div className="">
            {arrival.dimensions}
          </div>
          <div className="">
            {arrival.description}
          </div>
          <div className="">
            {arrival.available}
          </div>
          <div className="">
            {arrival.types}
          </div>
          <div className="">
            {arrival.colors}
          </div>
        </div>

        <div className="mt-4 text-gray-600">
          </div>
          <span className="font-bold text-black">{arrival.materials}</span>
    
      </div>
    </div>

    </div>
  )
}

export default Product_details
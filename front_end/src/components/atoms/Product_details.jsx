import React from 'react'

const Product_details = ({ name, dimensions, description, available, type, colors, materials }) => {
  return (
    <div>
        <div className=" mt-3 ml-3 flex flex-col gap-[60px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black">{name}</h2>
        <div className="mt-2 mb-2 flex space-x-2 items-center">
        <div className="">
            {dimensions}
          </div>
          <div className="">
            {description}
          </div>
          <div className="">
            {available}
          </div>
          <div className="">
            {type}
          </div>
          <div className="">
            {colors}
          </div>
        </div>

        <div className="mt-4 text-gray-600">
          Materials : </div>
          <span className="font-bold text-black">{materials}</span>
    
      </div>
    </div>

    </div>
  )
}

export default Product_details
import React from 'react'


const Product_photo = ({ arrival }) => {
  return (
    <><img
    src={ arrival.image1 }
    alt=""
    className="object-cover rounded-box h-full"
  /> </>
  )
}

export default Product_photo
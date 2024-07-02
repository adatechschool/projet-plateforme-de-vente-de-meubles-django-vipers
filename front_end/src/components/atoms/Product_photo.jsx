import React from 'react'


const Product_photo = ({ product }) => {
  return (
    <><img
    src={ product.image1 }
    alt=""
    className="object-cover rounded-box h-full"
  /> </>
  )
}

export default Product_photo
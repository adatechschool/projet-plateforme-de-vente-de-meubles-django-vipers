import React from 'react'

import Chairs from "../../assets/chairs_sofas.jpg";


const Product_photo = ({ image }) => {
  return (
    <><img
    src={Chairs}
    alt=""
    className="object-cover rounded-box h-full"
  /> </>
  )
}

export default Product_photo
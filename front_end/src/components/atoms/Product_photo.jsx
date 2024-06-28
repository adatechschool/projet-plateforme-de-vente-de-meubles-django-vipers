import React from 'react'

import Chairs from "../../assets/chairs_sofas.jpg";


const Product_photo = ({ image }) => {
  return (
    <div><img
    src={image}
    alt=""
    className=" "
  /> </div>
  )
}

export default Product_photo